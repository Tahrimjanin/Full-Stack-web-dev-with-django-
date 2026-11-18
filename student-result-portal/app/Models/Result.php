<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Result extends Model
{
    protected $fillable = ['student_id', 'course_code', 'marks', 'grade'];

    // Inverse of one-to-many: a result belongs to one student
    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }

    // Automatically calculate the grade every time a result is saved
    protected static function booted(): void
    {
        static::saving(function (Result $result) {
            $result->grade = self::calculateGrade((int) $result->marks);
        });
    }

    // Grade calculation from marks
    public static function calculateGrade(int $marks): string
    {
        return match (true) {
            $marks >= 80 => 'A+',
            $marks >= 75 => 'A',
            $marks >= 70 => 'A-',
            $marks >= 65 => 'B+',
            $marks >= 60 => 'B',
            $marks >= 55 => 'B-',
            $marks >= 50 => 'C+',
            $marks >= 45 => 'C',
            $marks >= 40 => 'D',
            default => 'F',
        };
    }

    // $result->grade_point
    public function getGradePointAttribute(): float
    {
        return match ($this->grade) {
            'A+' => 4.00, 'A' => 3.75, 'A-' => 3.50,
            'B+' => 3.25, 'B' => 3.00, 'B-' => 2.75,
            'C+' => 2.50, 'C' => 2.25, 'D' => 2.00,
            default => 0.00,
        };
    }

    // Bootstrap badge colour for the grade
    public function getBadgeClassAttribute(): string
    {
        return match (true) {
            in_array($this->grade, ['A+', 'A', 'A-']) => 'bg-success',
            in_array($this->grade, ['B+', 'B', 'B-']) => 'bg-primary',
            in_array($this->grade, ['C+', 'C', 'D']) => 'bg-warning text-dark',
            default => 'bg-danger',
        };
    }
}
