//reduce()
const myNums=[1,2,3,4,5];
// const myTotal= myNums.reduce(function(acc,currval) {
//     console.log(`accumulator: ${acc} and current-value :${currval}`);
    
//     return acc+currval
// },4)
// console.log(myTotal);

/*accumulator: 4 and current-value :1
accumulator: 5 and current-value :2
accumulator: 7 and current-value :3
accumulator: 10 and current-value :4
accumulator: 14 and current-value :5
19*/

//2nd way
const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
//console.log(myTotal);

const shoppingCart=[
   { itemName:"js course",
    price:299
   },
    { itemName:"mob dev course",
    price:5999
   },
    { itemName:"datascientist course",
    price:12999
   }
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)                        //add items in cart and automatically calculate price
console.log(priceToPay);
