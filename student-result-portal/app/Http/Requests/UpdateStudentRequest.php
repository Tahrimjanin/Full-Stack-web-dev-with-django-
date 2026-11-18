<?php

namespace App\Http\Requests;

use App\Models\Student;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateStudentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $id = $this->route('student')->id; // ignore the current student for unique rules

        return [
            'name' => ['required', 'string', 'max:100'],
            'roll' => ['required', 'string', 'max:30', Rule::unique('students', 'roll')->ignore($id)],
            'department' => ['required', Rule::in(Student::DEPARTMENTS)],
            'email' => ['required', 'email', 'max:150', Rule::unique('students', 'email')->ignore($id)],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Student name is required.',
            'roll.required' => 'Roll number is required.',
            'roll.unique' => 'This roll number already exists.',
            'department.required' => 'Please select a department.',
            'email.required' => 'Email address is required.',
            'email.email' => 'Enter a valid email address.',
            'email.unique' => 'This email is already registered.',
        ];
    }
}
