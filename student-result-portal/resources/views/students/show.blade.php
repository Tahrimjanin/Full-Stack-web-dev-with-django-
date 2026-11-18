@extends('layouts.app')
@section('title', $student->name)

@section('content')
<a href="{{ route('students.index') }}" class="text-decoration-none"><i class="bi bi-arrow-left"></i> Back to students</a>

<div class="row g-3 mt-1">
    <div class="col-lg-4">
        <div class="card p-4 text-center">
            <div class="avatar mb-3">{{ $student->initials }}</div>
            <h5 class="fw-bold mb-1">{{ $student->name }}</h5>
            <span class="badge bg-primary-subtle text-primary mb-3">{{ $student->department }}</span>
            <ul class="list-unstyled text-start small mb-0">
                <li class="py-2 border-top"><i class="bi bi-hash text-primary"></i> <strong>Roll:</strong> {{ $student->roll }}</li>
                <li class="py-2 border-top"><i class="bi bi-envelope text-primary"></i> <strong>Email:</strong> {{ $student->email }}</li>
            </ul>
            @auth
                <div class="mt-3 d-flex gap-2 justify-content-center">
                    <a href="{{ route('students.edit', $student) }}" class="btn btn-sm btn-outline-warning"><i class="bi bi-pencil"></i> Edit</a>
                </div>
            @endauth
        </div>

        @auth
        <div class="card p-4 mt-3">
            <h6 class="fw-bold mb-3"><i class="bi bi-plus-circle text-primary"></i> Add Result</h6>
            <form method="POST" action="{{ route('results.store', $student) }}" novalidate>
                @csrf
                <div class="mb-3">
                    <label for="course_code" class="form-label">Course Code</label>
                    <input type="text" id="course_code" name="course_code" value="{{ old('course_code') }}"
                           class="form-control @error('course_code') is-invalid @enderror" placeholder="e.g. CSE-101">
                    @error('course_code') <div class="invalid-feedback">{{ $message }}</div> @enderror
                </div>
                <div class="mb-3">
                    <label for="marks" class="form-label">Marks (0-100)</label>
                    <input type="number" id="marks" name="marks" value="{{ old('marks') }}" min="0" max="100"
                           class="form-control @error('marks') is-invalid @enderror" placeholder="e.g. 78">
                    @error('marks') <div class="invalid-feedback">{{ $message }}</div> @enderror
                    <div class="form-text">Grade is calculated automatically.</div>
                </div>
                <button class="btn btn-primary w-100"><i class="bi bi-check-lg"></i> Add Result</button>
            </form>
        </div>
        @endauth
    </div>

    <div class="col-lg-8">
        <div class="row g-3 mb-3">
            <div class="col-6 col-md-3"><div class="card p-3 text-center"><div class="text-muted small">Courses</div><div class="fs-4 fw-bold">{{ $totalCourses }}</div></div></div>
            <div class="col-6 col-md-3"><div class="card p-3 text-center"><div class="text-muted small">Total Marks</div><div class="fs-4 fw-bold">{{ $totalMarks }}</div></div></div>
            <div class="col-6 col-md-2"><div class="card p-3 text-center"><div class="text-muted small">Average</div><div class="fs-4 fw-bold">{{ $avgMarks }}</div></div></div>
            <div class="col-6 col-md-2"><div class="card p-3 text-center"><div class="text-muted small">CGPA</div><div class="fs-4 fw-bold text-primary">{{ number_format($cgpa, 2) }}</div></div></div>
            <div class="col-12 col-md-2">
                <div class="card p-3 text-center">
                    <div class="text-muted small">Status</div>
                    @if ($totalCourses === 0)
                        <div class="fs-5 fw-bold text-muted">N/A</div>
                    @elseif ($failed)
                        <div class="fs-5 fw-bold text-danger">Fail</div>
                    @else
                        <div class="fs-5 fw-bold text-success">Pass</div>
                    @endif
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header bg-white border-0 pt-3"><h6 class="fw-bold mb-0"><i class="bi bi-journal-text text-primary"></i> Results</h6></div>
            <div class="table-responsive">
                <table class="table table-hover align-middle mb-0">
                    <thead>
                        <tr><th>Course</th><th>Marks</th><th>Grade</th><th>Grade Point</th>@auth<th class="text-end">Actions</th>@endauth</tr>
                    </thead>
                    <tbody>
                    @forelse ($student->results as $r)
                        <tr>
                            <td class="fw-semibold">{{ $r->course_code }}</td>
                            <td>{{ $r->marks }}</td>
                            <td><span class="badge badge-grade {{ $r->badge_class }}">{{ $r->grade }}</span></td>
                            <td>{{ number_format($r->grade_point, 2) }}</td>
                            @auth
                            <td class="text-end text-nowrap">
                                <a href="{{ route('results.edit', $r) }}" class="btn btn-sm btn-outline-warning"><i class="bi bi-pencil"></i></a>
                                <form method="POST" action="{{ route('results.destroy', $r) }}" class="d-inline"
                                      onsubmit="return confirm('Delete this result?')">
                                    @csrf
                                    @method('DELETE')
                                    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                </form>
                            </td>
                            @endauth
                        </tr>
                    @empty
                        <tr><td colspan="5" class="text-center text-muted py-4">No results added yet.</td></tr>
                    @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
