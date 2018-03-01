// Nomor 1

console.log('LOOPING PERTAMA');

var number1 = 0;

while (number1 < 20) {
  number1 +=2;
  console.log(number1 + '- I love coding');
}

console.log('LOOPING KEDUA');

var number2 = 20;

while (number2 > 0) {
  console.log(number2 + '- I will become fullstack developer');
  number2 -=2
}

// Nomor 2

console.log('LOOPING PERTAMA');

for (var forNumber1 = 1; forNumber1 <= 20; forNumber1++) {
  console.log(forNumber1 + '-I love coding');
}

console.log('LOOPING KEDUA');

for (var forNumber2 = 20; forNumber2 >= 1; forNumber2--) {
  console.log(forNumber2 + '- I will become fullstack developer');
}

console.log('-----------------------------------------------------');
// Nomor 3.1

for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + ' GENAP');
  } else {
    console.log(i + ' GANJIL');
  }
}

console.log('-----------------------------------------------------');
// Nomor 3.2

console.log('KELIPATAN 3');

for (var i = 1; i <= 100; i+=2) {
  if (i % 3 === 0) {
    console.log(i + ' KELIPATAN 3');
  } else {
    console.log(i + '');
  }
}

console.log('-----------------------------------------------------');
// Nomor 3.3

console.log('KELIPATAN 6');

for (var i = 1; i <= 100; i+=5) {
  if (i % 6 === 0) {
    console.log(i + ' KELIPATAN 6');
  } else {
    console.log(i + '');
  }
}

console.log('-----------------------------------------------------');
// Nomor 3.4

console.log('KELIPATAN 10');

for (var i = 1; i <= 100; i+=9) {
  if (i % 10 === 0) {
    console.log(i + ' KELIPATAN 10');
  } else {
    console.log(i + '');
  }
}
