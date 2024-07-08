const colors = require("colors");
const inquirer = require("inquirer");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const fs = require("fs");

inquirer
    .createPromptModule([
        {
            type: 'maxlength-input',
            name: 'logoName',
            message: colors.brightGreen('What is your '),
            maxLength: 3,
        }
    ])