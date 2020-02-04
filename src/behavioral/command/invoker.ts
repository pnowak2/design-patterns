import { Command } from './command';

export class Invoker {
    constructor(private onStart: Command<string>, private onFinish: Command<string>) { }

    public doSomethingImportant() {
        return `start: ${this.onStart.execute()}, some logic, finish: ${this.onFinish.execute()}`;
    }
}