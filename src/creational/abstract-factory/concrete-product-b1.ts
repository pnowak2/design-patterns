import { ProductA } from './product-a';
import { ProductB } from './product-b';

export class ConcreteProductB1 implements ProductB {
    actionB(): string {
        return 'concrete product b1'
    }

    anotherActionB(collaborator: ProductA): string {
        return `concrete product b1 collaborated with ${collaborator.actionA()}`
    }
}