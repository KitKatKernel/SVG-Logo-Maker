const { Circle, Triangle, Square } = require('./lib/shapes');
const userInput = require('./lib/input');
const fs = require('fs');

// Function to ensure hex colors are prefixed with #
function formatHexColor(color) {
    const hexRegex = /^#?[0-9A-Fa-f]{3}$|^#?[0-9A-Fa-f]{6}$/;
    if (hexRegex.test(color) && !color.startsWith('#')) {
        return `#${color}`;
    }
    return color;
}

async function generateLogo() {
    try {
        // Get user inputs
        const answers = await userInput();

        let shape;
        // Create shape from user input
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

        // Ensure hex colors are prefixed with #, hex answer won't work without # in the fill
        const shapeColor = formatHexColor(answers.shapePrompt === 'Choose from available colors' ? answers.shapeChoice : answers.shapeHex);
        const textColor = formatHexColor(answers.textPrompt === 'Choose from available colors' ? answers.textChoice : answers.textHex);

        // Set shape color
        shape.setColor(shapeColor);
        
        // Generate SVG content
        const svgContent = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shape.render()}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${answers.logoName}</text>
            </svg>
        `;

        // Write SVG to file 'logo.svg'
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the function to generate the logo
generateLogo();
