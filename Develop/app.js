var inquirer = require("inquirer");
var consoleTable = require("console.table");
var connection = require("./connection.js");

//Function Menu questions
function menu() {
    inquirer.prompt({
        name: "menu",
        type: "list",
        message: "Would you like to:",
        choices: ["View All Employees?", "View Employees by Department?", "View Employees by Role?", "Add an Employee?", "Remove an Employee?", "Quit"]
    }
    ).then(answer => {
        switch (answer.menu) {
            case "View All Employees":
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
    var query = connection.query("SELECT * FROM employees", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].first_name + " | " + res[i].surname + " | " + res[i].role_id + " | " + res[i].manager_id);
        }
        console.log("-----------------------------------");
    });
}

//Function View Employees by Department
function viewDept() {
    inquirer.prompt(
        {
            name: "dept",
            message: "Which Department Would You Like to View?",
            choices: ["Kitchen", "FOH", "Cleaning"]
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
        }
    });
}
function kitchen() {
    var query = connection.query("SELECT * FROM songs WHERE department_id=?", [0], function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].first_name + " | " + res[i].surname + " | " + res[i].role_id + " | " + res[i].manager_id);
        }
    });
}
function foh() {
    var query = connection.query("SELECT * FROM songs WHERE department_id=?", [1], function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].first_name + " | " + res[i].surname + " | " + res[i].role_id + " | " + res[i].manager_id);
        }
    })
}
function cleaning() {
    var query = connection.query("SELECT * FROM songs WHERE department_id=?", [2], function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].first_name + " | " + res[i].surname + " | " + res[i].role_id + " | " + res[i].manager_id);
        }
    })
}
//Function View Employee by Role

function viewRole() {
    inquirer.prompt(
        {
            name: "role",
            message: "Which Role Would You Like to View?",
            choices: ["Chef de Cuisine", "Sous-Chef", "Chef de Partie"]
        }
    ).then(choice => {
        switch (choice.role) {
            case "Chef de Cuisine":
                kitchen()
                break;
            case "Sous-Chef":
                foh()
                break;
            case "Chef de Partie":
                cleaning()
        }
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

