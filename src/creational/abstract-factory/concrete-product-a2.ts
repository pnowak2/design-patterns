import { ProductA } from './product-a';

export class ConcreteProductA2 implements ProductA {
    actionA(): string {
        return 'concrete product a2'
    }
}