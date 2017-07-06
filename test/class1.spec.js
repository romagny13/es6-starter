import { assert } from 'chai';

import { Class1 } from '../src/class1';

describe('Class1', () => {

    it('Should work', () => {
        let c1 = new Class1();
        assert.equal('from class 1', c1.get());
    });

});
