const BASE_URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const API_KEY = "i4dlkJX5zgzSqSWEiqxdGg==LENviREn2Hke73w1";
const imgBox = document.querySelector(".imgBox");
const qrImage = document.querySelector("#qrImage");
const qrText = document.querySelector("#qrText");
const btn = document.querySelector("#btn");

function generateQR(){
    qrImage.src = BASE_URL + qrText.value;

}

btn.addEventListener("click", generateQR);



