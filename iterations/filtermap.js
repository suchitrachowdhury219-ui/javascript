//const coding=["javascript","java","python","ruby","cpp"];

// const values=coding.forEach((item)=>{       //forEach doesn't return any kind of values
//     //console.log(item);
//     return item;
// })
// console.log(values);

const myNums=[1,2,3,4,,5,6,7,8,9,10]
// const newNums = myNums.filter((num)=>num>5)     
// console.log(newNums);  //[ 6, 7, 8, 9, 10 ]

// const newNums2=myNums.filter((num)=>{           //if u use scope {} u have to write return keyword
//     return num>4
// })
// console.log(newNums2);      //[ 5, 6, 7, 8, 9, 10 ]

//using forEach
// const newNums=[]

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);           //[ 5, 6, 7, 8, 9, 10 ]

const books=[
    {title:'book one',genre:'fiction', publish:1981, edition:2004  },
    {title:'book two',genre:'history', publish:1974, edition:2020  },
    {title:'book three',genre:'science', publish:1986, edition:1996 },
    {title:'book four',genre:'non-fiction', publish:1945, edition:2006 },
    {title:'book five',genre:'fiction', publish:2004, edition:2019 }
];
let userBooks=books.filter((bk)=>bk.genre=='history')
userBooks=books.filter((bk)=> {
    return bk.publish>2000 && bk.genre=='fiction'})
console.log(userBooks);

