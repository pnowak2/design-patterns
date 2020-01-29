import { Component } from './component';
import { ConcreteComponent } from './concrete-component';
import { ConcreteDecoratorA } from './concrete-decorator-a';
import { ConcreteDecoratorB } from './concrete-decorator-b';

describe('Decorator', () => {
    it('should attach new behaviours to objects by wrapping with other objects', () => {
        function clientCode(component: Component): string {
            return component.operation();
        }

        const comp = new ConcreteComponent();
        expect(clientCode(comp)).toEqual('concrete component');

        const decoratedA = new ConcreteDecoratorA(new ConcreteComponent());
        expect(clientCode(decoratedA)).toEqual('concrete decorator a, concrete component');

        const decoratedAB = new ConcreteDecoratorB(new ConcreteDecoratorA(new ConcreteComponent()));
        expect(clientCode(decoratedAB)).toEqual('concrete decorator b, concrete decorator a, concrete component');
    });
});