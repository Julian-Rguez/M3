let fs = require ('fs');
const request = require('request');

module.exports = {
echo: function(data){
    process.stdout.write (data.slice(5))//devuelve 
},
date: ()=>{
    process.stdout.write (Date());
},
ls: ()=>{
    fs.readdir ('.',(error,data)=>{
        if (error) throw error;
        process.stdout.write (data.join('\n'));
        process.stdout.write('\nprompt > ');
    })
},
pwd: ()=>{
    process.stdout.write (process.cwd());
},
cat: (data)=>{
    fs.readFile (data.slice(4),'utf8', (error,data)=>{
        if (error) throw error;
        process.stdout.write (data);
        process.stdout.write('\nprompt > ');
    })
},
heat: (data)=>{
    fs.readFile (data.slice(5),'utf8', (error,data)=>{
        if (error) throw error;
        process.stdout.write (data.split('\n').splice(0,10).join('\n'));
        process.stdout.write('\nprompt > ');
    })
},
tail: (data)=>{
    fs.readFile (data.slice(5),'utf8', (error,data)=>{
        if (error) throw error;
        process.stdout.write (data.split('\n').splice(-9).join('\n'));
        process.stdout.write('\nprompt > ');
    })
}
,
curl: (data)=>{
    request (data.slice(5), (error,data)=>{
        if (error) throw error;
        process.stdout.write (data.body);
        process.stdout.write('\nprompt > ');
    }) 
}
}
