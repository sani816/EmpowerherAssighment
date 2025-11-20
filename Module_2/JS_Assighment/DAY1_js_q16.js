//A.
let even=(n)=>{
    if(n%2==0)return true
    else return false
}
console.log(even(4))

//B.
let marks=40
let result=marks>=35? "pass":"fail"
console.log(result)

//C.

const greet=name=>console.log(`Hello! ${name?name:"guest"}`)
greet("sania")
greet()