var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require(`./utils/generateMarkdown.js`);


// array of questions for user
inquirer.prompt([{
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
    name: "table",
    message: "What is the table of contents?"
},
{
    type: "input",
    name: "installation",
    message: "What is installation?"
},
{
    type: "input",
    name: "usage",
    message: "What is the usage?"
},
{
    type: "list",
    message: "What licenses are needed?",
    name: "license",
    choices: [
        "email",
        "phone",
        "telekinesis"
    ]
},
{
    type: "input",
    name: "contributing",
    message: "What is contiubuting?"
},
{
    type: "input",
    name: "tests",
    message: "What tests are used?"
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

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(README2.md, JSON.stringify(data, null, '\t'), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
}

// function to initialize program
function init() {

}

// function call to initialize program
init();





