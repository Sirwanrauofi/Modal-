// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

// **************************    Mini project (** Modal **) by Naser Raoofi   **********************************


const modal=document.querySelector('.modal-overlay');


function toggleModal(action){modal.classList[action]('open-modal')};

// show modal

document.querySelector('.modal-btn').addEventListener('click',()=>toggleModal('add'));

// close modal

document.querySelector('.close-btn').addEventListener('click',()=>toggleModal('remove'));