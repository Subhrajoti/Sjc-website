let testImage = document.getElementById("testImage");

let scrollValue = window.addEventListener("click", function(){
    return window.scrollY
});
if (scrollValue===0){
    testImage.style.margin="";
};
console.log(scrollValue);
