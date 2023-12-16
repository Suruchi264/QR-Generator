// Add an event listener to the button with the id "generateBtn"
document.getElementById("generateBtn").addEventListener("click", function () {
  // Call the generateQR function when the button is clicked
  generateQR();
});

// Define the generateQR function
function generateQR() {
  // Get references to the HTML elements with the ids "imgbox", "qr_image", and "usr"
  let imgbox = document.getElementById("imgbox");
  let qr_image = document.getElementById("qr_image");
  let usr = document.getElementById("usr");

  // Set the source of the QR code image using the QR code generation API
  qr_image.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    usr.value;
}
