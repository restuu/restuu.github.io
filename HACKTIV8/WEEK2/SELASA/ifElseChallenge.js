var nama = 'Kaizaki';
var peran = 'Demon King';

if (nama === ''){
  console.log('Nama harus diisi');
} else {
  if (peran === 'Demon King') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ', kamu dapat memerintah bawahanmu!');
  } else if (peran === 'Healer') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyembuhkan temanmu!');
  } else if (peran === 'Archer') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menggunakan senjata panah!');
  } else {
    console.log('Halo ' + nama + ', pilih peranmu untuk memulai game');
  }
}
