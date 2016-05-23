/**
 * Created by dev on 2016/5/23.
 */
const buf = new Buffer(5);
console.log(buf);

const buf1 = Buffer.alloc(10);
console.log(buf1);
// Creates a zero-filled Buffer of length 10.
const buf2 = Buffer.from([1,2,3]);
// Creates a Buffer containing [01, 02, 03].
console.log(buf2);

const buf3 = new Buffer('buffer');
const buf4 = new Buffer(buf1);

buf3[0] = 0x61;
console.log(buf3.toString());
// 'auffer'
console.log(buf4.toString());
// 'buffer' (copy is not changed)

const buf5 = new Buffer('this is a tést');
console.log(buf5.toString());
// prints: this is a tést
console.log(buf5.toString('ascii'));
// prints: this is a tC)st

const buf6 = new Buffer('7468697320697320612074c3a97374', 'hex');
console.log(buf6.toString());
// prints: this is a tést