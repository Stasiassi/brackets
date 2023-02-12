module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.join('').replace(/,/g, ''); 
  let stack = [];
  for (let i = 0; i < str.length; i++) 
  {
    let index = bracketsConfig.indexOf(str[i]);
    if (index % 2 === 0) 
    {
      if (str[i] === bracketsConfig[index + 1] && stack[stack.length - 1] === index) { stack.pop(); } 
      else { stack.push(index); }
    } 
    else if (stack.pop() !== index-1) { return false; }   
  }
  return stack.length === 0;
}
