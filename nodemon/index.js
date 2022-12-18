const {format} = require('date-fns'); //Date time package
const {v4: uuid} = require('uuid'); //{v4:uuid} stands for import v4 as uuid


console.log(format(new Date(), 'yyyy-MM-dd\tHH:mm:ss'));

console.log(uuid()); // creates a different id each time we run
console.log("Hello");