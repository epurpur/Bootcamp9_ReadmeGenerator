//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter project name: "
    },
    {
        type: 'input',
        name: 'name',
        message: "Write project description: "   
    }
    // 'Enter project name: ',
    // 'Choose license type: ',
    // 'Write description of project: ',
    // 'Enter installation instructions: ',
    // 'Enter project usage information ',
    // 'Enter project contribution guidelines ',
    // 'Enter project test instructions '
];

const licenseChoices = [
    'Apache License 2.0',
    'GNU General Public License v3.0',
    'MIT License',
    'BSD 2-Clause "Simplified" License',
    //maybe add other choices?
]

//Create a function to write README file
function writeToFile(fileName, data) {}

//Function to prompt user for input
const promptUser = () => {
    return inquirer.prompt([
        //NEED FOR EACH LOOP HERE FOR EACH PROJECT
        {
            type: 'input',
            name: 'name',
            message: "Enter project name: "
        },
        {
            type: 'input',
            name: 'description',
            message: "Write project description: "   
        }
    ])
}

//Create a function to initialize app
const init = () => {
    console.log('here');
    promptUser()
        .then((answers) =>{
            console.log(answers);
        })
}

// Function call to initialize app
init();
