@extends('layouts.app')
@section('title', 'Edit Student')

@section('content')
<div class="row justify-content-center">
    <div class="col-lg-8">
        <div class="card p-4">
            <h4 class="page-title mb-4"><i class="bi bi-pencil-square text-warning"></i> Edit Student</h4>
            <form method="POST" action="{{ route('students.update', $student) }}" novalidate>
                @csrf
                @method('PUT')
                @include('students._form', ['student' => $student])
                <div class="mt-4 d-flex gap-2">
                    <button class="btn btn-primary"><i class="bi bi-check-lg"></i> Update Student</button>
                    <a href="{{ route('students.index') }}" class="btn btn-outline-secondary">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
