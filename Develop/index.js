const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer.prompt([{
        type: "input",
        name: "title",
        message: "What is your title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your description?"
    },

    {
        type: "input",
        name: "installation",
        message: "What installations are needed?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage?"
    },
    {
        type: "input",
        message: "Are licenses needed?",
        name: "license",

    },
    {
        type: "input",
        name: "contributing",
        message: "Contributions?"
    },
    {
        type: "input",
        name: "tests",
        message: "How many tests are used?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    }

    ])
}
function generateREADME2(data) {


    return ` 
    # ${data.title}
      
        ## Github Username: ${data.github}
       
        ## Email ${data.email}
      
        ## Description: ${data.description}
      
      
        ## Table of Contents: 
        * [Description] (##Description)
        * [Installation] (##Installation)
        * [Usage] (###Usage)
        * [Licenses] (###Licenses)
        * [Contributing] (###Contributing)
        * [Tests] (###Tests)
      
      
        ### Installation: ${data.installation}
      
      
        ### Usage: ${data.usage}
      
      
        ### Licenses: ${data.license}
      
      
        ### Contributing: ${data.contributing}
      
      
        ### Tests: ${data.tests}
      
       `;

}
promptUser()
    .then(function (data) {
        const md = generateREADME2(data);
        return writeFileAsync("README2.md", md);
    })
    .then(function () {

        console.log("Successfully wrote to README2.md");
    })
    .catch(function (err) {
        console.log(err);
    });
