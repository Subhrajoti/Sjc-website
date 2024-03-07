let testImage = document.getElementById("testImage");

let scrollValue = window.addEventListener("click", function(){
    return window.scrollY
});
if (scrollValue===0){
    testImage.style.marginTop="10px";
};
console.log(scrollValue);
