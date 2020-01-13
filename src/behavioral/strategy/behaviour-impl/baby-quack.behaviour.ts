import { QuackBehaviour } from '../behaviour-interface/quack.behaviour';

export class BabyQuackBehaviour implements QuackBehaviour {
    quack(): string {
        return 'squeek quack';
    }
}