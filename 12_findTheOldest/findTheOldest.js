const findTheOldest = function(array) {
    let currentYear = 2024;

    // Make an array of people without a year of death
    let personWithoutDateOfDeath = array.filter(person => person.yearOfDeath === "" || person.yearOfDeath === null || typeof person.yearOfDeath === 'undefined');

    // Make an array of people with a year of death
    let personWithDateOfDeath = array.filter(person => person.yearOfDeath !== "" && person.yearOfDeath !== null && typeof person.yearOfDeath !== 'undefined');

    // Find the oldest person with a year of death
    // using ternary operator here
    let oldestPersonWithDate = personWithDateOfDeath.reduce((oldest, current) => 
                                                        (current.yearOfDeath - current.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth) ? current : oldest);

    // Check if there are persons without a year of death
    if (personWithoutDateOfDeath.length > 0) {
        let oldestPersonWithoutDate = personWithoutDateOfDeath.reduce((oldest, current) =>
                                                        (currentYear - current.yearOfBirth) > (currentYear - oldest.yearOfBirth) ? current : oldest);

        // Compare the oldest person without a year of death with the oldest person with a year of death
        if (oldestPersonWithoutDate.yearOfBirth < oldestPersonWithDate.yearOfBirth) {
            return oldestPersonWithoutDate;
        }
    }

    return oldestPersonWithDate;
};

// Do not edit below this line
module.exports = findTheOldest;
