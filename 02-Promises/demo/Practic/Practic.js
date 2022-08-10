let name = "julian Rguez"

let person = new Promise((resolve, reject) => {                   //create promise
    setTimeout (function(){                                       //async one second
        resolve = new Promise((resolve, reject) => {                   //create promise
            setTimeout (function(){                                       //async one second
                name? resolve (name): reject ("No data")                  //data in resolve, reject
        },1000)
        })            
},1000)
})



person.then ((data)=>data.then((data)=>{console.log(data);})); //use of promise
