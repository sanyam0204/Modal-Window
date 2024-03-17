'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll('.show-modal');
//console.log(btnsOpenModal);

const fnclose=function (){
  //console.log(`Model Closed`);
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const fnopen= function()
{
  //console.log(`Button Clicked`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
for(let i=0; i<btnsOpenModal.length; i++)
{
  btnsOpenModal[i].addEventListener('click',fnopen);
}
btnCloseModal.addEventListener('click',fnclose);
overlay.addEventListener('click',fnclose);
document.addEventListener('keydown', function(e) {
  if(e.key==='Escape')
  {
    if(modal.classList.contains('hidden'))
    fnopen();
    else
    fnclose();
  }
});
