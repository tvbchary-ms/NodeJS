// File Operations in Node in Modern way, with sequence control

const fsPromises= require('fs').promises;
const path = require('path');

const fileOps = async () =>{
    try {
        const data = await fsPromises.readFile(path.join(__dirname,'starter.txt'), 'utf-8');
        console.log("Read Successful!");
        console.log('Data is: ', data);
        await fsPromises.unlink(path.join(__dirname,'starter.txt')) // This will delete the file.
        await fsPromises.writeFile(path.join(__dirname,'newstarter.txt'), data)
        await fsPromises.writeFile(path.join(__dirname,'reply.txt'), 'This is Reply \n')
        console.log("Write Successful!");
        await fsPromises.appendFile(path.join(__dirname,'reply.txt'), 'How are you doing \nI am Fine')
        console.log("Append Successful!");
        await fsPromises.rename(path.join(__dirname,'reply.txt'), path.join(__dirname,'newreply.txt'))
        console.log("Rename Successful!");
        await fsPromises.copyFile(path.join(__dirname,'newreply.txt'), path.join(__dirname,'reply.txt'))
        console.log("Copy Successful!");
    } catch (err) {
        console.log(err);
    }
}

fileOps();

