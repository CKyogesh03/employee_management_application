function fetchEmployeeDetails() {
    // Get the employee ID from the input field
    var employeeId = document.getElementById('employeeId').value;

    // Make sure the ID is not empty
    if (employeeId.trim() === '') {
        alert('Please enter an employee ID');
        return;
    }

    // API endpoint URL
    var apiUrl = 'http://localhost:8080/api/v1/employees/' + employeeId;

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => {
            // Check if the request was successful (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display employee details
            displayEmployeeDetails(data);
        })
        .catch(error => {
            console.error('Error fetching employee details:', error);
        });
}

function displayEmployeeDetails(employee) {
    // Display employee details in the HTML element with the id "employeeDetails"
    var detailsContainer = document.getElementById('employeeDetails');
    detailsContainer.innerHTML = `
        <h2>Employee Details</h2>
        <p><strong>ID:</strong> ${employee.id}</p>
        <p><strong>First Name:</strong> ${employee.firstName}</p>
        <p><strong>Last Name:</strong> ${employee.lastName}</p>
        <p><strong>Age:</strong> ${employee.age}</p>
        <p><strong>Gender:</strong> ${employee.gender}</p>
        <p><strong>Email:</strong> ${employee.email}</p>
        <p><strong>Job:</strong> ${employee.job}</p>
        <p><strong>Salary:</strong> ${employee.salary}</p>
    `;
}
