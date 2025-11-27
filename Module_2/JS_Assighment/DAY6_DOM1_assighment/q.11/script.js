function changeText() {
   document.getElementById("h1")
   h1.textContent = "Welcome to DOM world";
   h1.style.color="red"
  }
    function changeColor(){
    let color=document.getElementsByTagName("p")
    for(let i=0;i<color.length;i++){
        color[i].style.color="blue"
        color[i].style.fontWeight="bold"
    }
}
function changeBgColor(){
const para=document.querySelector(".container");
para.style.backgroundColor="yellow";
para.style.height="26px";
}
