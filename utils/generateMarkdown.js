function generateMarkdown(answers) {
  var readmeText = `

![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)

# Table of Contents 
* Description
* Installation
* Usage 
* Contributors 
* Test
* License
* Questions

#${answers.title}

# Description
${answers.description}

# Installation 
${answers.installation}

# Usage 
${answers.usage}

# Contributors 
${answers.contributors}

# Test
${answers.contributors}

# License
This application is licensed under the following license: ${answers.license}

# Questions
${answers.github}
${answers.email}

`;
  return readmeText;
}

module.exports = generateMarkdown;
