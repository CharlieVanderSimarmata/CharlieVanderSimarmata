// JavaScript dapat digunakan untuk menambahkan interaksi, seperti menangani tombol beli

document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll(".buy-button");
    buyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            alert("Terima kasih telah membeli produk ini!");
        });
    });
});
