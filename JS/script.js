let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
    document.body.classList.toggle('active');
}

window.onscroll = () =>{
if (window.innerWidth < 991){
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
    document.body.classList.remove('active');
  }
}