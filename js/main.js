// const savedUser = JSON.parse(localStorage.getItem('user'));
// console.log(savedUser)
//БУРГЕР
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
//БУРГЕР
//ИНПУТ С КАТЕГОРИЯМИ
document.querySelectorAll('.inputCheck p').forEach((elem) => {
  elem.addEventListener('click', (event) => {
    console.log(event)
    const dataIndex = elem.getAttribute('data-index');
    const suboptions = document.querySelector(`.suboptions[data-index="${dataIndex}"]`);

    if (suboptions) {
      suboptions.classList.toggle('none');
    }
  });
});
document.getElementById('multiselect-input').addEventListener('click', () => {
  document.querySelector('.multiselect-options').classList.toggle('none')
})


//ИНПУТ С КАТЕГОРИЯМИ







