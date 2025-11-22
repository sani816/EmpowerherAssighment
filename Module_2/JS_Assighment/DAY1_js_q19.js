//1.A.

console.log(`7+5=${7+5}`)

//1.B

let multiString=`line1
line2
line3`
console.log(multiString)

//1.C
firstName = "John"
lastName = "Doe"
console.log(`${firstName} ${lastName}`)

//2.A

let square=((n)=>n*n)
console.log(square(3))

//2.B

const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();
//The answer is undefined because the this keyword inside the test arrow function refers to the global scope (or undefined in strict mode/module scope), not the obj object, due to the lexical scoping of arrow functions. 

//2.C

const obj3 = {
  value: 50,
  test: function(){
  console.log(this.value)
  }
};
obj3.test();


//3.A

const product = { name: "Pen", price: 10 };
const copy={...product}
console.log(copy)

//3.B

const d = { x: 1 };
const e = { y: 2 };
 const merge={...d,...e}
 console.log(merge)

 //3.C

let maxvalue=((...nums)=>Math.max(...nums))
console.log(maxvalue(1,2,3,4,5,6,23,88,9))


//4.A

const arr = [10, 20, 30];
const[a,b,c]=arr
console.log(a,b)


//4.B

const laptop = { brand: "Dell", ram: "8GB" };
const{brand}=laptop
console.log(brand)

//4.c

const info = {};
console.log(info.user?.name)

//5.A
for (var i = 0; i < 3; i++) {}
console.log(i);//3

// //5.B
// for (let j = 0; j < 3; j++) {}
// console.log(j);// referenceError

//5.C
//Because const prevents reassignment, ensuring the variable holds the same value throughout the program → safer code.

//6.A

let speed=((kmph)=>kmph>60?"Fast":"Normal")
console.log(speed(100))


//6.B
let age=((year)=>year>=18?"Adult":"Minor")
console.log(age(20))


//6.C

let check=((num)=>num>0?"positive":num==0?"zero":"negetive")
console.log(check(2))
console.log(check(0))
console.log(check(-1))

//7.A
const nums = [1,2,3];
console.log(...nums,4,5)

//7.B
j = ["x","y"];
k = ["z"];
const merged=[...j,...k]
console.log(merged)

//7.C

const printsName=((...names)=>names)
console.log(printsName("A","B","C"))

//8.A

const user = { id: 101, status: "active" };
const{id,status}=user
console.log(id,status)

//8.B

const id1 = 101;
const role = "admin";
const user1 = {
  id2: id1,
  role1: role
};
const{id2,role1}=user1
console.log(id2,role1)


//8.C

const name ="sania";
const age1 = 18;
const user2 = {
  name1:name,
  age2: age1
};
const{name1,age2}=user2
console.log(name1,age2)


//9.A
console.log(` Today is:${new Date().toDateString()}`)

//9.B
let named="sania"
score=99
console.log(`Hello!${named},your score is ${score}/100`)

//10.A
const addition=((a,b)=>a+b)
console.log(addition(3,4))

//10.B
const adult=((aged)=>{
    if(aged>=18){
        return true
    }else{
        return false
    }
})
console.log(adult(16))
console.log(adult(30))

//10.C
 const re=((n)=>n*n)
 console.log(re(4))

 //11.A

array=[2,3,4,5,6,7]
const clone = [...array];
console.log(clone)

//11.B

const added=[2,3,4,5,6,7]
console.log(100,...added)

//11.C

 const obj1 = { name: "Item", price: 200};
const obj2 = { price: 500 };
const mergedOverride = { ...obj1, ...obj2 };
console.log(mergedOverride);

//12.A


const user4 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user4.address?.city)

//12.B

const user5 = {
  job: "offficer",
  title: {
    IT: "tcs"
  }
};
console.log(user5.job?.title?.name)


//12.C

const student = {
  name: "Riya"
};
console.log(student.address.city)