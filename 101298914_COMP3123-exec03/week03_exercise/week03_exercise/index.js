var http = require("http");
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");
// Import Employee module
const { getEmployees, addEmployee } = require('./Employee');

// Get and display all employees
let allEmployees = getEmployees();
console.log(allEmployees);

// Add a new employee
let newEmployee = {id: 5, firstName: "Sam", lastName: "Smith", email: "sam@gmail.com", salary: 6000};
addEmployee(newEmployee);

// Display updated employees list
console.log(getEmployees());


//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    // Set response headers to handle JSON and HTML
    res.setHeader('Content-Type', 'application/json');
    
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    } else {
        if (req.url === '/') {
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Welcome to Lab Exercise 03</h1>');
        }

        else if (req.url === '/employee') {
            const employees = getEmployees();
            res.end(JSON.stringify(employees));
        }

        else if (req.url === '/employee/names') {
            const employeeNames = getEmployees()
                .map(emp => `${emp.firstName} ${emp.lastName}`) 
                .sort(); 
            res.end(JSON.stringify(employeeNames));
        }

        else if (req.url === '/employee/totalsalary') {
            const totalSalary = getEmployees()
                .reduce((sum, emp) => sum + emp.salary, 0); 
            res.end(JSON.stringify({ total_salary: totalSalary }));
        }

        else {
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
        }
    }
});


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});