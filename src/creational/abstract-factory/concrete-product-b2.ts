import { ProductA } from './product-a';
import { ProductB } from './product-b';

export class ConcreteProductB2 implements ProductB {
    actionB(): string {
        return 'concrete product b2'
    }

    anotherActionB(collaborator: ProductA): string {
        return `concrete product b2 collaborated with ${collaborator.actionA()}`
    }
}