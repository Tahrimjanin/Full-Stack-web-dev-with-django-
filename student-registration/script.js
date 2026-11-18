document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("regForm");
  const recordsSection = document.getElementById("records");
  const dataBody = document.getElementById("dataBody");
  let counter = 0;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(id, message, inputEl) {
    document.getElementById(id).textContent = message;
    if (inputEl) inputEl.classList.toggle("invalid", message !== "");
  }

  function clearErrors() {
    document.querySelectorAll(".error").forEach(e => (e.textContent = ""));
    document.querySelectorAll(".invalid").forEach(e => e.classList.remove("invalid"));
  }

  function validate() {
    let valid = true;
    const fullName = form.fullName;
    const email = form.email;
    const phone = form.phone;
    const dob = form.dob;
    const department = form.department;
    const password = form.password;
    const gender = form.querySelector('input[name="gender"]:checked');

    clearErrors();

    if (fullName.value.trim() === "") {
      setError("fullNameError", "Full name is required.", fullName); valid = false;
    }

    if (email.value.trim() === "") {
      setError("emailError", "Email is required.", email); valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      setError("emailError", "Enter a valid email address.", email); valid = false;
    }

    if (phone.value.trim() === "") {
      setError("phoneError", "Phone number is required.", phone); valid = false;
    } else if (!/^[0-9+\-\s]{7,15}$/.test(phone.value.trim())) {
      setError("phoneError", "Enter a valid phone number.", phone); valid = false;
    }

    if (dob.value === "") {
      setError("dobError", "Date of birth is required.", dob); valid = false;
    }

    if (department.value === "") {
      setError("departmentError", "Please select a department.", department); valid = false;
    }

    if (!gender) {
      setError("genderError", "Please select a gender."); valid = false;
    }

    if (password.value === "") {
      setError("passwordError", "Password is required.", password); valid = false;
    } else if (password.value.length < 8) {
      setError("passwordError", "Password must be at least 8 characters.", password); valid = false;
    }

    return valid;
  }

  function addRow(data) {
    counter++;
    const tr = document.createElement("tr");
    const values = [
      counter, data.fullName, data.email, data.phone,
      data.dob, data.department, data.gender, "*".repeat(data.passwordLength)
    ];
    values.forEach(v => {
      const td = document.createElement("td");
      td.textContent = v;
      tr.appendChild(td);
    });
    dataBody.appendChild(tr);
    recordsSection.hidden = false;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) return;

    addRow({
      fullName: form.fullName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      dob: form.dob.value,
      department: form.department.value,
      gender: form.querySelector('input[name="gender"]:checked').value,
      passwordLength: form.password.value.length
    });

    form.reset();
    clearErrors();
    recordsSection.scrollIntoView({ behavior: "smooth" });
  });

  form.addEventListener("reset", clearErrors);

  // Live clearing of errors while typing
  form.querySelectorAll("input, select").forEach(el => {
    el.addEventListener("input", function () {
      const err = document.getElementById(el.name + "Error");
      if (err) err.textContent = "";
      el.classList.remove("invalid");
    });
  });
});
