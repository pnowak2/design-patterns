import { Product } from './product';

export class ConcreteProduct1 implements Product {
    operation(): string {
        return 'concrete product 1';
    }
}