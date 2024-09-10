const num = [1,2,3];

const myTotal = num.reduce((accumatator,item,index,arr)=>{
    console.log(typeof arr);
    console.log(`acc val: ${accumatator} and item val: ${item} index: ${index} whole array: ${arr}`);
    return accumatator+item
},10)

console.log(myTotal);

const cartItems = [
    {
        itemName:'Durex',
        price:299
    },
    {
        itemName:'manforce',
        price:399
    },
    {
        itemName:'oil',
        price:199
    },
    {
        itemName:'sexy wears',
        price:4599
    },
    {
        itemName:'2 russion and 1 spanish',
        price:40200
    }
]

const payablePrice = cartItems.reduce((accumatator,currVal)=>{
    return accumatator + currVal.price
},0)
console.log("payablePrice: ",payablePrice);

