// const savedUser = JSON.parse(localStorage.getItem('user'));
// console.log(savedUser)
//БУРГЕР
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
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
let searchArray = []
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
document.querySelectorAll('.liContent').forEach((elem) => {
  elem.addEventListener('click', (event) => {
    const text = elem.querySelector('h6').textContent;
    const img = elem.querySelector('img');
    if (searchArray.includes(text)) {
      searchArray = searchArray.filter(item => item !== text);
      img.classList.add('none');
    } else if (searchArray.length < 3) {
      img.classList.remove('none');
      searchArray.push(text);
    }
    const inputField = document.getElementById('multiselect-input');

    if (searchArray.length > 0) {
      const displayText = searchArray.slice(0, 3).join(', ');
      inputField.value = searchArray.length < 4 ? displayText + ` (${searchArray.length}/3)` : displayText;
    } else {
      inputField.value = '';
    }
    console.log(searchArray);
  });
});
document.addEventListener('click', function (event) {
  const multiselect = document.getElementById('multiselect');
  const multiselectOptions = document.querySelector('.multiselect-options');

  if (event.target !== multiselect && !multiselect.contains(event.target)) {
    multiselectOptions.classList.add('none');
  }
});

document.getElementById('multiselect-input').addEventListener('click', function (event) {
  document.querySelector('.multiselect-options').classList.remove('none');
  document.querySelectorAll('.suboptions').forEach(elem => {
    elem.classList.add('none');
  });
  event.stopPropagation();
});




//ИНПУТ С КАТЕГОРИЯМИ







