//Immediately Invoked Functon expression(IIFE)
///to prevent pollution from global scope

(function chai(){
    //named IIFE 
    console.log(`DB CONNECTED`);
})() ;   //DB CONNECTED

//(fun def)(execution)
//we can use arrow fun inside IIFE
( (name) => {
    console.log(`DB CONNECTEED TWO ${name}`);
})('suchitra')      //DB CONNECTEED TWO suchitra


//2 IIIFE can be separated by using ;