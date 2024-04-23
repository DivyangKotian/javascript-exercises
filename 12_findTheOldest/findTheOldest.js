const findTheOldest = function(array) {
    let currentYear=2024;                       // incase of yearOfDeath absent
    
    // lets make an array of people without year of death

    let personWithoutDateOfDeath= array. filter(person => person.yearOfDeath === "" && person.yearOfDeath === null && typeof(person.yearOfDeath)=== 'undefined');
   
    // lets calcuulate their age base on current dates only

   // if( personWithoutDateOfDeath.length >0){
        let ages= personWithoutDateOfDeath.map(age => currentYear- age.yearOfBirth);
        let indexOfOldestWithoutDate = ages.findIndex(age => age === Math.max(...ages));
        let oldestPersonWithoutDate = personWithoutDateOfDeath[indexOfOldestWithoutDate];
    //}

    // lets calculate age of everyone else

    let agesWithDates = array.map(person => person.yearOfDeath - person.yearOfBirth);
    let indexOfOldestWithDate= agesWithDates.findIndex(age => age === Math.max(...agesWithDates));
    let oldestPersonWithDate = array[indexOfOldestWithDate];

    if(personWithoutDateOfDeath.length>0){
        if( Math.max(...ages)> Math.max(...agesWithDates))
            overallOldest= oldestPersonWithoutDate
        else    
            overallOldest= oldestPersonWithDate;
    }
    else{
        let overallOldest= oldestPersonWithDate;
        return overallOldest;
    }
        
    
};























   /* if( array.yearOfDeath!=="" && array.yearOfDeath!== null && typeof(array.yearOfDeath) !== 'undefined'){

    let age=array.map(person => person.yearOfDeath - person.yearOfBirth)

    let indexOfOldestAge = age.indexOf(Math.max(...age));

    let oldestPersonWithDate = array[indexOfOldestAge];
    return oldestPersonWithDate;
    }

    else {
        let age= array.map(ages => currentYear- ages.yearOfBirth);

        let indexOfOldestAge= age.indexOf(Math.max(...age));

        let oldestPersonWithoutDate = array[indexOfOldestAge];
        return oldestPersonWithoutDate;
    }
*/

// Do not edit below this line
module.exports = findTheOldest;
