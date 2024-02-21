// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}


## Contributing

${data.contributing}

## License

${data.license}

## Tests

${data.tests}

## Questions

If you have any questions, you can reach me at ${data.email}. You can view my work at ${data.github}


`;
}

module.exports = generateMarkdown;
