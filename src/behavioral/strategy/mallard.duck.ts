import { FlyWithWingsBehaviour } from './behaviour-impl/fly-with-wings.behaviour';
import { SimpleQuackBehaviour } from './behaviour-impl/simple-quack.behaviour';
import { Duck } from './duck';

export class MallardDuck extends Duck {
    public constructor() {
        super();
        this.quackBehaviour = new SimpleQuackBehaviour();
        this.flyBehaviour = new FlyWithWingsBehaviour();
     } 
}