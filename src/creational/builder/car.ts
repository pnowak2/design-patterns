export class Car {
    constructor(public engine: string, public frame: string, public whells: string, public seats: number) { }

    public toString() {
        return `${this.engine}, ${this.frame}, ${this.whells}, ${this.seats} seats`;
    }
}