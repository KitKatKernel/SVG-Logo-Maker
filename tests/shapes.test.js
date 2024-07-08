const { Circle, Triangle, Square } = require('../lib/shapes');

describe('Shape classes', () => {
    describe('Circle', () => {
        it('should set color correctly', () => {
            const circle = new Circle();
            circle.setColor('blue');
            expect(circle.color).toBe('blue');
        });

        it('should render SVG correctly', () => {
            const circle = new Circle();
            circle.setColor('blue');
            expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });

    describe('Triangle', () => {
        it('should set color correctly', () => {
            const triangle = new Triangle();
            triangle.setColor('red');
            expect(triangle.color).toBe('red');
        });

        it('should render SVG correctly', () => {
            const triangle = new Triangle();
            triangle.setColor('red');
            expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
        });
    });

    describe('Square', () => {
        it('should set color correctly', () => {
            const square = new Square();
            square.setColor('green');
            expect(square.color).toBe('green');
        });

        it('should render SVG correctly', () => {
            const square = new Square();
            square.setColor('green');
            expect(square.render()).toBe('<rect x="70" y="30" width="160" height="160" fill="green" />');
        });
    });
});
