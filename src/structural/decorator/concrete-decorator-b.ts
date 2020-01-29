import { Decorator } from './decorator';

export class ConcreteDecoratorB extends Decorator {
    operation(): string {
        return `concrete decorator b, ${super.operation()}`
    }
}