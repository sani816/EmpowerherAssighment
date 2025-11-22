// //Q.1

// function createeCounter(){
//     let count=0
//     return{
//         increment:function(){
//              count++
//             console.log("current count",count)
           
//         },
//         decrement:function(){
//              count--
//             console.log("current count",count)
           
//         },
        
//     }
// }
//  let counter=createeCounter()
//  counter.increment()
//  counter.increment()
//  counter.decrement()


//Q.2

function createBankAccount(){
    let balance=0
    return{
        deposit(amount){
            balance=balance+amount
            console.log("deposited:",amount)
        },
        withdraw(amount){
            if(amount>balance){
                console.log("Insufficient balance")
            }else{
                balance=balance-amount
                console.log("withdral:",amount)
            }
        },
        checkBalance(){
            console.log("balance:",balance)
        }
        
    }
}
const account = createBankAccount();
account.deposit(500); 
account.withdraw(200); 
account.withdraw(400); 
console.log(account.balance); 