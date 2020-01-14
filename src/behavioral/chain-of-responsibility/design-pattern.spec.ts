
import { Handler } from './handler';
import { DogHandler } from './handlers/dog.handler';
import { MonkeyHandler } from './handlers/monkey.handler';
import { SquirrelHandler } from './handlers/squirrel.handler';

describe('Chain of responsibility', () => {
    it('should pass request to concrete handlers in the chain', () => {
        const dogHandler: Handler = new DogHandler();
        const monkeyHandler: Handler = new MonkeyHandler();
        const squirrelHandler: Handler = new SquirrelHandler();

        dogHandler
            .setNext(monkeyHandler)
            .setNext(squirrelHandler);

        expect(dogHandler.handle('nut')).toEqual(`Squirrel: I'll eat the nut.`);
        expect(dogHandler.handle('bone')).toEqual(`Dog: I'll eat the bone.`);
        expect(dogHandler.handle('banana')).toEqual(`Monkey: I'll eat the banana.`);
        expect(dogHandler.handle('weird..')).toBeNull();
    });
});