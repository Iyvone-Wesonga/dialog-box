//variables and fetching
const modalContainer=document.getElementById('modal-container');
const closeBtn=document.getElementById('closemodal');
const openBtn=document.getElementById('showModal');

//Event listeners

openBtn.addEventListener('click', function(){
    modalContainer.style.display='block';
})

closeBtn.addEventListener('click', function(){
    modalContainer.style.display='none';
})
window.addEventListener('click', function(e){
    if (e.target===modalContainer){
        modalContainer.style.display='none'; 
    }
})