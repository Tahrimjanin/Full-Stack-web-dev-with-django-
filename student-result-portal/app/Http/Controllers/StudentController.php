<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    // List with search + department filter + pagination
    public function index(Request $request)
    {
        $query = Student::query()->withCount('results');

        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('roll', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        if ($department = $request->input('department')) {
            $query->where('department', $department);
        }

        $students = $query->latest()->paginate(10)->withQueryString();
        $departments = Student::DEPARTMENTS;

        return view('students.index', compact('students', 'departments'));
    }

    public function create()
    {
        return view('students.create');
    }

    // Validation is done inside StoreStudentRequest
    public function store(StoreStudentRequest $request)
    {
        $student = Student::create($request->validated());

        return redirect()->route('students.show', $student)
            ->with('success', 'Student added successfully.');
    }

    // Student's results page + automatic summary
    public function show(Student $student)
    {
        $student->load(['results' => fn ($q) => $q->orderBy('course_code')]);

        $totalCourses = $student->results->count();
        $totalMarks = $student->results->sum('marks');
        $avgMarks = $totalCourses ? round($student->results->avg('marks'), 1) : 0;
        $cgpa = $student->cgpa();
        $failed = $student->hasFailed();

        return view('students.show', compact(
            'student', 'totalCourses', 'totalMarks', 'avgMarks', 'cgpa', 'failed'
        ));
    }

    public function edit(Student $student)
    {
        return view('students.edit', compact('student'));
    }

    public function update(UpdateStudentRequest $request, Student $student)
    {
        $student->update($request->validated());

        return redirect()->route('students.show', $student)
            ->with('success', 'Student updated successfully.');
    }

    public function destroy(Student $student)
    {
        $student->delete(); // results are removed by cascadeOnDelete

        return redirect()->route('students.index')
            ->with('success', 'Student deleted successfully.');
    }
}
