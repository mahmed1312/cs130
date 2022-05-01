/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const makeNormal = () => {

   document.getElementById("deez").className = "";

}

const makeDesert = () => {

   document.getElementById("deez").className = "desert";

}
const makeOcean = () => {

   document.getElementById("deez").className = "ocean";

}
const makeContrast = () => {

   document.getElementById("deez").className = "high-contrast";


}





document.querySelector('#default').addEventListener('click', makeNormal);
document.querySelector('#desert').addEventListener('click', makeDesert);

document.querySelector('#ocean').addEventListener('click', makeOcean);
document.querySelector('#high-contrast').addEventListener('click', makeContrast);
