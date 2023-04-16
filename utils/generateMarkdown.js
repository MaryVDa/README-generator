// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLabel = license.replace(" ", "&ensp;");
  return `(https://img.shields.io/badge/License-${badgeLabel}-ff69b4)(${renderLicenseLink(license)})`
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkUrl = license.toLowercase();
  return `https://choosealicense.com/licenses/${linkUrl}/.`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `### License 
    ${license} 
    ${renderLicenseBadge(license)} 
    ${renderLicenseLink}`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {licenseChoice, github} = data;
  return `
  # ${data.title}

  ## Table of Contents
  - [Project Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributers](#contributers)
  - [Tests](#tests)
  - [License](#license)
  - [GitHub](#github)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributers
  ${data.contributers}

  ## Tests
  ${data.tests}

  ${renderLicenseSection(licenseChoice)}

  ## GitHub
  ${data.github} (https://github.com/${github})


`};

module.exports = generateMarkdown;