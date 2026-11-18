@extends('layouts.app')
@section('title', 'Students')

@section('content')
<div class="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
    <h3 class="page-title mb-0"><i class="bi bi-people text-primary"></i> Students</h3>
    @auth
        <a href="{{ route('students.create') }}" class="btn btn-primary"><i class="bi bi-plus-circle"></i> Add Student</a>
    @endauth
</div>

<form method="GET" action="{{ route('students.index') }}" class="card p-3 mb-3">
    <div class="row g-2">
        <div class="col-md-6">
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <input type="text" name="search" value="{{ request('search') }}" class="form-control" placeholder="Search by name, roll or email">
            </div>
        </div>
        <div class="col-md-3">
            <select name="department" class="form-select">
                <option value="">All Departments</option>
                @foreach ($departments as $dep)
                    <option value="{{ $dep }}" @selected(request('department') === $dep)>{{ $dep }}</option>
                @endforeach
            </select>
        </div>
        <div class="col-md-3 d-flex gap-2">
            <button class="btn btn-primary flex-fill">Filter</button>
            <a href="{{ route('students.index') }}" class="btn btn-outline-secondary flex-fill">Reset</a>
        </div>
    </div>
</form>

<div class="card">
    <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
            <thead>
                <tr><th>#</th><th>Name</th><th>Roll</th><th>Department</th><th>Email</th><th>Results</th><th class="text-end">Actions</th></tr>
            </thead>
            <tbody>
            @forelse ($students as $student)
                <tr>
                    <td>{{ $students->firstItem() + $loop->index }}</td>
                    <td class="fw-semibold">{{ $student->name }}</td>
                    <td>{{ $student->roll }}</td>
                    <td><span class="badge bg-primary-subtle text-primary">{{ $student->department }}</span></td>
                    <td>{{ $student->email }}</td>
                    <td>{{ $student->results_count }}</td>
                    <td class="text-end text-nowrap">
                        <a href="{{ route('students.show', $student) }}" class="btn btn-sm btn-outline-primary" title="View results"><i class="bi bi-eye"></i></a>
                        @auth
                            <a href="{{ route('students.edit', $student) }}" class="btn btn-sm btn-outline-warning" title="Edit"><i class="bi bi-pencil"></i></a>
                            <button type="button" class="btn btn-sm btn-outline-danger btn-delete"
                                    data-bs-toggle="modal" data-bs-target="#deleteModal"
                                    data-action="{{ route('students.destroy', $student) }}"
                                    data-name="{{ $student->name }}" title="Delete"><i class="bi bi-trash"></i></button>
                        @endauth
                    </td>
                </tr>
            @empty
                <tr><td colspan="7" class="text-center text-muted py-5">No students found.</td></tr>
            @endforelse
            </tbody>
        </table>
    </div>
    @if ($students->hasPages())
        <div class="card-footer bg-white border-0 pt-3">{{ $students->links('pagination::bootstrap-5') }}</div>
    @endif
</div>

@auth
<div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <form method="POST" id="deleteForm" class="modal-content">
            @csrf
            @method('DELETE')
            <div class="modal-header">
                <h5 class="modal-title"><i class="bi bi-exclamation-triangle text-danger"></i> Confirm delete</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to delete <strong id="deleteName"></strong>? All of the student's results will also be deleted.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-danger">Delete</button>
            </div>
        </form>
    </div>
</div>
@endauth
@endsection

@push('scripts')
<script>
document.querySelectorAll('.btn-delete').forEach(function (btn) {
    btn.addEventListener('click', function () {
        document.getElementById('deleteForm').action = btn.dataset.action;
        document.getElementById('deleteName').textContent = btn.dataset.name;
    });
});
</script>
@endpush
