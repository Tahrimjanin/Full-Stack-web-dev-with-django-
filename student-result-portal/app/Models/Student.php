<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Student extends Model
{
    public const DEPARTMENTS = ['CSE', 'EEE', 'BBA', 'English', 'Law'];

    protected $fillable = ['name', 'roll', 'department', 'email'];

    // One-to-many: one student has many results
    public function results(): HasMany
    {
        return $this->hasMany(Result::class);
    }

    // CGPA = average of grade points of all results
    public function cgpa(): float
    {
        if ($this->results->isEmpty()) {
            return 0.0;
        }
        return round($this->results->avg('grade_point'), 2);
    }

    // Student fails if he/she has at least one F grade
    public function hasFailed(): bool
    {
        return $this->results->contains(fn ($r) => $r->grade === 'F');
    }

    public function getInitialsAttribute(): string
    {
        $parts = preg_split('/\s+/', trim($this->name));
        $first = mb_substr($parts[0] ?? '', 0, 1);
        $last = count($parts) > 1 ? mb_substr(end($parts), 0, 1) : '';
        return strtoupper($first . $last);
    }
}
