// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case "Apache License 2.0": return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'; break;
    case "GNU General Public License v3.0": return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'; break;
    case "MIT License": return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'; break;
    case 'BSD 2-Clause "Simplified" License': return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)' ; break;
    case 'BSD 3-Clause "New" or "Revised" License': return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'; break;
    case "Boost Software License 1.0": return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'; break;
    case "Creative Commons Zero v1.0 Universal": return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'; break;
    case "Eclipse Public License 2.0": return '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)'; break;
    case "GNU Affero General Public License v3.0": return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'; break;
    case "GNU General Public License v2.0": return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'; break;
    case "GNU Lesser General Public License v2.1": return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'; break;
    case "Mozilla Public License 2.0": return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)' ; break;
    case "The Unlicense": return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'; break;
    case "None": return ''; break;
    default: '';
  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0": return 'https://opensource.org/licenses/Apache-2.0'; break;
    case "GNU General Public License v3.0": return 'https://www.gnu.org/licenses/gpl-3.0' ; break;
    case "MIT License": return 'https://opensource.org/licenses/MIT' ; break;
    case 'BSD 2-Clause "Simplified" License': return 'https://opensource.org/licenses/BSD-2-Clause' ; break;
    case 'BSD 3-Clause "New" or "Revised" License': return 'https://opensource.org/licenses/BSD-3-Clause'; break;
    case "Boost Software License 1.0": return 'https://www.boost.org/LICENSE_1_0.txt'; break;
    case "Creative Commons Zero v1.0 Universal": return 'http://creativecommons.org/publicdomain/zero/1.0/' ; break;
    case "Eclipse Public License 2.0": return 'https://opensource.org/licenses/EPL-2.0'; break;
    case "GNU Affero General Public License v3.0": return 'https://www.gnu.org/licenses/agpl-3.0'; break;
    case "GNU General Public License v2.0": return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'; break;
    case "GNU Lesser General Public License v2.1": return 'https://www.gnu.org/licenses/lgpl-3.0'; break;
    case "Mozilla Public License 2.0": return 'https://opensource.org/licenses/MPL-2.0'; break;
    case "The Unlicense": return 'http://unlicense.org/'; break;
    case "None": return ''; break;
    default: '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license ==='None') {
    return '';
  }
return `This application is covered under the [${license}](${renderLicenseLink(license)}). 
Please click the link for more information.
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projTitle}\n
  ${renderLicenseBadge(data.licensePref)}

## Description
${data.projDesc}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.instInstruct}
## Usage
${data.useInfo}
## License
${renderLicenseSection(data.licensePref)}
## Contributing
${data.contGuide}
## Tests
${data.testInstr}
## Questions
Find me on Github: [${data.gitHub}](https://github.com/${data.gitHub})\n
Or email me: [${data.emailAddr}](mailto:${data.emailAddr})
`;
}

module.exports = {generateMarkdown};
