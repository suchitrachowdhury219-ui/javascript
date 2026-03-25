// for

/*for (let index = 0; index < array.length; index++) {
    const element = array[index];  
}*/

for(let i=0;i<=10;i++){
    const element =i;
    if(element==5){
       // console.log("5 is the best number");
   }
   //console.log(element);  
}


for(let i=1;i<=10;i++){
    //console.log(`outer loop value ${i}`);

    for(let j=1;j<=5;j++){
        //console.log(`inner loop value ${j} and outer loop value ${j}`);
        //console.log(i+'*'+j+"="+i*j);        
    }
}  

let myArray=["batman","superman","flash"]
//console.log(myArray.length);    //3
for (let i = 0; i<myArray.length; i++) {
        const element = myArray[i];
       //console.log(element); //batman superman flash
    }
    
//break and continue
// for (let index = 1; index <= 20; index++) {
//     if (index==5){
//         console.log("detected 5");
//         break;      //takes the cobtrol out if the current block
        
//     }
//     console.log(`value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index==5){
        console.log("detected 5");
       continue;        //skip the current codition
        
    }
    console.log(`value of i is ${index}`);
    
}