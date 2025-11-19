 const input=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
 let result=input.reduce((acc,item)=>{
    acc[item]=(acc[item]||0)+1
    return acc
 },{})
 console.log(result)
