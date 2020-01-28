import { ProductA } from './product-a';
import { ProductB } from './product-b';

export interface AbstractFactory {
    createProductA(): ProductA; 
    createProductB(): ProductB; 
}