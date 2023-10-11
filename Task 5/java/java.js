toggle = document.querySelector('.toggle');
nav = document.querySelector('.nav');
navList = document.querySelector('.nav-list');


toggle.addEventListener('click',()=>{
   nav.classList.toggle('h-nav-resp');
   navList.classList.toggle('display-none');
})