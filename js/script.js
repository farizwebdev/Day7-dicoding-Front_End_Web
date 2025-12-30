// Membuat Logika Menambah Todo
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        addTodo();
    });
});