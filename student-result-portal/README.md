# Student Result Portal (Laravel 11)

## Features
- Manual authentication (login, register, logout, remember me)
- Student CRUD with Form Request validation
- Results per student with AUTOMATIC grade + grade point + CGPA
- Dashboard with statistics
- Bootstrap 5 UI (CDN, no npm build needed), SQLite database

## Setup
```bash
composer create-project laravel/laravel student-result-portal
cd student-result-portal
# copy ALL folders from this zip (app, database, public, resources, routes)
# into the project folder and choose "Replace/Merge" when asked
touch database/database.sqlite      # (Windows: type nul > database\database.sqlite)
php artisan key:generate
php artisan migrate:fresh --seed
php artisan serve
```
Open http://127.0.0.1:8000
Demo login: **admin@example.com / password123**

(Laravel 11 already uses SQLite by default. If your .env says mysql, set `DB_CONNECTION=sqlite`
and remove the other DB_* lines.)

## How the requirements are met
| Requirement | Where |
|---|---|
| Migrations for students & results | database/migrations/*_create_students_table.php, *_create_results_table.php |
| One-to-many (Eloquent) | app/Models/Student.php `results()` hasMany, app/Models/Result.php `student()` belongsTo |
| Resource controller (full CRUD) | app/Http/Controllers/StudentController.php, routes/web.php |
| Common layout + Blade views | resources/views/layouts/app.blade.php, resources/views/students/* |
| Form Request validation + errors in Blade | app/Http/Requests/Store/UpdateStudentRequest.php, `@error` in students/_form.blade.php |
| Results page with automatic grade | students/show.blade.php, Result::calculateGrade() + `saving` event in Result.php |
| Auth middleware on create/edit/delete | routes/web.php `Route::middleware('auth')` group |
