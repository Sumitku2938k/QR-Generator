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

// const updateMsg = async () => {
//     try {
//         let response = await fetch(`${BASE_URL}`, {
//             headers: { "X-Api-Key":"i4dlkJX5zgzSqSWEiqxdGg==LENviREn2Hke73w1 "}
//         });

//         if (!response.ok) {
//             throw new Error("Failed to fetch quote");
//         }

//         let data = await response.json();

//         if (data.length > 0) {
//             content.innerText = `"${data[0].quote}"`;
//             author.innerText = `- ${data[0].author}`
//         } else {
//             msg.innerText = "No quote found.";
//         }
//     } catch (error) {
//         msg.innerText = `Error: ${error.message}`;
//     }
// };


