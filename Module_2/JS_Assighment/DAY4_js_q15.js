let second=10
let timer=setInterval(()=>{
    console.log(`Time remaining: ${second} seconds`)
    if(second<=0){
        clearInterval(timer)
        console.log("Countdown complete!")
    }
    second--;

},1000)
