// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'Apache-2.0':
      return '[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    case 'Artistic-2.0':
      return '[License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)';
    case 'BSD-2-Clause':
      return '[License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
    case 'BSD-3-Clause':
      return '[License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    case 'CC0-1.0':
      return '[License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)';
    case 'CC-BY-4.0':
      return '[License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)';
    case 'CC-BY-SA-4.0':
      return '[License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)';
    case 'WTFPL':
      return '[License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)'
    case 'EPL-1.0':
      return '[License](https://img.shields.io/badge/License-EPL_1.0-red.svg)'
    case 'AGPL-3.0':
      return '[License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
    case 'GPL-2.0':
      return '[License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
    case 'GPL-3.0':
      return '[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'LGPL-3.0':
      return '[License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)';
    case 'ISC':
      return '[License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
    case 'MIT':
      return '[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'MPL-2.0':
      return '[License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
    case 'OFL-1.1':
      return '[License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)';
    case 'Unlicense':
      return '[License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
    case 'Zlib':
      return '[License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)'
    default:
      return '';
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'Apache-2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'Artistic-2.0':
      return 'https://opensource.org/licenses/Artistic-2.0';
    case 'BSD-2-Clause':
      return 'https://opensource.org/licenses/BSD-2-Clause';
    case 'BSD-3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'CC0-1.0':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
    case 'CC-BY-4.0':
      return 'https://creativecommons.org/licenses/by/4.0/';
    case 'CC-BY-SA-4.0':
      return 'https://creativecommons.org/licenses/by-sa/4.0/';
    case 'WTFPL':
      return 'http://www.wtfpl.net/about/'
    case 'EPL-1.0':
      return 'https://opensource.org/licenses/EPL-1.0'
    case 'AGPL-3.0':
      return 'https://www.gnu.org/licenses/agpl-3.0';
    case 'GPL-2.0':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    case 'GPL-3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'LGPL-3.0':
      return 'https://www.gnu.org/licenses/lgpl-3.0';
    case 'ISC':
      return 'https://opensource.org/licenses/ISC';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'MPL-2.0':
      return '(https://opensource.org/licenses/MPL-2.0';
    case 'OFL-1.1':
      return 'https://opensource.org/licenses/OFL-1.1';
    case 'Unlicense':
      return 'http://unlicense.org/';
    case 'Zlib':
      return 'https://opensource.org/licenses/Zlib';
    default:
      return '';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "N/A"){
    return `
## License
${license}`;
  } else return "";
}

function generateMarkdown(data) {
  return `# ${data.title}
${data.license != "N/A" ? `[!${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})` : ''}
## Table of Contents
- [Description](#Description)
- [Installation](#Installation-Instructions)
- [Usage](#Usage-Instructions)
- [Credits](#Credits)
- [Tests](#Tests)${data.license != "N/A" ? `
- [License](#License)` : ''}
- [Features](#Features)
- [Questions](#Questions)
## Description
${data.description}
## Installation Instructions
${data.installation}
## Usage Instructions
${data.usage}
## Credits
${data.credits}
## Tests
${data.tests}${renderLicenseSection(data.license)}
## Features
${data.features}
## Questions
- GitHub: ${data.gitHub}
- Email: ${data.email}
`;
}

export default generateMarkdown;
