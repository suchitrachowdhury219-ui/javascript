const marvel_heros=["thor","ironman","captainamerica","blackwidow","hulk"];
const dc_heros=["superman","wonderwoman","flash","batman"];

// marvel_heros.push(dc_heros);  //array takes any element and in this it takes the 2nd array as a single element
// console.log(marvel_heros);
// console.log(marvel_heros[5][1]); //wonderwoman

// const all_heros=marvel_heros.concat(dc_heros);      //combine 2 or more array and returns a new array
// console.log(all_heros);

const all_heros=[...marvel_heros,...dc_heros];  //after putting dot the array is not there any more and it's single element become individual elements


// const arr2=[1,2,3,[4,5],6,[7,8,9]];
// const real_arr2=arr2.flat(1);       //combine all array inside the array and make it a single array
// console.log(real_arr2);    


// console.log(Array.isArray("hitesh"));
// console.log(Array.from("hitesh"));  //creates an array from an iterable object
// //[ 'h', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name:"hitesh"})); //returns an empty array[] (u have tok told to make array of all keys or all values)

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));     //[100,200,300]   // returns a new  array from set of elements

