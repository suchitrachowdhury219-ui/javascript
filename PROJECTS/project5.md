# Projects related to DOM
## project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 6
```javascript
const insert=document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class='color'>
  <table padding=1 margin=2>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>codes</th>
  </tr>
  <tr>
    <td>${e.key === ' '?'space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
  </div>
  `
});
```
