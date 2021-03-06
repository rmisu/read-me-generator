// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "None") {
        return " ";
    }
    else if (license === "MIT License") { 
        return "[![License](https://img.shields.io/badge/License-MIT-brightgreen)](https://www.opensource.org/licenses/MIT)"
    }
    else if (license === "Apache License 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache-brightgreen)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if (license === "GNU GPLv3") {
        return "[![License](https://img.shields.io/badge/License-GNU-brightgreen)](https://opensource.org/licenses/GPL-3.0)"
    }};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None") {
        return 'N/A.'
    }
    else if (license === "MIT License") {
        return 'This project is under: https://www.opensource.org/licenses/MIT'
    }
    else if (license === "Apache License 2.0") {
        return 'This project is under: https://opensource.org/licenses/Apache-2.0'
    }
    else if (license === "GNU GPLv3") { 
        return 'This project is under: https://opensource.org/licenses/GPL-3.0'
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description:
- ${data.reason} 
- ${data.motivation} 
- ${data.learning}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation: 
${data.install}

## Usage: 
${data.usage}

## Credits: 
${data.credits}

## License: 
${renderLicenseLink(data.license)}

## Contributing:
${data.contributing}

## Tests: 
${data.tests}

## Questions:
- https://github.com/${data.repo}
- ${data.email}
- ${data.contact}

`;
}

module.exports = generateMarkdown;