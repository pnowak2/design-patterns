import { ProductA } from './product-a';

export interface ProductB {
    actionB(): string;
    anotherActionB(collaborator: ProductA): string;
}