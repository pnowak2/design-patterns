import { Decorator } from './decorator';

export class ConcreteDecoratorA extends Decorator {
    operation(): string {
        return `concrete decorator a, ${super.operation()}`
    }
}