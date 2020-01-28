import { ConcreteCreator1 } from './concrete-creator-1';
import { ConcreteCreator2 } from './concrete-creator-2';
import { Creator } from './creator';

describe('Factory Method', () => {
    it('should delegate creation to subclass with abstract method', () => {
        function clientCode(creator: Creator): string {
            return creator.someOperation();
        }

        expect(clientCode(new ConcreteCreator1())).toEqual('Creator worked with concrete product 1');
        expect(clientCode(new ConcreteCreator2())).toEqual('Creator worked with concrete product 2');
    });
});