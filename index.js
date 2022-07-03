// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    //Project name
    {   
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    // Start of description section
    {   
        type: 'input',
        name: 'reason',
        message: 'Why did you build this project?',
    },
    {   
        type: 'input',
        name: 'issue',
        message: 'What problem does it solve?',  
    },
    {   
        type: "input",
        name: 'learning',
        message: 'What did you learn?',
    },
    // Start of install section
    {   
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    // Start of usage section
    {   
        type: 'input',
        name: 'usage',
        message: 'Provide Instructions and examples for use. Include screenshots as needed.',
    },
    // Start of credits section
    {   
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {   
        type: 'input',
        name: 'credits',
        message: 'If you used any third-party assets that require attribution, list the creator with links to their primary web presence in this section.',
    },
    {   
        type: 'input',
        name: 'credits',
        message: 'If you followed tutorials, include links to those here as well.',
    },
    // Start of license section
    {   
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: [
            'Apache License 2.0',
            'MIT License',
            'GNU GPLv3',
            'None',
        ],
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log("README has been generated!");
})};

// TODO: Create a function to initialize app
function init() {    
    inquirer.prompt(questions).then(function (data) {
        writeToFile("projectREADME.md", generateMarkdown(data))
    });};

// Function call to initialize app
init();

