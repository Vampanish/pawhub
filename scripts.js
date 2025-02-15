document.getElementById('role').addEventListener('change', function() {
    var otherRole = document.getElementById('otherRole');
    if (this.value === 'Others') {
        otherRole.style.display = 'block';
    } else {
        otherRole.style.display = 'none';
        document.getElementById('otherRoleInput').value = '';
    }
});

function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function(el) {
        el.textContent = '';
    });

    // Name validation
    let name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    // Age validation
    let age = document.getElementById('age').value;
    if (age.trim() === '' || isNaN(age) || age <= 0) {
        document.getElementById('ageError').textContent = 'Valid age is required';
        isValid = false;
    }

    // Gender validation
    let gender = document.getElementById('gender').value;
    if (gender.trim() === '') {
        document.getElementById('genderError').textContent = 'Gender is required';
        isValid = false;
    }

    // Address validation
    let address = document.getElementById('address').value;
    if (address.trim() === '') {
        document.getElementById('addressError').textContent = 'Address is required';
        isValid = false;
    }

    // Role validation
    let role = document.getElementById('role').value;
    if (role.trim() === '') {
        document.getElementById('roleError').textContent = 'Role is required';
        isValid = false;
    }

    // Other role validation if "Others" is selected
    if (role === 'Others') {
        let otherRoleInput = document.getElementById('otherRoleInput').value;
        if (otherRoleInput.trim() === '') {
            document.getElementById('otherRoleInputError').textContent = 'Please mention your role';
            isValid = false;
        }
    }

    // Contact validation
    let contact = document.getElementById('contact').value;
    if (contact.trim() === '') {
        document.getElementById('contactError').textContent = 'Contact is required';
        isValid = false;
    }

    // Email validation
    let email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    }

    return isValid;
}
