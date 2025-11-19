function processProduct(name,price){
    const productsName=product.map(product=>product.name)
    product.forEach(product=>{
        if(product.price>50){
            console.log(product.name ,"is above $50")
        }else{
            console.log(product.name,"is below $50")
        }
    })
}
product=[{name:"laptop",price:3000},{name:"mouse",price:20}]
processProduct(product)
