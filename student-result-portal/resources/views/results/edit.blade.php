@extends('layouts.app')
@section('title', 'Edit Result')

@section('content')
<div class="row justify-content-center">
    <div class="col-lg-6">
        <div class="card p-4">
            <h4 class="page-title mb-1"><i class="bi bi-pencil-square text-warning"></i> Edit Result</h4>
            <p class="text-muted">Student: <strong>{{ $result->student->name }}</strong> ({{ $result->student->roll }})</p>

            <form method="POST" action="{{ route('results.update', $result) }}" novalidate>
                @csrf
                @method('PUT')
                <div class="mb-3">
                    <label for="course_code" class="form-label">Course Code</label>
                    <input type="text" id="course_code" name="course_code" value="{{ old('course_code', $result->course_code) }}"
                           class="form-control @error('course_code') is-invalid @enderror">
                    @error('course_code') <div class="invalid-feedback">{{ $message }}</div> @enderror
                </div>
                <div class="mb-3">
                    <label for="marks" class="form-label">Marks (0-100)</label>
                    <input type="number" id="marks" name="marks" min="0" max="100" value="{{ old('marks', $result->marks) }}"
                           class="form-control @error('marks') is-invalid @enderror">
                    @error('marks') <div class="invalid-feedback">{{ $message }}</div> @enderror
                    <div class="form-text">Grade will be recalculated automatically.</div>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-primary"><i class="bi bi-check-lg"></i> Update</button>
                    <a href="{{ route('students.show', $result->student_id) }}" class="btn btn-outline-secondary">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
