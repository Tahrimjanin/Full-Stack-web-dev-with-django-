<?php

namespace Database\Seeders;

use App\Models\Result;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Demo admin (password is hashed automatically by the User model cast)
        User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => 'password123',
        ]);

        $students = [
            ['Rahim Uddin',     '2101001', 'CSE',     'rahim@example.com'],
            ['Karim Hossain',   '2101002', 'CSE',     'karim@example.com'],
            ['Nusrat Jahan',    '2102001', 'EEE',     'nusrat@example.com'],
            ['Tania Akter',     '2102002', 'EEE',     'tania@example.com'],
            ['Sabbir Ahmed',    '2103001', 'BBA',     'sabbir@example.com'],
            ['Mim Chowdhury',   '2104001', 'English', 'mim@example.com'],
            ['Arif Hasan',      '2105001', 'Law',     'arif@example.com'],
            ['Sumaiya Islam',   '2101003', 'CSE',     'sumaiya@example.com'],
        ];

        $courses = ['CSE-101', 'CSE-102', 'MAT-101', 'ENG-101', 'PHY-101'];

        foreach ($students as $s) {
            $student = Student::create([
                'name' => $s[0], 'roll' => $s[1], 'department' => $s[2], 'email' => $s[3],
            ]);

            // 3 to 5 results per student (grade is auto-calculated by the model)
            foreach (array_slice($courses, 0, rand(3, 5)) as $code) {
                Result::create([
                    'student_id' => $student->id,
                    'course_code' => $code,
                    'marks' => rand(35, 98),
                ]);
            }
        }
    }
}
