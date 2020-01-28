import { ProductA } from './product-a';

export class ConcreteProductA1 implements ProductA {
    actionA(): string {
        return 'concrete product a1'
    }
}