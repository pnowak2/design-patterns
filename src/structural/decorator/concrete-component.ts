import { Component } from './component';

export class ConcreteComponent implements Component {
    operation(): string {
        return 'concrete component';
    }
}