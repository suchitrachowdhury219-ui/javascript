# Projects related to DOM
## project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 2

```javascript
const form=document.querySelector('form');
//this usecasse will give u empty value
//const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
  e.preventDefault();
const height=parseInt(document.querySelector('#height').value);
const weight=parseInt(document.querySelector('#weight').value);
const results=document.querySelector('#results');
const msg=document.querySelector('#msg');

//checks
if(height==="" || height<=0 || isNaN(height)){
results.innerHTML=`Please give a valid height ${height}`;
}else if(weight==="" || height<=0 || isNaN(height)){
  results.innerHTML=`Please give a valid weight ${weight}`;
  }
  else{
   const BMI= (weight/((height*height)/10000)).toFixed(2);
   //show the result
   results.innerHTML=`<span>${BMI}</span>`
  }
  const BMI= (weight/((height*height)/10000)).toFixed(2);
  if(BMI<18.6){
    msg.textContent="UNDER WEIGHT";
  }
  else if(BMI==18.6 || BMI<=24.9){
    msg.textContent=" NORMAL RANGE";
  }
  else if(BMI>24.9){
    msg.textContent="OVERWEIGHT";
  }
  else{
    msg.textContent="";
  }
})

```