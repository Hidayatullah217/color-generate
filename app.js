
var rgbValue =document.querySelector('.rgbValue')
var button =document.querySelector('button')

button.addEventListener("click", ()=>{

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var bgColor = `rgb(${r},${g},${b})`;
    rgbValue.textContent = bgColor

    document.body.style.background = bgColor;

})