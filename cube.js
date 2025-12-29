// Manipulasi Elemen pada File Cube.html
const gambar = document.getElementById('gambar');
console.log(gambar);

// Mengubah atribut width dan height pada elemen gambar
gambar.setAttribute('width', 300);
gambar.setAttribute('height', 200);

// Menonaktifkan tombol Play pada elemen dengan kelas 'button'
const button = document.querySelectorAll('.button');
const buttonPlay = button[3];
const buttonPlayElement = buttonPlay.children[0];
buttonPlayElement.setAttribute('disabled', true);
console.log(buttonPlayElement);

// Mengambil dicodingLink dan mengubah teksnya
const dicoding = document.getElementById('dicodingLink');
dicoding.innerText = 'Belajar Programming di Dicoding Indonesia';

// Mengambil googleLink dan mengubah teksnya
const google = document.getElementById('googleLink');
google.innerText = 'Mencari sesuatu di Google';

// Menambahkan style pada semua button
const buttons = document.querySelectorAll('.button');