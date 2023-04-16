
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief desciption of your project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?',
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'Who are the contributers of this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write any tests for your project: ',
    },
    {
       type: 'list' ,
       name: 'licenseChoice',
       message: 'Choose a license: ',
       choices: ['None','AGPL-3.0','GPL-3.0','GPL-3.0','MPL-2.0','Apache-2.0','MIT','BSL-1.0','Unicense'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
        console.log(data)
        console.log('README generated!')
    })
};

// TODO: Create a function to initialize app
function init() {
    console.log(`Welcome to the ReadMe Generator! 
    Answer the following prompts to feed information to the generator.`);

    inquirer.prompt(questions)
    .then(readmeData => {
        console.log(readmeData)
        writeToFile('./dist/readme.md', generateMarkdown(readmeData))
    })
};

// Function call to initialize app
init();