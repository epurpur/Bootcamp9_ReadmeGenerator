
//Create an array of questions for user input
exports.questionBank = [
    {
        type: 'input',
        name: 'name',
        message: "Enter project name: "
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a licence type: ',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
        ],
        default: 'MIT License'
    },
    // {
    //     type: 'input',
    //     name: 'description',
    //     message: "Write project description: "   
    // },
    // {
    //     type: 'input',
    //     name: 'instructions',
    //     message: "Write installation instructions: "   
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: "Enter project usage information: "   
    // },
    // {
    //     type: 'input',
    //     name: 'contribution',
    //     message: "Enter project contribution guidelines: "   
    // },
    // {
    //     type: 'input',
    //     name: 'test',
    //     message: "Enter project test instructions: "   
    // },
    // {
    //     type: 'input',
    //     name: 'github',
    //     message: "Enter your github username: "   
    // },
];

