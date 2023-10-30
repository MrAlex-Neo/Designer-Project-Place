// const savedUser = JSON.parse(localStorage.getItem('user'));
// console.log(savedUser)
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');


menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

const listItems = document.querySelectorAll('.activeLi');

listItems.forEach((item) => {
  item.addEventListener('click', () => {
    listItems.forEach((el) => {
      el.classList.remove('activeLiMenuBurger');
    });
    item.classList.add('activeLiMenuBurger');
  });
});

const input = document.getElementById('multiselect-input');
const options = document.getElementById('multiselect-options');

input.addEventListener('click', function () {
  options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

options.addEventListener('change', function (event) {
  const selectedOptions = Array.from(
    options.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.value);

  input.value = selectedOptions.join(', ');
});

document.addEventListener('click', function (event) {
  if (!input.contains(event.target) && !options.contains(event.target)) {
    options.style.display = 'none';
  }
});





