@extends('layouts.app')
@section('title', 'Register')
@section('body_class', 'auth-page')

@section('content')
<div class="card auth-card">
    <div class="text-center mb-4">
        <div class="avatar mb-3" style="width:64px;height:64px;font-size:1.6rem"><i class="bi bi-person-plus"></i></div>
        <h3 class="fw-bold mb-1">Create account</h3>
        <p class="text-muted mb-0">Register to add and manage results</p>
    </div>

    <form method="POST" action="{{ route('register.attempt') }}" novalidate>
        @csrf
        <div class="mb-3">
            <label for="name" class="form-label">Full Name</label>
            <div class="input-group has-validation">
                <span class="input-group-text"><i class="bi bi-person"></i></span>
                <input type="text" id="name" name="name" value="{{ old('name') }}"
                       class="form-control @error('name') is-invalid @enderror" placeholder="Your name" autofocus>
                @error('name') <div class="invalid-feedback">{{ $message }}</div> @enderror
            </div>
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <div class="input-group has-validation">
                <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                <input type="email" id="email" name="email" value="{{ old('email') }}"
                       class="form-control @error('email') is-invalid @enderror" placeholder="you@example.com">
                @error('email') <div class="invalid-feedback">{{ $message }}</div> @enderror
            </div>
        </div>

        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <div class="input-group has-validation">
                <span class="input-group-text"><i class="bi bi-lock"></i></span>
                <input type="password" id="password" name="password"
                       class="form-control @error('password') is-invalid @enderror" placeholder="At least 8 characters">
                <button type="button" class="btn toggle-pass" data-target="password"><i class="bi bi-eye"></i></button>
                @error('password') <div class="invalid-feedback">{{ $message }}</div> @enderror
            </div>
        </div>

        <div class="mb-4">
            <label for="password_confirmation" class="form-label">Confirm Password</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
                <input type="password" id="password_confirmation" name="password_confirmation" class="form-control" placeholder="Repeat password">
                <button type="button" class="btn toggle-pass" data-target="password_confirmation"><i class="bi bi-eye"></i></button>
            </div>
        </div>

        <button type="submit" class="btn btn-primary w-100 py-2"><i class="bi bi-person-check"></i> Register</button>
    </form>

    <p class="text-center mt-4 mb-0 text-muted">Already registered? <a href="{{ route('login') }}">Login</a></p>
</div>
@endsection

@push('scripts')
    @include('partials.toggle-pass')
@endpush
