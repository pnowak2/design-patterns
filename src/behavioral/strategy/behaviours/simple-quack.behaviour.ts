import { QuackBehaviour } from '../behaviour-interface/quack.behaviour';

export class SimpleQuackBehaviour implements QuackBehaviour {
    quack(): string {
        return 'simple quack';
    }
}