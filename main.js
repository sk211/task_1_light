// alert("hello world")

const button = document.getElementById("button");
const image = document.getElementById("image")

const LigthOffOn = () => {
    if (image.getAttribute('src') === "./img/pic_bulboff.gif") {

        image.setAttribute('src', "./img/pic_bulbon.gif")
    }
    else {
        image.setAttribute('src', "./img/pic_bulboff.gif")
    }

}
button.addEventListener("click", LigthOffOn)