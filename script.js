document.getElementById('validateBtn').addEventListener('click', validatePAN);

function validatePAN() {
    const panInput = document.getElementById('panInput').value;
    const resultDiv = document.getElementById('result');
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (panInput === panInput.toUpperCase() && panPattern.test(panInput.toUpperCase())) {
        resultDiv.innerHTML = `<div class="alert alert-success">PAN Card Number is valid.</div>`;
    } else {
        resultDiv.innerHTML = `<div class="alert alert-danger">PAN Card Number is invalid. Please enter only uppercase letters.</div>`;
    }
}

