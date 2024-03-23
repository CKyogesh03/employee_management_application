document.getElementById("employee-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const job = document.getElementById("job").value;
    const salary = document.getElementById("salary").value;

    const data = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        email: email,
        job: job,
        salary: salary
    };

    postData("http://localhost:8080/api/v1/employees", data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}
