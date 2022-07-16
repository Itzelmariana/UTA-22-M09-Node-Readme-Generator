// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  description,
  motivation,
  why,
  solve,
  learn,
  instalation,
  titleImg1,
  titleImg2,
  titleImg3,
  pathImg1,
  pathImg2,
  pathImg3,
  collaborators

}) {
  return `# ${title}
## Description
 ${description}
- ${motivation}
- ${why}
- ${solve}
- ${learn}

## Instalation
${instalation}

## Usage

${titleImg1}
 ![${titleImg1}](${pathImg1})

 ${titleImg2}
 ![${titleImg2}](${pathImg2})

 ${titleImg3}
 ![${titleImg3}](${pathImg3}


## Credits
${collaborators}

## License
`;
}

module.exports = generateMarkdown;
