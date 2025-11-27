function changeBgColor(){
    const color=document.getElementById("color").value
    const box=document.getElementById("output")
    box.style.backgroundColor=color
    if(color===""){
        alert("invalid color")
    }
}
function UpdateText(){
    const text=document.getElementById("text").value
    const box=document.getElementById("output")
    if(text===""){
        alert("Please enter some text")
    }else{
        box.textContent=text
    }
}