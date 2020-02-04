import { Command } from './command';

export class SimpleCommand implements Command<string> {
    constructor(private payload: string) { }

    execute(): string {
        return `Simple command: ${this.payload}`;
    }
}