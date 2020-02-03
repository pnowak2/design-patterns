import { Facade } from './facade';
import { SubsystemA } from './subsystem-a';
import { SubsystemB } from './subsystem-b';

describe('Facade', () => {
    it('should provide simple interface to complex subsystem', () => {
        function clientCode(facade: Facade): string {
            return facade.operation();
        }

        const subsystemA = new SubsystemA();
        const subsystemB = new SubsystemB();
        const fcd = new Facade(subsystemA, subsystemB);

        expect(fcd.operation()).toEqual('result: subsystem a, operation 1, subsystem b, operation 2');
    });
});