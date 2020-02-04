import { BusinessLogic } from './business.logic';
import { Command } from './command';
import { ComplexCommand } from './complex.command';
import { Invoker } from './invoker';
import { SimpleCommand } from './simple.command';

describe('Command', () => {
    it('should turn request into object with all params to fullfill it', () => {
        const hiCommand: Command<string> = new SimpleCommand('Say hi!');
        const businessLogic = new BusinessLogic();
        const sendEmailCommand: Command<string> = new ComplexCommand(businessLogic, 'Send Email', 'Save report');
        const invoker = new Invoker(hiCommand, sendEmailCommand);

        expect(invoker.doSomethingImportant()).toEqual('start: Simple command: Say hi!, some logic, finish: Complex command: Business Logic working on Send Email, Business Logic also working on Save report');
    });
});