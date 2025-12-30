// Membuat sebuah Fungsi welcome
function welcome() {
    alert("Sim salabim abis ini terjadi apa?");
    const contents = document.querySelector(".contents");
    contents.removeAttribute("hidden");
}

// Menjalankan Fungsi welcome ketika halaman selesain di load
document.body.onload = welcome;