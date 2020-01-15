export class Bike {
    ride(input: number): { status: string } {
        return { status: `Biking whoopping ${input} mph` };
    }
}