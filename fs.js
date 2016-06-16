/**
 * Created by dev on 2016/5/26.
 */
const fs = require('fs');

fs.watch('fs-tmp/test', {encoding: 'buffer'}, (event, filename) => {
    if (filename)
        console.log(filename);
    // Prints: <Buffer ...>
});

fs.appendFile('fs-tmp/test', '\ndata to append', 'utf8', null);

// fs.rename('fs-tmp/re-test', 'fs-tmp/re-test-1', (err) => {
//     if (err) throw err;
//     console.log('renamed complete');
// });

fs.stat('fs-tmp/test', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
});

fs.watch('fs-tmp', {encoding: 'buffer'}, (event, filename) => {
    if (filename)
        console.log(filename);
    // Prints: <Buffer ...>;
});
fs.watchFile('fs-tmp/test', {encoding: 'buffer'}, (event, filename) => {
    if (filename)
        console.log(filename);
    // Prints: <Buffer ...>
});

fs.access('fs-tmp/test', fs.R_OK | fs.W_OK, (err) => {
    console.log(err ? 'no access!' : 'can read/write');
});

var callback = null;
fs.writeFile('fs-tmp/message.txt', 'Hello Node.js', 'utf8', callback);