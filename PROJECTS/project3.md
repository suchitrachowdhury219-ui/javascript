# Projects related to DOM
## project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 3

```javascript
const clock=document.getElementById('clock');
//const clock=dpcument.querySelector('#clock');

setInterval(function(){
  let date=new Date();
//console.log(date.toLocaleTimeString());
clock.  textContent=date.toLocaleTimeString();
},1000);


```