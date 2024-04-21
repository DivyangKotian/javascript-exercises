const removeFromArray = function(array, ...item) {
    return array.filter(a => !(item.includes(a)))           // we are filtering items which are included in the arguemtns (...item) 
};

// Do not edit below this line
module.exports = removeFromArray;
