// Nomor 1
var rows1 = 0

while (rows1 <= 5) {
  console.log('*');
  rows1 ++;
}

console.log('-----------------------------------------');

// Nomor 2                        //self note
for (var i = 0; i < 5; i++) {     //outer loop terjadi pada row
  var star = '';
  for (var j = 0; j < 5; j++) {   //inner loop terjadi pada colomn
    star += '*'                   //index array dimulai dari 0
  }
  console.log(star);
}

console.log('\n');
// Nomor 3
for (var i = 0; i < 5; i++) {
  var star = '';
  for (var j = 0; j < (i + 1); j++) {   //array.length (i + 1) karena jika tidak
    star += '*'                         //pada row ke-1 (i = 0 -> var j=0; j<0) array.length = 0
  }                                     //nilai tidak valid
  console.log(star)
}
