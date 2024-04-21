const reverseString = function (string) {
    return string.split("").reverse().join("");     // splits on each char, reverses the order and joins each char
  };                                                                
  

// Do not edit below this line
module.exports = reverseString;


/*const reverseString = function(word) {
    let reverseArray= word.split('');       // splitting the string 
    let lengthOfArray= word.length;         // to find the last index of new array  
    let newString="";       
    for(i=lengthOfArray-1; i>=0; i--)       // revesing the string
        {
            newString+= reverseArray[i];      // joining the string  
        }
        return newString;
    }; 
    
    First attempt commented for note taking

    */