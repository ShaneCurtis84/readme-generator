






// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
    return 'Apache-2.0 (https://opensource.org/licenses/Apache-2.0)'
    break
    case 'GNU':
      return 'GNU GLPv3 (https://choosealicense.com/licenses/gpl-3.0/)'
      break;
    case 'MIT':  
    return 'MIT (https://choosealicense.com/licenses/mit/)'
    break;
   
    case 'ISC':
    return 'ISC (https://choosealicense.com/licenses/isc/)'
    break;
    default: 'Not currently licensed'
      return ""
      break;
  }


}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![license](https://img.shields.io/badge/License-${data.license}-green.svg)

  ## Description

  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage} 

  ## License

  This application is licensed under ${renderLicenseLink(data.license)}
 
 

  ## Contributors

  ${data.credits}


  ## Tests

  ${data.testing}


  ## Questions

  If you have any questions about this project, please feel free to contact me at ${data.email} or to see more of my work ${data.github}
  

`;
}

module.exports = generateMarkdown;
