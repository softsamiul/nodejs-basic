const fs = require('fs')

fs.exists("deo.txt",(result, err)=>{
    if(err){
        console.log("Not")
    }else{
        console.log("found")
    }
})


// console.log(fs)