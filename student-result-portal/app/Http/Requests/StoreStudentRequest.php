<?php

namespace App\Http\Requests;

use App\Models\Student;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreStudentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:100'],
            'roll' => ['required', 'string', 'max:30', 'unique:students,roll'],
            'department' => ['required', Rule::in(Student::DEPARTMENTS)],
            'email' => ['required', 'email', 'max:150', 'unique:students,email'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Student name is required.',
            'roll.required' => 'Roll number is required.',
            'roll.unique' => 'This roll number already exists.',
            'department.required' => 'Please select a department.',
            'department.in' => 'Selected department is invalid.',
            'email.required' => 'Email address is required.',
            'email.email' => 'Enter a valid email address.',
            'email.unique' => 'This email is already registered.',
        ];
    }
}
