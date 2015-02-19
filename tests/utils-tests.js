import * as utils from '../dist/utils';

describe('isObject', function(){
    
    it('should test if it is an object', function(){
        expect(utils.isObject({})).to.equal(true);
        expect(utils.isObject([])).to.equal(false);
        expect(utils.isObject(123)).to.equal(false);
    });
    
});