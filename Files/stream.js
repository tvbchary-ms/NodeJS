// Dealing with large files write chunk by chunk for quick operations without loading full content
const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname,'lorem.txt'), {encoding: 'utf8'});

const ws = fs.createWriteStream(path.join(__dirname,'new-lorem.txt'));

// Traditional Method

// rs.on('data', (dataChunk)=>{
//     ws.write(dataChunk);
// })

// Second Method

rs.pipe(ws);