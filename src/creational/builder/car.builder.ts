import { Builder } from './builder';
import { Car } from './car';

export class CarBuilder implements Builder {
    private engine: string;
    private frame: string;
    private wheels: string;
    private seats: number;

    public produceEngine(type: string): void {
        this.engine = type;
    }

    public produceFrame(type: string): void {
        this.frame = type;
    }

    public produceWheels(type: string): void {
        this.wheels = type;
    }

    public produceSeats(number: number): void {
        this.seats = number;
    }

    getCar(): Car {
        return new Car(this.engine, this.frame, this.wheels, this.seats);
    }
}