// Membuat sebuah Fungsi welcome
function welcome() {
    alert("Sim salabim abis ini terjadi apa?");
    const contents = document.querySelector(".contents");
    contents.removeAttribute("hidden");
}

// Menjalankan Fungsi welcome ketika halaman selesain di load
document.body.onload = welcome;

// Membuat Fungsi Increment
function increment() {
    document.getElementById("count").innerText++;

    if (document.getElementById("count").innerText == 5) {
        const pesan = document.createElement("h4");
        pesan.innerText = "Omaigatt! Kamu mendapatkan hadiah tersembunyiiii!!";

        const gambar = document.createElement("img");
        gambar.setAttribute(
            "src",
            "https://raw.githubusercontent.com/dicodingacademy/a315-web-pemula-labs/shared-files/catto.jpg",
        );
    }

    const contents = document.querySelector(".contents");
    contents.appendChild(pesan).appendChild(gambar);
}

// Menjalankan Fungsi Increment ketika tombol di klik
document.getElementById("incrementButton").onclick = increment;