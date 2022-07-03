// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None") {
        return 'No license'
    }
    else if (license === "MIT License") {
        return 'https://www.opensource.org/licenses/MIT'
    }
    else if (license === "Apache License") {
        return 'https://opensource.org/licenses/Apache-2.0'
    }
    else if (license === "GNU GPLv3") { 
        return 'https://www.gnu.org/licenses/gpl-3.0.html'
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description:
- ${data.reason} 
- ${data.issue} 
- ${data.learning}

## Installation: 
${data.install}

## Usage: 
${data.usage}

## Credits: 
${data.credits}

## License: 
${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;