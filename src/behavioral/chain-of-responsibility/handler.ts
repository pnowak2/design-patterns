export interface Handler {
    handle(request: string): string;
    setNext(handler: Handler): Handler;
}