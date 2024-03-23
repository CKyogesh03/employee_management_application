document.getElementById("delete-employee-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const employeeId = document.getElementById("employeeId").value;

    deleteEmployee(employeeId)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

async function deleteEmployee(id) {
    const response = await fetch(`http://localhost:8080/api/v1/employees/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}
