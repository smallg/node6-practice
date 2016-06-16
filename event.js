/**
 * Created by dev on 2016/5/24.
 */
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occurred!');
});
myEmitter.emit('event');

const myEmitter1 = new MyEmitter();
myEmitter1.on('event', function(a, b) {
    console.log(a, b, this);
    // Prints:
    //   a b MyEmitter {
    //     domain: null,
    //     _events: { event: [Function] },
    //     _eventsCount: 1,
    //     _maxListeners: undefined }
});
myEmitter1.emit('event', 'a', 'b');