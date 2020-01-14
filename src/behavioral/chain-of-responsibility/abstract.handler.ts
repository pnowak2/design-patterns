import { Handler } from './handler';

export class AbstractHandler implements Handler {
    private nextHandler: Handler;

    handle(request: string): string {
        if(this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return null;
    }

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }
}