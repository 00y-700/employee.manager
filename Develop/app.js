var inquirer = require("inquirer");
var consoleTable = require("console.table");
var connection = require("./connection.js");

//Function Menu questions
function menu() {
    console.log("////////////////////////////////////////")
    console.log("----------------------------------------")
    console.log("----------EMPLOYEE TRACKER 1.0----------")
    console.log("----------------------------------------")
    console.log("////////////////////////////////////////")
    inquirer.prompt({
        name: "menu",
        type: "list",
        message: "Would you like to:",
        choices: ["View All Employees?", "View Employees by Department?", "View Employees by Role?", "Add an Employee?", "Remove an Employee?", "Quit"]
    }
    ).then(answer => {
        switch (answer.menu) {
            case "View All Employees?":
                viewAll();
                break;
            case "View Employees by Department?":
                viewDept();
                break;
            case "View Employees by Role?":
                viewRole();
                break;
            case "Add an Employee?":
                addNew();
                break;
            case "Remove an Employee?":
                removeEmp();
                break
            case "Quit":
                connection.end();
        }
    })
}

//Function View All

function viewAll() {
    connection.query("SELECT * FROM employees", function (err, res) {
        if (err) throw err;
        console.table(res)
        menu();
    });
}

//Function View Employees by Department
function viewDept() {
    inquirer.prompt(
        {
            name: "dept",
            type: "list",
            message: "Which Department Would You Like to View?",
            choices: ["Kitchen", "FOH", "Cleaning", "Home"]
        }
    ).then(choice => {
        switch (choice.dept) {
            case "Kitchen":
                kitchen()
                break;
            case "FOH":
                foh()
                break;
            case "Cleaning":
                cleaning()
                break;
            case "Home":
                menu()
        }
    });
}
function kitchen() {
    connection.query("SELECT * FROM employees WHERE manager_id=?", [1], function (err, res) {
        if (err) throw err;
        console.table(res)
        viewDept();
    });
}
function foh() {
    connection.query("SELECT * FROM employees WHERE manager_id=?", [6], function (err, res) {
        if (err) throw err;
        console.table(res)
        viewDept();
    })
}
function cleaning() {
    connection.query("SELECT * FROM employees WHERE manager_id=?", [10], function (err, res) {
        if (err) throw err;
        console.table(res)
        viewDept();
    })
}
//Function View Employee by Role

function viewRole() {
    inquirer.prompt(
        {
            name: "role",
            type: "list",
            message: "Which Role Would You Like to View?",
            choices: [
                "Chef de Cuisine", 
                "Sous-Chef", 
                "Chef de Partie",
                "Saucier",
                "Poissonnier",
                "Expo/Host",
                "Server",
                "Barkeep",
                "Busser",
                "Janitor",
                "Home"
            ]
        }
    ).then(choice => {
        switch (choice.role) {
            case "Chef de Cuisine":
                role(1)
                break;
            case "Sous-Chef":
                role(2)
                break;
            case "Chef de Partie":
                role(3)
            case "Saucier":
                role(4)
                break;
            case "Poissonnier":
                role(5)
                break;
            case "Expo/Host":
                role(6)
                break;
            case "Server":
                role(7)
                break;
            case "Barkeep":
                role(8)
                break;
            case "Busser":
                role(9)
                break;
            case "Janitor":
                role(10)
                break;
            case "Home":
                menu()
        }
    });
}
function role(number) {
    connection.query("SELECT * FROM employees WHERE role_id=?", [number], function (err, res) {
        if (err) throw err;
        console.table(res)
        viewRole();
    });
}
//Function Add Employee

function addNew() {
    inquirer.prompt(
        {
            name: "first",
            type: "input",
            message: "What is the Employee's First Name?"
        },
        {
            name: "last",
            type: "input",
            message: "What is the Employee's Last Name?"
        },
        {
            name: "newE",
            type: "list",
            message: "What is the Employee's Department?",
            choices: ["Kitchen", "FOH", "Cleaning"]
        }
    ).then(choice => {
        switch (choice.dept) {
            case "Kitchen":
                inquirer.prompt(
                    {
                        name: ""
                    }
                )
                break;
            case "FOH":
                foh()
                break;
            case "Cleaning":
                cleaning()
        }
    }
    )
}

//Function Delete Employee

menu();

