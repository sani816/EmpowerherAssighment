import {URL} from './metadata.js'



let addbtn=document.getElementById("addBook") 
addbtn.onclick=function (){
let title=document.getElementById("title").value 
let auther=document.getElementById("auther").value 
let price=document.getElementById("price").value 

if(!title||!auther||!price){
    alert("please fill the all field")
}
       fetch(`${URL}.json`,{
        method:"POST",
        body:JSON.stringify({
           title,
           auther,
           price 
        })
        }) 

        .then(()=>{
            document.getElementById("title").value=""
            document.getElementById("auther").value =""
            document.getElementById("price").value =""
            displayData()
        })


}

function displayData(){
    fetch(`${URL}.json`)
    .then(Response=>Response.json())
    .then((data)=>{
    let displayBook=document.getElementById("displayBook")
    displayBook.innerHTML=""

    for(let key in data){
        let book=data[key]

        let card=document.createElement("div")
        card.className="card"

        card.innerHTML=`
        <img src=img.jpg height="100px";width="100px">
        <h2>Title:${book.title}</h2>
        <h2>Auther:${book.auther}</h2>
        <h2>Price:${book.price}</h2>
          <button onclick="updateBook('${key}', '${book.Title}', '${book.Auther}', '${book.Price}')">Update</button>
          <button onclick="deleteBook('${key}')">Delete</button>`
         displayBook.appendChild(card)
    }

    })
}

// DELETE BOOK
function deleteBook(key) {
    fetch(`${URL}/${key}.json`, {
        method:"DELETE"
    }).then(() => displayData());
}

// UPDATE BOOK
function updateBook(key) {
    let newTitle = prompt("Enter new title");
    let newAuther = prompt("Enter new auther");
    let newPrice = prompt("Enter new price");

    fetch(`${URL}/${key}.json`, {
        method: "PUT",
        body: JSON.stringify({
            title: newTitle,
            auther: newAuther,
            price: newPrice
        })
    }).then(() => displayData());
}
displayData()
// make function globally
window.updateBook = updateBook;
window.deleteBook = deleteBook;
window.displayData = displayData;
