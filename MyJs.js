let myNav = document.querySelector('.nav-ui')
let navBar = document.querySelector('.head-nav')


function showMenu() {
  myNav.style.right = "0"; 
}
function hideMenu() {
    myNav.style.right = "-200px";
}


// const nav = document.querySelector('#nav');
let navTop = navBar.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    navBar.classList.add('fixed');
  } else {
    navBar.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);





// Vanilla Javascript
var input = document.querySelector("#phone");
window.intlTelInput(input,({
      // options here
}));
