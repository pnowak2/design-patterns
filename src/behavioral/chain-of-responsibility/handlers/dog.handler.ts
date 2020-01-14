import { AbstractHandler } from '../abstract.handler';

export class DogHandler extends AbstractHandler {
    handle(request: string): string {
        if(request === 'bone') {
            return `Dog: I'll eat the ${request}.`
        }

        return super.handle(request);
    }
}