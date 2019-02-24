import Eventbrite from '..';

describe('kewl!', () => {
    it('testing is installed and working', () => {
        expect(() => new Eventbrite()).not.toThrow();
    });
});