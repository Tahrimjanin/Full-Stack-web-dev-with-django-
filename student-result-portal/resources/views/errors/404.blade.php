@extends('layouts.app')
@section('title', 'Page not found')

@section('content')
<div class="text-center py-5">
    <div class="display-1 fw-bold text-primary">404</div>
    <h4 class="mb-3">Page not found</h4>
    <p class="text-muted">The page you are looking for does not exist.</p>
    <a href="{{ url('/') }}" class="btn btn-primary"><i class="bi bi-house"></i> Go Home</a>
</div>
@endsection
