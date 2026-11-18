@extends('layouts.app')
@section('title', 'Dashboard')

@section('content')
<h3 class="page-title mb-4"><i class="bi bi-speedometer2 text-primary"></i> Dashboard</h3>

<div class="row g-3 mb-4">
    <div class="col-6 col-lg-3">
        <div class="card stat-card p-3"><div class="d-flex align-items-center gap-3">
            <div class="icon bg-primary-subtle text-primary"><i class="bi bi-people-fill"></i></div>
            <div><div class="text-muted small">Total Students</div><div class="fs-4 fw-bold">{{ $totalStudents }}</div></div>
        </div></div>
    </div>
    <div class="col-6 col-lg-3">
        <div class="card stat-card p-3"><div class="d-flex align-items-center gap-3">
            <div class="icon bg-success-subtle text-success"><i class="bi bi-journal-check"></i></div>
            <div><div class="text-muted small">Total Results</div><div class="fs-4 fw-bold">{{ $totalResults }}</div></div>
        </div></div>
    </div>
    <div class="col-6 col-lg-3">
        <div class="card stat-card p-3"><div class="d-flex align-items-center gap-3">
            <div class="icon bg-warning-subtle text-warning"><i class="bi bi-bar-chart-fill"></i></div>
            <div><div class="text-muted small">Average Marks</div><div class="fs-4 fw-bold">{{ $avgMarks }}</div></div>
        </div></div>
    </div>
    <div class="col-6 col-lg-3">
        <div class="card stat-card p-3"><div class="d-flex align-items-center gap-3">
            <div class="icon bg-danger-subtle text-danger"><i class="bi bi-trophy-fill"></i></div>
            <div><div class="text-muted small">Pass Rate</div><div class="fs-4 fw-bold">{{ $passRate }}%</div></div>
        </div></div>
    </div>
</div>

<div class="row g-3">
    <div class="col-lg-4">
        <div class="card p-3 h-100">
            <h6 class="fw-bold mb-3">Students per department</h6>
            @forelse ($byDepartment as $d)
                <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
                    <span><i class="bi bi-building text-primary"></i> {{ $d->department }}</span>
                    <span class="badge bg-primary rounded-pill">{{ $d->total }}</span>
                </div>
            @empty
                <p class="text-muted mb-0">No students yet.</p>
            @endforelse
        </div>
    </div>

    <div class="col-lg-8">
        <div class="card p-3 h-100">
            <h6 class="fw-bold mb-3">Recent results</h6>
            <div class="table-responsive">
                <table class="table table-hover align-middle mb-0">
                    <thead><tr><th>Student</th><th>Course</th><th>Marks</th><th>Grade</th></tr></thead>
                    <tbody>
                    @forelse ($recentResults as $r)
                        <tr>
                            <td><a href="{{ route('students.show', $r->student_id) }}" class="text-decoration-none">{{ $r->student->name }}</a></td>
                            <td>{{ $r->course_code }}</td>
                            <td>{{ $r->marks }}</td>
                            <td><span class="badge badge-grade {{ $r->badge_class }}">{{ $r->grade }}</span></td>
                        </tr>
                    @empty
                        <tr><td colspan="4" class="text-center text-muted">No results yet.</td></tr>
                    @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
