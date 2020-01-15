import { Bike } from './bike';
import { BikeAdapter } from './bike.adapter';
import { Vehicle } from './vehicle';

describe('Adapter', () => {
   it('should allow collaborate objects with incompatibile interfaces', () => {
    const runVehicle = (v: Vehicle, speed: number): string => {
        return v.drive(speed);
    }

    const vehicle = new Vehicle();
    const bike = new Bike();
    const bikeAdapter = new BikeAdapter(bike);

    expect(runVehicle(vehicle, 120)).toEqual('Car goes 120 km/h');
    expect(runVehicle(bikeAdapter, 20)).toEqual('Biking whoopping 20 mph');
   }); 
});