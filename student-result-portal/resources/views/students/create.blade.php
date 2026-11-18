@extends('layouts.app')
@section('title', 'Add Student')

@section('content')
<div class="row justify-content-center">
    <div class="col-lg-8">
        <div class="card p-4">
            <h4 class="page-title mb-4"><i class="bi bi-person-plus text-primary"></i> Add New Student</h4>
            <form method="POST" action="{{ route('students.store') }}" novalidate>
                @csrf
                @include('students._form', ['student' => null])
                <div class="mt-4 d-flex gap-2">
                    <button class="btn btn-primary"><i class="bi bi-check-lg"></i> Save Student</button>
                    <a href="{{ route('students.index') }}" class="btn btn-outline-secondary">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
