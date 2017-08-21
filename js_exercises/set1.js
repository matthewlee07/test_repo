'use strict'

function yearOfBirth(thisYear=2017, age) {
  if ( age > 0) {
    return thisYear - age;
  } else {
    throw new Error('Cannot have age less than zero!')
  }
}
function whoAmI(name, age) {
  console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
  console.log(`I was born in ${yearOfBirth(2017,143)}.`);
}

try {
  whoAmI('Brad', 43);
} catch(e) {
  console.error(e.message);
}