import { Singleton } from './singleton';

describe('Singleton', () => {
    it('should ensure class has only one instance, provide global access point for that instance', () => {
        const s1 = Singleton.getInstance();
        const s2 = Singleton.getInstance();

        expect(s1).toBe(s2);
    });
});