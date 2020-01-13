import { BabyQuackBehaviour } from './behaviour-impl/baby-quack.behaviour';
import { Duck } from './duck';
import { MallardDuck } from './mallard.duck';

describe('Strategy', () => {
    it('should replace algorithm at runtime', () => {
        const duck:Duck = new MallardDuck();
        
        expect(duck.display()).toEqual('duck');
        expect(duck.swim()).toEqual('swim');
        expect(duck.performFly()).toEqual('fly with wings');
        expect(duck.performQuack()).toEqual('simple quack');

        duck.quackBehaviour = new BabyQuackBehaviour();

        expect(duck.performQuack()).toEqual('squeek quack');
    });
});