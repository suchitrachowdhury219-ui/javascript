// for of//
//["",""]    strings inside array
//[{},{}]   objects inside array
const array=[1,2,3,4,5];
for (const num of array) {
//console.log(num);
}

const greeting="helo world";
for (const greet of greeting) {
   // console.log(`each char is a ${greet}`);   
}

///maps
//unique in the map collections
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('LN',"London")
map.set('IN',"India")
//console.log(map);
//'IN' => 'India',
//'USA' => 'United States of America',
//'FR' => 'France',
//'LN' => 'London'

for (const key of map) {
   // console.log(key); 
}
/*[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'FR', 'France' ]
[ 'LN', 'London' ]*/
 for (const [key,value] of map) {
    //console.log(key,':-',value);
 }
 //IN :- India
// USA :- United States of America
// FR :- France
// LN :- London

const myObject={
    'game1':'NFS',
    'game2':'BGMI'
}
for (const [key,value] of myObject) {
    //console.log(key,':-',value);        //maps are iteratable but not object (there are different ways using for in loop)
}