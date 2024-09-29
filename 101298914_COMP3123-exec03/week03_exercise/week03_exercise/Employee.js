// Employee module

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", salary: 5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", salary: 4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", salary: 5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", salary: 9000}
];

// Function to get all employees
function getEmployees() {
    return employees;
}

// Function to add a new employee
function addEmployee(employee) {
    employees.push(employee);
}

// Export the functions and employees array
module.exports = {
    getEmployees,
    addEmployee
};
