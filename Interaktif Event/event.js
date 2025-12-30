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
}

// Menjalankan Fungsi Increment ketika tombol di klik
document.getElementById("incrementButton").onclick = increment;