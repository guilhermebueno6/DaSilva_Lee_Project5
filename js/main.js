(()=>{
  console.log('fired!');

let button = document.querySelector('#navButton'),
menu = document.querySelector('.dropdownMenu');

function dropdown(){
  menu.classList.toggle("show-dropdown");
}

button.addEventListener('click', dropdown);

})();
