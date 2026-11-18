<?php

namespace App\Http\Controllers;

use App\Models\Result;
use App\Models\Student;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        $totalStudents = Student::count();
        $totalResults = Result::count();
        $avgMarks = round(Result::avg('marks') ?? 0, 1);
        $passRate = $totalResults > 0
            ? round(Result::where('marks', '>=', 40)->count() / $totalResults * 100, 1)
            : 0;

        $byDepartment = Student::select('department', DB::raw('COUNT(*) as total'))
            ->groupBy('department')
            ->orderByDesc('total')
            ->get();

        $recentResults = Result::with('student')->latest()->take(6)->get();

        return view('dashboard.index', compact(
            'totalStudents', 'totalResults', 'avgMarks', 'passRate', 'byDepartment', 'recentResults'
        ));
    }
}
