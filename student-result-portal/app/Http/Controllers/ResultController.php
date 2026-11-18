<?php

namespace App\Http\Controllers;

use App\Models\Result;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ResultController extends Controller
{
    // Add a result to a student. Grade is NOT sent by the user; the model calculates it.
    public function store(Request $request, Student $student)
    {
        $request->merge(['course_code' => strtoupper(trim((string) $request->course_code))]);

        $data = $request->validate([
            'course_code' => [
                'required', 'string', 'max:20',
                Rule::unique('results')->where('student_id', $student->id),
            ],
            'marks' => ['required', 'integer', 'between:0,100'],
        ], [
            'course_code.required' => 'Course code is required.',
            'course_code.unique' => 'This course already has a result for this student.',
            'marks.required' => 'Marks are required.',
            'marks.integer' => 'Marks must be a whole number.',
            'marks.between' => 'Marks must be between 0 and 100.',
        ]);

        $student->results()->create($data);

        return redirect()->route('students.show', $student)
            ->with('success', 'Result added. Grade calculated automatically.');
    }

    public function edit(Result $result)
    {
        $result->load('student');
        return view('results.edit', compact('result'));
    }

    public function update(Request $request, Result $result)
    {
        $request->merge(['course_code' => strtoupper(trim((string) $request->course_code))]);

        $data = $request->validate([
            'course_code' => [
                'required', 'string', 'max:20',
                Rule::unique('results')->where('student_id', $result->student_id)->ignore($result->id),
            ],
            'marks' => ['required', 'integer', 'between:0,100'],
        ], [
            'course_code.unique' => 'This course already has a result for this student.',
            'marks.between' => 'Marks must be between 0 and 100.',
        ]);

        $result->update($data);

        return redirect()->route('students.show', $result->student_id)
            ->with('success', 'Result updated.');
    }

    public function destroy(Result $result)
    {
        $studentId = $result->student_id;
        $result->delete();

        return redirect()->route('students.show', $studentId)
            ->with('success', 'Result deleted.');
    }
}
