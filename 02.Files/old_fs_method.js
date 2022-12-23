// File Operations in Node in Traditional way, fully asynchronous, No sequence control

const fs= require('fs');
const path = require('path');
const os = require('os');

fs.readFile(path.join(__dirname,'starter.txt'),'utf-8' , (err,data) => {
    if (err) throw err;
    console.log(data);
})

console.log('Hello...');

fs.writeFile(path.join(__dirname,'reply.txt'),' This is the Reply' , (err) => {
    if (err) throw err;
    console.log("Write Successful!");

    fs.appendFile(path.join(__dirname,'reply.txt'),'\n This is the Reply 2' , (err) => {
        if (err) throw err;
        console.log("Append Successful!");

        fs.rename(path.join(__dirname,'reply.txt'), path.join(__dirname,'newreply.txt') , (err) => {
            if (err) throw err;
            console.log("Rename Successful!");
            
        })
    })
})

fs.copyFile(path.join(__dirname,'lorem.txt'), path.join(os.homedir(),'copyreply.txt') , (err) => {
    if (err) throw err;
    console.log("Copy Successful!");
})