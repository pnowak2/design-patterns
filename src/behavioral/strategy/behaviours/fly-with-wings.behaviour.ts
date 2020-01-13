import { FlyBehaviour } from '../behaviour-interface/fly.behaviour';

export class FlyWithWingsBehaviour implements FlyBehaviour {
    fly(): string {
        return 'fly with wings';
    }
}