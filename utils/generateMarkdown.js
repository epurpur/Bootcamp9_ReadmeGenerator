const renderLicenseBadge = (license) => {
  //renders markup text for license badge corresponding to user choice

  let licenseMarkdownText;

  //evaluate user input for license choices. Return image link accordingly
  switch (license) {
    case 'MIT License':
      licenseMarkdownText = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU General Public License v3.0':
      licenseMarkdownText = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Apache License 2.0':
      licenseMarkdownText = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'None':
      licenseMarkdownText = '';
      break;
    }

  return licenseMarkdownText
}


const renderLicenseLink = (license) => {
  // creates URL to view more information about license

  let licenseLinkURL;

  //evaluate user input for license choices. Return URL to more information accordingly
  switch (license) {
    case 'MIT License':
      licenseLinkURL = 'https://opensource.org/licenses/MIT';
      break;
    case 'GNU General Public License v3.0':
      licenseLinkURL = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Apache License 2.0':
      licenseLinkURL = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'None':
      licenseLinkURL = '';
      break;
    }

  return licenseLinkURL;
}


const generateMarkdown = (data) =>  {
  //generates markdown for README.md file
  
  // destructure data which is returned from user input
  const { name, license, description, installation, usage, contributions, tests, email, questions } = data;
  // console.log(name, license, description, installation, usage, contributions, tests, email, questions);

  const licenseBadge = renderLicenseBadge(license);
  const licenseLinkURL = renderLicenseLink(license);
  
  return `
  # Project Name:

  ${name}

  ## License

  ${licenseBadge} : [View License](${licenseLinkURL})

  ## Table of Contents

  - [Title](#Project-Name)
  - [License](#License)
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description

  ${description}

  ## Installation

  Navigate to the root directory of this repository and run the following commands to install necessary dependencies:

    ${installation}

  ## Usage

  ${usage}

  ## Contributions 

  ${contributions}

  ## Tests 

  ${tests}

  ## Questions 

  For issues, questions, and comments please contact ${email} or visit [https://github.com/${questions}](https://github.com/${questions}) 
  `

}

//export generateMarkdown function to use in other modules
module.exports = {
  generateMarkdown: generateMarkdown,
}
