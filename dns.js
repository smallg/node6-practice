/**
 * Created by dev on 2016/5/24.
 */
const dns = require('dns');

dns.lookup('nodejs.org', (err, addresses, family) => {
    console.log('addresses:', addresses);
});