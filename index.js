const { Circle, Triangle, Square } = require('./lib/shape');
const userInput = require('./lib/input');
const fs = require('fs');

async function generateLogo() {
    try {
        const answers = await userInput();

        console.log('User Answers:', answers);

        let shape;
        // TODO: choose shape based on user input
        if (answers.shape === 'Circle') {
        } else if (answers.shape === 'Triangle') {
        } else if (answers.shape === 'Square') {
        } else {
            console.log('You shoudl never see this');
            return; 
        }

        // TODO: Set shape color: shape.setColor(answers.shapeColor);

        // TODO: Set text color: const textColor = answers.textColor;

        // TODO: Generate SVG content
        

        // TODO: Write SVG content to file
        
    } catch (error) {
        console.error('Error:', error);
    }
}

generateLogo();
