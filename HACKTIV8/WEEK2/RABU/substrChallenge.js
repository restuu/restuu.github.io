var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substr(4, 'JavaScript'.length);
var thirdWord3 = word3.substr(word3.indexOf('is'), 2);
var fourthWord3 = word3.substr(word3.indexOf('so'), 2);
var fifthWord3 = word3.substr(word3.indexOf('cool'), 4);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);
