/**
 * Created by dev on 2016/5/24.
 */
// const crypto = require('crypto');
var crypto;
try {
    crypto = require('crypto');
} catch (err) {
    console.log('crypto support is disabled!');
}

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
    .update('I love cupcakes')
    .digest('hex');
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e