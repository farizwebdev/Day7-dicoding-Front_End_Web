function welcome() {
    alert("Sim salabim abis ini terjadi apa?");
    const contents = document.querySelector(".contents");
    contents.removeAttribute("hidden");
}

document.body.onload = welcome;