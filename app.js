const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const myTeam = []

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your manager's name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is the employee ID?",
      name: "employeeId",
    },
    {
      type: "input",
      message: "What is your manager's email address?",
      name: "emailAddress",
    },
    {
      type: "input",
      message: "What is your manager's office number?",
      name: "officeNumber",
    },
  ])
  .then((response) => {
    const newManager = new Manager(response.managerName, response.employeeId, response.emailAddress, response.officeNumber);
    myTeam.push(newManager)
    
    displayMenu()
  });


function displayMenu() {
    inquirer.prompt([
// insert "list" type prompt with name set to "choice" to give user choices "Add an Engineer", "Add an Intern", "Finish"
    ])
    .then(response => {
        console.log(response);
        // create if/else-if statement for different choices
    })
}