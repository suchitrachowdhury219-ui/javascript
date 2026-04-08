# Projects related to DOM
## project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 6

```javascript
//generate a random color
const randomColour=function(){
  const hex="0123456788ABCDEF";
  let color='#';
  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
};
let intervalId;
const startChangingColor=function(){
  clearInterval(intervalId);
  if(!intervalId){    //prevents multiple intervals*check point
  intervalId=setInterval(changeBgColor,1000)
  }
  function changeBgColor(){
    document.body.style.backgroundColor=randomColour();
  };
};

document.querySelector('#start').addEventListener('click',startChangingColor)

const stopChangingColor=function(){
  clearInterval(intervalId);
  intervalId=null;//reset so starts work again
};
document.querySelector('#stop').addEventListener('click',stopChangingColor)





```