<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Home') | Student Result Portal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
</head>
<body class="@yield('body_class')">

<nav class="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm">
    <div class="container">
        <a class="navbar-brand" href="{{ route('home') }}">
            <i class="bi bi-mortarboard-fill me-1"></i> Student Result Portal
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav me-auto">
                @auth
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('dashboard') ? 'active fw-semibold' : '' }}" href="{{ route('dashboard') }}">
                            <i class="bi bi-speedometer2"></i> Dashboard</a>
                    </li>
                @endauth
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('students.index', 'students.show') ? 'active fw-semibold' : '' }}" href="{{ route('students.index') }}">
                        <i class="bi bi-people"></i> Students</a>
                </li>
                @auth
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('students.create') ? 'active fw-semibold' : '' }}" href="{{ route('students.create') }}">
                            <i class="bi bi-plus-circle"></i> Add Student</a>
                    </li>
                @endauth
            </ul>

            <div class="d-flex align-items-center gap-2">
                @auth
                    <div class="dropdown">
                        <a class="btn btn-light btn-sm dropdown-toggle" href="#" data-bs-toggle="dropdown">
                            <i class="bi bi-person-circle"></i> {{ auth()->user()->name }}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li class="dropdown-item-text small text-muted">{{ auth()->user()->email }}</li>
                            <li><hr class="dropdown-divider"></li>
                            <li>
                                <form method="POST" action="{{ route('logout') }}">
                                    @csrf
                                    <button class="dropdown-item text-danger" type="submit">
                                        <i class="bi bi-box-arrow-right"></i> Logout</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                @else
                    <a href="{{ route('login') }}" class="btn btn-light btn-sm"><i class="bi bi-box-arrow-in-right"></i> Login</a>
                    <a href="{{ route('register') }}" class="btn btn-outline-light btn-sm"><i class="bi bi-person-plus"></i> Register</a>
                @endauth
            </div>
        </div>
    </div>
</nav>

<main class="container py-4">
    @include('partials.flash')
    @yield('content')
</main>

<footer class="text-center py-4 small">
    &copy; {{ date('Y') }} Student Result Portal &middot; Built with Laravel
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
@stack('scripts')
</body>
</html>
