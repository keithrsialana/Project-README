import fs from 'fs';
import inq from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
    {
        name: 'title',
        message: `Enter a title: `,
        type: 'input'
    },
    {
        name: 'gitHub',
        message: `Enter your GitHub profile link: `,
        type: 'input'
    },
    {
        name: 'email',
        message: `Enter your email: `,
        type: 'input'
    },
    {
        name: 'description',
        message: `Enter the project's description: `,
        type: 'input'
    },
    {
        name: 'installation',
        message: `Enter the installation instructions: `,
        type: 'input'
    },
    {
        name: 'usage',
        message: `Enter the usage instructions: `,
        type: 'input'
    },
    {
        name: 'credits',
        message: `Who contributed to the project? `,
        type: 'input'
    },
    {
        name: 'tests',
        message: `Enter the test instructions: `,
        type: 'input'
    },
    {
        name: 'license',
        message: `Enter project license used: `,
        type: 'list',
        choices:[
            "N/A",
            'Apache-2.0',
            'Artistic-2.0',
            'BSD-2-Clause',
            'BSD-3-Clause',
            'CC0-1.0',
            'CC-BY-4.0',
            'CC-BY-SA-4.0',
            'WTFPL',
            'EPL-1.0',
            'AGPL-3.0',
            'GPL-2.0',
            'GPL-3.0',
            'LGPL-3.0',
            'ISC',
            'MIT',
            'MPL-2.0',
            'OFL-1.1',
            'Unlicense',
            'Zlib'
        ]
    },
    {
        name: 'features',
        message: `Enter project features: `,
        type: 'input'
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log(`File ${fileName} was successfully created.`);
    });
}

function init() {
    inq.prompt(questions).then((response) => {
        try {
            writeToFile(`GENERATED_FILE.md`, generateMarkdown(response));
        } catch (err) {
            console.log(err);
        }
    });
}

// Function call to initialize app
init();
