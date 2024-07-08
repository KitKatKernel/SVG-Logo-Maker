const inquirer = require('inquirer');
const colors = require('colors');
const hexRegex = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
/* 
Learned something new, ? means a character that's optional. 
So if the user input #FFF, that works for the 3 character limit.
The # doesn't count againt the character limit of {3} since it's an optional by having the ? after it.
*/ 


inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoName',
            message: colors.white('Enter up to three letters for your Logo:'),
            validate: input => (input !== "" && input.length <= 3) || 'Text must be 3 characters or less',
        },
        
        {
            type: 'list',
            name: 'textPrompt',
            message: "Would you like to select from preset text color or generate your own using a hexadecimal code? (e.g., FFFFFF, 000, etc.)",
            choices: ["Choose from available colors", "Customize your own using hexadecimal code (e.g., FFFFFF, 000000)"],
        },
        
        {
            type: 'list',
            name: 'textChoice',
            message: colors.white('Choose your preferred text color from the options listed below:'),
            choices:[
                    colors.red("Red"), 
                    colors.yellow("Yellow"), 
                    colors.green("Green"), 
                    colors.blue("Blue"), 
                    colors.white("White"),,
                    ],
            when: answers => answers.textPrompt === "Choose from available colors"
        },

        {            
                type: 'input',
                name: 'textHex',
                message: 'Please provide the hex code for your text color (e.g., FFFFFF, 000):',
                validate: input => hexRegex.test(input) || 'Please input a hex code that is either 3 or 6 digits long.',
                when: answers => answers.textPrompt === "Customize your own using hexadecimal code (e.g., FFFFFF, 000000)",
        },
        
        {
            type: 'list',
            name: 'shape',
            message: colors.white('Please choose a shape for your logo'),
            choices: ["Circle", "Triangle", "Square"],
        },

        {
            type: 'list',
            name: 'shapePrompt',
            message: "Would you like to select from a preset shape color or generate your own using a hexadecimal code? (e.g., FFFFFF, 000, etc.)",
            choices: ["Choose from available colors", "Customize your own using hexadecimal code (e.g., FFFFFF, 000000)"],
        },

        {
            type: 'list',
            name: 'shapeChoice',
            message:colors.white('Choose your preferred shape color from the options listed below:'),
            choices:[
                    colors.red("Red"), 
                    colors.yellow("Yellow"), 
                    colors.green("Green"), 
                    colors.blue("Blue"), ,
                    colors.gray("Gray"),
                    ],
            when: answers => answers.shapePrompt === "Choose from available colors"
        },

        {            
            type: 'input',
            name: 'shapeHex',
            message: 'Please provide the hex code for your shape color (e.g., FFFFFF, 000):',
            validate: input => {
                /* 
                Learned something new, already knew ^ equals the start of the string and $ is the end,
                but new thing is ? means a character that's optional. 
                So if the user input #FFF, that works as would FFF.  
                The # wouldn't count againt the character limit of {3} since it has the ? after it.
                */ 
                return hexRegex.test(input) || 'Please input a hex code that is either 3 or 6 digits long.'
            
            },
            when: answers => answers.shapePrompt === "Customize your own using hexadecimal code (e.g., FFFFFF, 000000)",
        },

    ])
    .then(answers => {
        console.log(answers);
    })
    .catch(error => {
        console.error('Error', error);
    })
    // color.hex() // #ffffff <- Use this for choice on color input.->