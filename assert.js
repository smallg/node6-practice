/**
 * Created by dev on 2016/5/23.
 */
const assert = require('assert');
assert(true);
// assert(false);
assert(1);
// assert(0);
// assert(false, 'it\'s false');

assert.deepEqual(Error('a'), Error('b'));
const obj1 = {
    a: {
        b: 1
    }
};
const obj2 = {
    a: {
        b: 2
    }
};
const obj3 = {
    a: {
        b: 1
    }
};
const obj4 = Object.create(obj1);
assert.deepEqual(obj1, obj1);
// assert.deepEqual(obj1, obj2);
assert.notDeepEqual(obj1, obj2);
assert.deepEqual(obj1, obj3);
// assert.deepEqual(obj1, obj4);

// assert.deepStrictEqual({a: 1}, {a: '1'});

// assert.doesNotThrow(
//     () => {
//         throw new TypeError('Wrong value');
//     },
//     SyntaxError
// );

// assert.doesNotThrow(
//     () => {
//         throw new TypeError('Wrong value');
//     },
//     TypeError
// );

// assert.doesNotThrow(
//     () => {
//         throw new TypeError('Wrong value');
//     },
//     TypeError,
//     'Whoops'
// );

assert.equal(1, 1);

// assert.fail(1, 2, undefined, '>');
// assert.fail(1, 2, undefined, '>');

assert.ifError(0); // OK
// assert.ifError(1); // Throws 1
// assert.ifError('error'); // Throws 'error'

assert.notDeepStrictEqual({a:1}, {a:'1'});

assert.notEqual(1, 2);

assert.notStrictEqual(1, '1');

assert.ok(true);  // OK
assert.ok(1);     // OK

assert.strictEqual(1, 2);
// AssertionError: 1 === 2
