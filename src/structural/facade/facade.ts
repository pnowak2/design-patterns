import { SubsystemA } from './subsystem-a';
import { SubsystemB } from './subsystem-b';

export class Facade {
    constructor(private subsystemA: SubsystemA, private subsystemB: SubsystemB) { }

    operation(): string {
        return `result: ${this.subsystemA.operation1()}, ${this.subsystemB.operation2()}`
    }
}