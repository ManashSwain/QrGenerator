let QRimage = document.getElementById("QRimage");
let websiteurl = document.getElementById("websiteurl");


function GenerateQR(){
    QRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + websiteurl.value ;
} 