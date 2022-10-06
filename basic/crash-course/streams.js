const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// streams
// on is event listener
// readStream.on('data', (chunk) => {
//    console.log('----- NEW CHUNK -----');
//    console.log(chunk.toString());
//    writeStream.write('\nNEW CHUNK\n');
//    writeStream.write(chunk);
// })

// piping - method used to take a readable stream and connect it to a writeable stream
readStream.pipe(writeStream);

// duplex stream - read and write while it's implemented
//               - mixture of the readable and writable streams