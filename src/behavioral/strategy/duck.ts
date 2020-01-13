import { FlyBehaviour } from './behaviour-interface/fly.behaviour';
import { QuackBehaviour } from './behaviour-interface/quack.behaviour';

export class Duck {
    public quackBehaviour: QuackBehaviour;
    public flyBehaviour: FlyBehaviour;

    swim(): string {
        return 'swim';
    }

    display(): string {
        return 'duck';
    }

    public performQuack(): string {
        return this.quackBehaviour.quack();
    }

    public performFly(): string {
        return this.flyBehaviour.fly();
    }
}