// const savedUser = JSON.parse(localStorage.getItem('user'));
// console.log(savedUser)
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');


menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

const listItems = document.querySelectorAll('.categoryForMenuBurgerUp li');

listItems.forEach((item, index) => {
  if (index !== 0) {
    item.addEventListener('click', () => {
        listItems.forEach((item, index) => {
            item.classList.remove('activeLiMenuBurger');
            });
        item.classList.add('activeLiMenuBurger');
    });
  }
});

