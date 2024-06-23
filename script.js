// Function to calculate the total cost and display bill details
function calculateTotal() {
    const costPerLiter = parseFloat(document.getElementById('costPerLiter').value) || 0;
    let totalQuantity = 0;
    let totalCost = 0;

    // Get all input fields
    const inputs = document.querySelectorAll('#dayInputs input[type="number"]');
    const days = [];

    // Calculate total quantity of milk for each day and total cost
    inputs.forEach((input, index) => {
        const day = index + 1;
        const quantity = parseFloat(input.value) || 0;
        const dayCost = quantity * costPerLiter;
        totalQuantity += quantity;
        totalCost += dayCost;
        days.push({ day, quantity, dayCost });
    });

    // Display total cost in popup
    document.getElementById('totalCost').textContent = 'Total cost for the month: ' + totalCost.toFixed(2) + ' rupees';

    // Display bill details in popup
    const tableBody = document.querySelector('#billTable tbody');
    tableBody.innerHTML = '';
    days.forEach(day => {
        const row = `<tr><td>${day.day}</td><td>${day.quantity.toFixed(2)}</td><td>${day.dayCost.toFixed(2)}</td></tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });

    // Show the popup
    document.getElementById('billDetailsPopup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('billDetailsPopup').style.display = 'none';
}

// Function to print the bill
function printBill() {
    const printContent = document.getElementById('billDetails').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}
