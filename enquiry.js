document.getElementById('enquiryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    // Grab input fields
    const name = document.getElementById('enquiryName');
    const email = document.getElementById('enquiryEmail');
    const type = document.getElementById('enquiryType');
    const quantity = document.getElementById('quantity');
    const details = document.getElementById('details');

    // Error elements
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

    // Validation checks
    if (name.value.trim() === '') {
        document.getElementById('enquiryNameError').textContent = 'Please enter your full name.';
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        document.getElementById('enquiryEmailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (type.value === '') {
        document.getElementById('enquiryTypeError').textContent = 'Please select an enquiry type.';
        isValid = false;
    }

    if (quantity.value <= 0 || quantity.value === '') {
        document.getElementById('quantityError').textContent = 'Please enter a valid number greater than 0.';
        isValid = false;
    }

    if (details.value.trim().length < 5) {
        document.getElementById('detailsError').textContent = 'Please provide a few more details.';
        isValid = false;
    }

    // If valid, calculate dynamic pricing / availability and display it
    if (isValid) {
        const qty = parseInt(quantity.value);
        let estimatedCost = 0;
        let availabilityMsg = "Availability: Open slots available for your requested date!";

        if (type.value === "Catering") {
            estimatedCost = qty * 85; // e.g., R85 per person for coffee/pastries
        } else if (type.value === "Bulk Order") {
            estimatedCost = qty * 150; // e.g., R150 per bag of beans
        } else {
            estimatedCost = 0; // Sponsorship/Community
            availabilityMsg = "Sponsorship Status: Our community team will review your proposal within 48 hours.";
        }

        const resultBox = document.getElementById('dynamicResult');
        const resultText = document.getElementById('resultText');

        let costDisplay = type.value === "Sponsorship" ? "" : <br><strong>Estimated Total Cost:</strong> R${estimatedCost.toFixed(2)};

        resultText.innerHTML = `
            <strong>Thank you, ${name.value}!</strong><br>
            <strong>Service Type:</strong> ${type.value} (${qty} units/guests)<br>
            ${availabilityMsg}
            ${costDisplay}
        `;

        resultBox.style.display = 'block';
        resultBox.scrollIntoView({ behavior: 'smooth' });
    }
});