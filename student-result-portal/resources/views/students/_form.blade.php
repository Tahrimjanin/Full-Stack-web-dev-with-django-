{{-- Shared form fields for create & edit. $student may be null. --}}
@php $s = $student ?? null; @endphp

<div class="row g-3">
    <div class="col-md-6">
        <label for="name" class="form-label">Full Name</label>
        <input type="text" id="name" name="name" value="{{ old('name', $s->name ?? '') }}"
               class="form-control @error('name') is-invalid @enderror" placeholder="e.g. Rahim Uddin">
        @error('name') <div class="invalid-feedback">{{ $message }}</div> @enderror
    </div>

    <div class="col-md-6">
        <label for="roll" class="form-label">Roll</label>
        <input type="text" id="roll" name="roll" value="{{ old('roll', $s->roll ?? '') }}"
               class="form-control @error('roll') is-invalid @enderror" placeholder="e.g. 2101001">
        @error('roll') <div class="invalid-feedback">{{ $message }}</div> @enderror
    </div>

    <div class="col-md-6">
        <label for="department" class="form-label">Department</label>
        <select id="department" name="department" class="form-select @error('department') is-invalid @enderror">
            <option value="">-- Select Department --</option>
            @foreach (\App\Models\Student::DEPARTMENTS as $dep)
                <option value="{{ $dep }}" @selected(old('department', $s->department ?? '') === $dep)>{{ $dep }}</option>
            @endforeach
        </select>
        @error('department') <div class="invalid-feedback">{{ $message }}</div> @enderror
    </div>

    <div class="col-md-6">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" name="email" value="{{ old('email', $s->email ?? '') }}"
               class="form-control @error('email') is-invalid @enderror" placeholder="student@example.com">
        @error('email') <div class="invalid-feedback">{{ $message }}</div> @enderror
    </div>
</div>
