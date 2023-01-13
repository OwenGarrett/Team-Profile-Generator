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
      message: "What is the manager employee ID number?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is your manager's email address?",
      name: "managerAddress",
    },
    {
      type: "input",
      message: "What is your manager's office number?",
      name: "officeNumber",
    },
  ])
  .then((response) => {
    const newManager = new Manager(response.managerName, response.managerId, response.managerAddress, response.officeNumber);
    myTeam.push(newManager)
    
    displayMenu()
  });


function displayMenu() {
    return inquirer.prompt([
// insert "list" type prompt with name set to "choice" to give user choices "Add an Engineer", "Add an Intern", "Finish"
type: 'list',
name: 'menu',
message: 'Please select an option to continue:',
choices: ['Add Engineer', 'Add Intern', 'Finish']
    ])
    .then(response => {
        console.log(response);
        // create if/else-if statement for different choices
        if 'Add Engineer' {
          inquirer
  .prompt([
    {
      type: "input",
      message: "What is your engineer's name?",
      name: "engineerName",
    },
    {
      type: "input",
      message: "What is the manager employee ID number?",
      name: "engineerId",
    },
    {
      type: "input",
      message: "What is your manager's email address?",
      name: "engineerAddress",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "engineerGithub",
    },
  ])
  .then((response) => {
    const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerAddress, response.engineerGithub);
    myTeam.push(newEngineer)
        }
    })

    else if 'Add Intern' {
          inquirer
  .prompt([
    {
      type: "input",
      message: "What is your intern's name?",
      name: "internName",
    },
    {
      type: "input",
      message: "What is the intern ID number?",
      name: "internId",
    },
    {
      type: "input",
      message: "What is your intern's email address?",
      name: "internAddress",
    },
    {
      type: "input",
      message: "What is your school?",
      name: "internSchool",
    },
  ])
  .then((response) => {
    const newIntern = new Intern(response.internName, response.internId, response.internAddress, response.internSchool);
    myTeam.push(newIntern)
        }
    })
};