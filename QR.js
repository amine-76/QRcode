document.addEventListener("DOMContentLoaded", function() {
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");

    function generateQrCode() {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    }

    // Associer la fonction generateQrCode à l'événement click du bouton
    let generateButton = document.querySelector("button");
    generateButton.addEventListener("click", generateQrCode);
});
