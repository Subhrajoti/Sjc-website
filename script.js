console.log("Hello Vistors");
// small JavaScript Project:
var img = document.getElementById("puppyImage");
var button = document.getElementById("likeButton");
var font = document.getElementById("likeIcon");
let is_clicked = false;

function onClickLikeButton() {
    if (is_clicked === false) {
        img.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        button.style.color = "#ffffff";
        button.style.background = "#0967d2";
        font.style.color = "#0967d2";
        is_clicked = true;
    } else {
        img.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        button.style.color = "#9aa5b1";
        button.style.background = "#cbd2d9";
        font.style.color = "#cbd2d9";
        is_clicked = false;
    }
}

// Guess Game:
let guessedNum = document.getElementById("guessNum");
let randomNumber = Math.ceil(Math.random() * 100);
let guess = document.getElementById("guessNum").value;

function checkNum() {
    let guessedNumber = parseInt(guessedNum.value);
    if (randomNumber < guessedNumber) {

        document.getElementById("messagePara").innerText = "Too High, Try Again";
        document.getElementById("messagePara").style.backgroundColor = "red";
        document.getElementById("messagePara").style.fontWeight = "bold";
    } else if (randomNumber > guessedNumber) {

        document.getElementById("messagePara").innerText = "Too Low, Try Again";
        document.getElementById("messagePara").style.backgroundColor = "red";
        document.getElementById("messagePara").style.fontWeight = "bold";
    } else if (randomNumber === guessedNumber) {
        document.getElementById("messagePara").innerHTML = "Congratulation, Right Guess!";
        document.getElementById("messagePara").style.backgroundColor = "yellow";
        document.getElementById("messagePara").style.fontWeight = "bold";
    } else {

        document.getElementById("messagePara").innerText = "Give Some inputs!";
        document.getElementById("messagePara").style.backgroundColor = "red";
        document.getElementById("messagePara").style.fontWeight = "bold";
    }
}
// test:
var button1 = document.getElementById("button");

function changeColor() {
    button1.style.textDecoration = "underline";
    button1.style.width = "170px";
    button1.style.margin = "0px 5px 0px 0px";
    button1.style.boxShadow = "1px 2px 10px 5px white"
}

function resetColor() {
    button1.style.textDecoration = "";
    button1.style.width = "";
    button1.style.margin = "";
    button1.style.boxShadow = ""

}

function scrollToTop() {
    window.scrollTop(0);
}

// testing :

let header = document.getElementById("testHeader");
let testImage = document.getElementById("testImage");

header.addEventListener("click", function() {
    testImage.style.marginTop = "78px";


})
let i = window.addEventListener("scroll", function() {
    const scrollValue = window.scrollY;
    return scrollValue
    console.log(scrollValue)
});


if (i === 0) {

    testImage.style.marginTop = "0px";

}
