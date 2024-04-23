const add = function(num1,num2) { 
  return num1+num2;   
};

const subtract = function(num1,num2) {  
  if(num1>num2)
    return num1-num2;
  else if(num2<num1)
    return num2-num1;
  else 
    return 0;
	
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
  

  /*let sum=0;
  let length= array.length;
  for(i=length-1; i>=0; i--)
    sum+= array[i];
  return sum;*/    
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current);

 /* let product=1;
  let length= array.length;
  for(i=length-1; i>=0; i--)
    product*= array[i];
  return product; */

};

const power = function(num1,num2) {
    return num1**num2;    // can also use Math.pow(num1,num2)
	
};

const factorial = function(num) {
  let fact=1;
  if (num===0)  
    return 1;
  for(let i=num; i>0; i--)
    fact *=i;
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
