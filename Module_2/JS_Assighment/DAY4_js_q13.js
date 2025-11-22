const intervel=setInterval(()=>{console.log("Loading...")},1000)
setTimeout(()=>{
    clearInterval(intervel)
    console.log("Loaded successfully")
},5000)