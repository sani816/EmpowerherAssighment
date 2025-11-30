let addparabtn=document.getElementById("addpara")
let count=1
addparabtn.addEventListener("click",()=>{
         let para=document.createElement("div")
         para.textContent="This is a new paragraph"+" "+count
         para.className="para"
         count++

         document.getElementById("newpara").appendChild(para)
})

let removebtn=document.getElementById("removepara")
removebtn.addEventListener("click",()=>{
    let container=document.getElementById("newpara")
    let lastpara=container.lastElementChild;
    if(lastpara){
        lastpara.remove()
    }

})