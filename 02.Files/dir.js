// Dealing with Directories.
const fs = require('fs');

//Creates folder if it exists
if (!fs.existsSync('./new')){ // existSync checks whether the folder exists or not
    fs.mkdir('./new', (err)=>{
        if (err) throw err;
        console.log('Directory is created');
    })
}

//Deletes folder if it exists
if (fs.existsSync('./new')){ // existSync checks whether the folder exists or not
    fs.rmdir('./new', (err)=>{
        if (err) throw err;
        console.log('Directory is Removed');
    })
}