import { Builder } from './builder';

export class Director {
    constructor(private builder: Builder) { }

    public make(type: string) {
        if(type === 'sport') {
            this.constructSportsCar(this.builder);
        } else if(type === 'city') {
            this.constructCityCar(this.builder);
        }
    }

    private constructSportsCar(builder: Builder): void {
        builder.produceEngine('V8');
        builder.produceFrame('F1');
        builder.produceSeats(2);
        builder.produceWheels('Continental Sport');
    }

    private constructCityCar(builder: Builder): void {
        builder.produceEngine('ECO Engine');
        builder.produceFrame('SUV');
        builder.produceSeats(5);
        builder.produceWheels('Fulda City');
    }
}