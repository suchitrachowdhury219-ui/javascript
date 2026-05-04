function checkPalindrome(input) {
const s=input.trim().toLowerCase();
  
let left=0;
let right=s.length -1;
  
while(left < right){
  if (s[left] !== s[right]){
    return "NO";
  }
  left++;
  right--;
}
  
  return "YES";
}
console.log(checkPalindrome("Madam"))   //YES

// const input=require('fs').readFilesync(0,'utf-8);
// console.log(solve(input));    =>these 2 line are used to take input from outside commonly used in coding platform                                   
                              
