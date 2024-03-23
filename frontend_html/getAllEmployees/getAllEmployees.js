document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/api/v1/employees')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const employeeList = document.getElementById('employeeList');
            data.forEach(employee => {
                const listItem = document.createElement('li');
                listItem.textContent = `ID: ${employee.id}, Name: ${employee.firstName} ${employee.lastName}, Age: ${employee.age}, Gender: ${employee.gender}, Email: ${employee.email}, Job: ${employee.job}, Salary: ${employee.salary}`;
                employeeList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
