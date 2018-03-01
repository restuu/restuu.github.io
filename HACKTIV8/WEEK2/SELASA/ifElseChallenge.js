var nama = 'Kaizaki';
var peran = 'Demon King';

if (nama === 'Kaizaki' && peran === ''){
  console.log ('Halo ' + nama + ', pilih peranmu untuk memulai game!');
} else if (nama === 'Kaizaki' && peran === 'Demon King') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ', kamu dapat memerintah bawahanmu!');
} else if (nama === 'Hishiro' && peran === 'Healer') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyembuhkan temanmu!');
} else {
    console.log('Nama harus diisi');
}
