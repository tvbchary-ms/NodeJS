const {format} = require('date-fns'); //Date time package
const {v4: uuid} = require('uuid'); //{v4:uuid} stands for import v4 as uuid

const fs= require('fs');
const fsPromises= require('fs').promises;
const path=require('path');
const logEvents= async(message, logName) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname,'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname,'logs', logName), logItem)
    } catch (err) {
        console.log(err);
        console.log("there is an error");
    }
}

console.log(format(new Date(), 'yyyy-MM-dd\tHH:mm:ss'));

console.log(uuid()); // creates a different id each time we run
console.log("Hello");

module.exports = logEvents;