import { Component } from './component';

export class Decorator implements Component {
    constructor(private component: Component) {}

    operation(): string {
        return this.component.operation();
    }
}