import { Bike } from './bike';
import { Vehicle } from './vehicle';

export class BikeAdapter extends Vehicle {
    constructor(private bike: Bike) {
        super();
    }

    drive(speed: number): string {
        return this.bike.ride(speed).status;
    }
}