function addItem(){
    const ul=document.querySelector(".list")
    const li=document.createElement("li")
    const count=ul.children.length + 1
    li.textContent= count+"."+"New item"   
    ul.appendChild(li)
}
    
