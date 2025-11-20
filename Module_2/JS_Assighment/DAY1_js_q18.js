//A.
if (true) {
    let x = 10;
    var y = 20;
  }

  console.log(y);
  console.log(x);
  

//   //B.
  const profile = {
    user: {
      details: {
        email: "test@mail.com"
      }
    }
  };
console.log(profile?.user?.details?.email); 
console.log(profile?.user?.details?.phone);  

//C.

const student = {
    name: "John"
  };
  console.log(student.address.city);  
  


