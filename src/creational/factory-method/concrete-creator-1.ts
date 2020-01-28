import { ConcreteProduct1 } from './concrete-product-1';
import { Creator } from './creator';
import { Product } from './product';

export class ConcreteCreator1 extends Creator {
    factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}