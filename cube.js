// Manipulasi Elemen pada File Cube.html
const gambar = document.getElementById('gambar');
console.log(gambar);

gambar.setAttribute('width', 300);
gambar.setAttribute('height', 200);

const button = document.querySelectorAll('.button');
const buttonPlay = button[3];
const buttonPlayElement = buttonPlay.children[0];
buttonPlayElement.setAttribute('disabled', true);
console.log(buttonPlayElement);