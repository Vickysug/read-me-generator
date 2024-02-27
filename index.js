const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What needs to be installed in your project.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How should this app be used?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributers?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license should be applied?',
        choices: ["MIT", "APACHE", "IBM", "NONE"],
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command should run the tests?',
        default: 'npm run test',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github url?',
      }
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers)=>{
    writeToFile("readme-template.md", generateMarkdown({ ...answers })) 
  })
}

// function call to initialize program
init();
