//A.
// username="sania"
// course="Web Development"
// console.log(`Hello!, ${username} welcome to the ${course} course`)


//B.
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

console.log(`Name: ${student.name}, Age: ${student.age}`);
student.greet();

//C.

let getFullName=(first,last)=>`${first} ${last}`
console.log(getFullName("sania","khatun"))