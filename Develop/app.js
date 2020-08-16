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
    ).then(answer =>  {
        switch(answer.menu) {
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
    var query = connection.query("SELECT * FROM employees", function(err, res) {
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
        switch(choice.dept) {
            case "Kitchen":
                kitchen()
        }
    })
    
    
    };

    function kitchen() {
        var query = connection.query("SELECT * FROM songs WHERE department_id=?", ["Dance"], function(err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
              console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
            }
    }
//Function View Employee by Role

//Function Add Employee

//Function Delete Employee


