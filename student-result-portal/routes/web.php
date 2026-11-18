<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ResultController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

// Home: guests -> students list, logged-in users -> dashboard
Route::get('/', function () {
    return auth()->check()
        ? redirect()->route('dashboard')
        : redirect()->route('students.index');
})->name('home');

// ---------- Guest only (login / register) ----------
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login'])->name('login.attempt');
    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'register'])->name('register.attempt');
});

// ---------- Authenticated only ----------
// NOTE: this group is defined BEFORE the public resource so that
// "students/create" is not captured by "students/{student}".
Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // create, store, edit, update, destroy are protected by auth middleware
    Route::resource('students', StudentController::class)
        ->only(['create', 'store', 'edit', 'update', 'destroy']);

    // Results (add / edit / update / delete)
    Route::post('/students/{student}/results', [ResultController::class, 'store'])->name('results.store');
    Route::get('/results/{result}/edit', [ResultController::class, 'edit'])->name('results.edit');
    Route::put('/results/{result}', [ResultController::class, 'update'])->name('results.update');
    Route::delete('/results/{result}', [ResultController::class, 'destroy'])->name('results.destroy');
});

// ---------- Public (anyone can view) ----------
Route::resource('students', StudentController::class)->only(['index', 'show']);
