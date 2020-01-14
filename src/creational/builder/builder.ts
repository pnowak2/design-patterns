export interface Builder {
    produceWheels(type: string): void;
    produceEngine(type: string): void;
    produceFrame(type: string): void;
    produceSeats(number: number): void;
}