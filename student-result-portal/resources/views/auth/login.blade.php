@extends('layouts.app')
@section('title', 'Login')
@section('body_class', 'auth-page')

@section('content')
<div class="card auth-card">
    <div class="text-center mb-4">
        <div class="avatar mb-3" style="width:64px;height:64px;font-size:1.6rem"><i class="bi bi-person-lock"></i></div>
        <h3 class="fw-bold mb-1">Welcome back</h3>
        <p class="text-muted mb-0">Login to manage students and results</p>
    </div>

    <form method="POST" action="{{ route('login.attempt') }}" novalidate>
        @csrf
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <div class="input-group has-validation">
                <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                <input type="email" id="email" name="email" value="{{ old('email') }}"
                       class="form-control @error('email') is-invalid @enderror" placeholder="you@example.com" autofocus>
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

        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" name="remember" id="remember">
            <label class="form-check-label" for="remember">Remember me</label>
        </div>

        <button type="submit" class="btn btn-primary w-100 py-2"><i class="bi bi-box-arrow-in-right"></i> Login</button>
    </form>

    <p class="text-center mt-4 mb-0 text-muted">No account? <a href="{{ route('register') }}">Register</a></p>
    <p class="text-center small text-muted mt-2 mb-0">Demo: admin@example.com / password123</p>
</div>
@endsection

@push('scripts')
    @include('partials.toggle-pass')
@endpush
