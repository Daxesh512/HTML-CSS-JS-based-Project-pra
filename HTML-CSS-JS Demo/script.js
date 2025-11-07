const logo = document.querySelector('.logo');
const trash = document.querySelector('.trash');
const container = document.querySelector('.col-12');
const body = document.querySelector('body');

logo.addEventListener('click',()=>{
body.classList.toggle('dark');
})

trash.addEventListener('click',()=>{
container.style.display = "none";   
})