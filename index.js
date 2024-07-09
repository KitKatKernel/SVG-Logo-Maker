const { Circle, Triangle, Square } = require('./lib/shapes');
const userInput = require('./lib/input');
const fs = require('fs');

async function generateLogo() {
    try {
        const answers = await userInput();

        let shape;
        switch (answers.shape) {
            case 'Circle':
                shape = new Circle();
                break;
            case 'Triangle':
                shape = new Triangle();
                break;
            case 'Square':
                shape = new Square();
                break;
            default:
                console.error('Invalid shape selected');
                return;
        }

        shape.setColor(answers.shapePrompt === 'Choose from available colors' ? answers.shapeChoice : answers.shapeHex);

        const textColor = answers.textPrompt === 'Choose from available colors' ? answers.textChoice : answers.textHex;
        
        const svgContent = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shape.render()}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${answers.logoName}</text>
            </svg>
        `;

        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg');
    } catch (error) {
        console.error('Error:', error);
    }
}

generateLogo();
