import { Car } from './car';
import { CarBuilder } from './car.builder';
import { Director } from './director';

describe('Builder', () => {
    it('should build complex object with steps', () => {
        const builder: CarBuilder = new CarBuilder();
        const director = new Director(builder);

        director.make('sport');
        let car: Car = builder.getCar();

        expect(car.toString()).toEqual('V8, F1, Continental Sport, 2 seats');

        director.make('city');
        car = builder.getCar();

        expect(car.toString()).toEqual('ECO Engine, SUV, Fulda City, 5 seats');
    });
});