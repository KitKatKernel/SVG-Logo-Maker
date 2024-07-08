const inquirer = require('inquirer');
const promptUser = require('../lib/input'); 

// Mock inquirer.prompt
jest.mock('inquirer');

describe('promptUser', () => {
    it('should prompt for logoName, text color, shape, and shape color', async () => {
        const mockAnswers = {
            logoName: 'LOG',
            textPrompt: 'Choose from available colors',
            textChoice: 'White',
            shape: 'Circle',
            shapePrompt: 'Choose from available colors',
            shapeChoice: 'Red'
        };

        inquirer.prompt.mockResolvedValue(mockAnswers);

        const answers = await promptUser();
        expect(answers).toEqual(mockAnswers);
    });

    it('should validate the logoName correctly', async () => {
        const invalidAnswer = '';
        const validAnswer = 'LOG';

        inquirer.prompt.mockImplementation(() => Promise.resolve({ logoName: invalidAnswer }));
        try {
            await promptUser();
        } catch (e) {
            expect(e.message).toBe('Text must be 3 characters or less');
        }

        inquirer.prompt.mockResolvedValue({ logoName: validAnswer });
        const answers = await promptUser();
        expect(answers.logoName).toBe(validAnswer);
    });

    it('should validate hex color correctly', async () => {
        const validHex = '#FFF';
        const invalidHex = 'FFF1';

        inquirer.prompt.mockImplementation(() => Promise.resolve({ textHex: invalidHex }));
        try {
            await promptUser();
        } catch (e) {
            expect(e.message).toBe('Please input a hex code that is either 3 or 6 digits long.');
        }

        inquirer.prompt.mockResolvedValue({ textHex: validHex });
        const answers = await promptUser();
        expect(answers.textHex).toBe(validHex);
    });
});
