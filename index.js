//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questionBank = require('./utils/questionBank.js')
const generateMarkdown = require('./utils/generateMarkdown.js')


// console.log(generateMarkdown.markdown('hello'));
// console.log(generateMarkdown.testvar);

//Create a function to write README file
const writeToFile = (userInput) => {
    //write output to README.md file
    fs.writeFile('README.md', myMD, (error) =>
    error ? console.log('Error!') : console.log('Success!'));  //error handling is a required argument
}



//Function to prompt user to answer each question in questionBank
const promptUser = () => {
    return inquirer.prompt(questionBank.questionBank)   //questionBank is returned as object so I need to use questionBank property
}


const myMD = `
    # testing1
    testing2
    testing3
    `

//Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) =>{
            const markdown = generateMarkdown.generateMarkdown(answers)
            writeToFile(markdown)
        })
}



// Function call to initialize app
init();
