// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "EPL") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (license === "GNU GPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "BSD") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else if (license === "EPL") {
    return "https://opensource.org/licenses/EPL-2.0";
  } else if (license === "GNU GPL v3") {
    return "https://opensource.org/licenses/gpl-license";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "") {
    return "";
  }

  return `"This application is under the [${license}](${renderLicenseLink(
    license
  )}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  description,
  motivation,
  why,
  solve,
  learn,
  install,
  instructions,
  collaborators,
  sources,
  license,
  features,
  contribute,
  test,
  email,
}) {
  return `# ${title}

${renderLicenseBadge(license)}

## Description
 ${description}. ${motivation}. ${why}. ${solve}. ${learn}

## Installation
${install}

## Usage

${instructions}



## Credits

${collaborators}
${sources}

## License

${renderLicenseSection(license)}


## Features

${features}

## How to Contribute

${contribute}

## Test

${test}

# Questions

If you have any questions you can reach out to me at ${email}
`;
}

module.exports = generateMarkdown;
