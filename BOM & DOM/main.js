// Variabel untuk menampung semua elemen dengan kelas 'Kotak'
const kotak = document.querySelectorAll('.Kotak');


// Menampilkan setiap elemen yang ditemukan di konsol
for (let item of kotak) {
    console.log(item);
}

// Variabel untuk menampung elemen dengan kelas 'Kotak1'
const kotak1 = document.querySelector('.Kotak1');
console.log(kotak1);

// Membuat Elemen baru Pakai DOM
const paragrafBaru = document.createElement('p');
paragrafBaru.innerText = 'Paragraf Baru dari DOM';

// Menambahkan gambar Pakai DOM
const gambarBaru = document.createElement('img');
gambarBaru.setAttribute('src', 'https://placeimg.com/200/200/animals');
gambarBaru.setAttribute('alt', 'Gambar Hewan');