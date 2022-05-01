const makeBigger = () => {
   if(document.querySelector('div.content').style.fontSize == 'smaller'){
      document.querySelector('div.content').style.fontSize = '29px';
      document.querySelector('h1').style.fontSize='29px';
   }
   if(document.querySelector('div.content').style.fontSize == '9px'){
      document.querySelector('div.content').style.fontSize = 'smaller';
      document.querySelector('h1').style.fontSize='smaller';
   }
   else{

      document.querySelector('div.content').style.fontSize = '25px';
      document.querySelector('h1').style.fontSize='25px';
   }
   

};

const makeSmaller = () => {
   
   if(document.querySelector('div.content').style.fontSize == 'smaller'){
   document.querySelector('div.content').style.fontSize = '9px';
   document.querySelector('h1').style.fontSize='9px';
}
if(document.querySelector('div.content').style.fontSize == '9px'){
   document.querySelector('div.content').style.fontSize = '9px';
   document.querySelector('h1').style.fontSize='9px';
}
else{
document.querySelector('div.content').style.fontSize = 'smaller';
   document.querySelector('h1').style.fontSize='smaller';
}


};



document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);


