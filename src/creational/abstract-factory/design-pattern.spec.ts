import { AbstractFactory } from './abstract-factory';
import { ConcreteFactory1 } from './concrete-factory-1';
import { ConcreteFactory2 } from './concrete-factory-2';
import { ProductA } from './product-a';
import { ProductB } from './product-b';

describe('Abstract factory', () => {
    it('should create family of objects', () => {
        function clientCode(factory: AbstractFactory): { a: any, b: any } {
            const productA: ProductA = factory.createProductA();
            const productB: ProductB = factory.createProductB();

            return {
                a: productA.actionA(),
                b: `${productB.actionB()} and ${productB.anotherActionB(productA)}`
            };
        }

        const factory1 = new ConcreteFactory1();
        const factory2 = new ConcreteFactory2();

        expect(clientCode(factory1)).toEqual({
            a: 'concrete product a1',
            b: 'concrete product b1 and concrete product b1 collaborated with concrete product a1'
        });

        expect(clientCode(factory2)).toEqual({
            a: 'concrete product a2',
            b: 'concrete product b2 and concrete product b2 collaborated with concrete product a2'
        });
    });
});