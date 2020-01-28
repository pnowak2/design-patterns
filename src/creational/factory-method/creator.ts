import { Product } from './product';

export abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product: Product = this.factoryMethod();
        return `Creator worked with ${product.operation()}`;
    }
}