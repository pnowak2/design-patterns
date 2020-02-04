import { BusinessLogic } from './business.logic';
import { Command } from './command';

export class ComplexCommand implements Command<string> {
    constructor(private businessLogic: BusinessLogic, private a: string, private b: string) { }

    execute(): string {
        return `Complex command: ${this.businessLogic.doSomething(this.a)}, ${this.businessLogic.doSomethingElse(this.b)}`;
    }
}