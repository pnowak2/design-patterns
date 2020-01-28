import { Product } from './product';

export class ConcreteProduct2 implements Product {
    operation(): string {
        return 'concrete product 2';
    }
}