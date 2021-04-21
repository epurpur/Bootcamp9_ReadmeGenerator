//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//imported modules
const questionBank = require('./utils/questionBank.js')
const generateMarkdown = require('./utils/generateMarkdown.js')


//Create a function to write README file
const writeToFile = (userInput) => {
    //write output to README.md file
    fs.writeFile('README.md', userInput, (error) =>
    error ? console.log('Error!') : console.log('Success!'));  //error handling is a required argument
}



//Function to prompt user to answer each question in questionBank
const promptUser = () => {
    return inquirer.prompt(questionBank.questionBank)   //questionBank is returned as object so I need to use questionBank property
}



//Create a function to initialize app
const init = () => {
    promptUser()
        .then((userInput) =>{
            //generate markdown, passing in userInput data
            const markdown = generateMarkdown.generateMarkdown(userInput)
            //write markdown to output file
            writeToFile(markdown)
        })
}



// Function call to initialize app
init();
