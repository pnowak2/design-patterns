import { AbstractFactory } from './abstract-factory';
import { ConcreteProductA1 } from './concrete-product-a1';
import { ConcreteProductB1 } from './concrete-product-b1';
import { ProductA } from './product-a';
import { ProductB } from './product-b';

export class ConcreteFactory1 implements AbstractFactory {
    createProductA(): ProductA {
        return new ConcreteProductA1();
    }

    createProductB(): ProductB {
        return new ConcreteProductB1();
    }
}