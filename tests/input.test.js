const inquirer = require('inquirer');
const promptUser = require('../lib/input'); 

// Moc inquirer.prompt
jest.mock('inquirer');

describe('promptUser', () => {
    it('should prompt for logoName, text color, shape, and shape color', async () => {
        const mockAnswers = {
            logoName: 'LOG',
            textPrompt: 'Choose from available colors',
            textChoice: 'Red',
            shape: 'Circle',
            shapePrompt: 'Choose from available colors',
            shapeChoice: 'Blue'
        };

        inquirer.prompt.mockResolvedValue(mockAnswers);

        const answers = await promptUser();
        expect(answers).toEqual(mockAnswers);
    });

    // Test for validating logoName
    it('should validate the logoName correctly', async () => {
        const invalidAnswer = '';
        const validAnswer = 'LOG';

        // Implement validation logic tomorrow
        expect(true).toBe(true); 
    });

    // WIP hex color
    it('should validate hex color correctly', async () => {
        const validHex = '#FFF';
        const invalidHex = 'FFF1';

        expect(true).toBe(true); 
    });
});
