const palindromes = function (string) {
    let newStr= string.toLowerCase().replace(/[^\w\s\'\d]|_/g, "")          // (\w), a whitespace character (\s), or an apostrophe (\'), or an underscore _.
                 .replace(/\s+/g, "");                                        // replacing double whitespaces

    // convert the string with no punc into array so we can reverse it
    newArray=newStr.split(""); 

    reverseArray=newArray.slice().reverse();    //before reversing we use slice() to make a copy of the orignal array
                                              // we do that because revere() alters orignal array.    
    
    // convert back to string to compare them, as array comparision will give us incorrect value
    return newArray.join("")=== reverseArray.join("") 
};

// Do not edit below this line

module.exports = palindromes;
