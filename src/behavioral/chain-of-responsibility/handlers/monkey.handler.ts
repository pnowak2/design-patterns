import { AbstractHandler } from '../abstract.handler';

export class MonkeyHandler extends AbstractHandler {
    handle(request: string): string {
        if(request === 'banana') {
            return `Monkey: I'll eat the ${request}.`
        }

        return super.handle(request);
    }
}