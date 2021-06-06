'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

let showModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
let hideModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
//Show modals
for(let btnModal of btnsShowModal)
    btnModal.addEventListener('click', showModal);

//Hide modals
btnCloseModal.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function(e) {
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
        hideModal();
    }
});