import { AbstractFactory } from './abstract-factory';
import { ConcreteProductA2 } from './concrete-product-a2';
import { ConcreteProductB2 } from './concrete-product-b2';
import { ProductA } from './product-a';
import { ProductB } from './product-b';

export class ConcreteFactory2 implements AbstractFactory {
    createProductA(): ProductA {
        return new ConcreteProductA2();
    }

    createProductB(): ProductB {
        return new ConcreteProductB2();
    }
}