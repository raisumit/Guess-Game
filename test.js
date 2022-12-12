console.log('hello');
const path  =require('path');
const fs = require('fs');
// const path = require('path');
let outJson = [];
fs.readdir('./public/assets/guess-who', (err, file) => {
    // console.log(__dirname);
    if (err) {
        console.log(err);
    }
    console.log(file);
    file.forEach((el, ind) => {
        let name = el.split('.')[0].replaceAll('-', ' ');
        outJson.push({
            name: name,
            path: '/assets/guess-who/' + el
        });
        // console.log('test',fs.existsSync('./public/option.json'));
        
    })
    const jsonFile = fs.existsSync('./public/option.json');
    if(jsonFile){
        fs.unlink('./public/option.json',(err)=>{
            if(err)
            console.log(err);
        });
    }
    fs.appendFileSync('./public/option.json',JSON.stringify(outJson),(err) => {
        if(err){
            console.log(err);
        }
    })
});