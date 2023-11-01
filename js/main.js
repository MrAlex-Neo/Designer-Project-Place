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

//////////////////////////////////////////////////////////////////////////////////////////////////////

//ИНПУТ С КАТЕГОРИЯМИ(всплывающий список)
// let searchArray = []
// document.querySelectorAll('.inputCheck p').forEach((elem) => {
//   elem.addEventListener('click', (event) => {
//     console.log(event)
//     const dataIndex = elem.getAttribute('data-index');
//     const suboptions = document.querySelector(`.suboptions[data-index="${dataIndex}"]`);

//     if (suboptions) {
//       suboptions.classList.toggle('none');
//     }
//   });
// });
// document.querySelectorAll('.liContent').forEach((elem) => {
//   elem.addEventListener('click', (event) => {
//     const text = elem.querySelector('h6').textContent;
//     const img = elem.querySelector('img');
//     if (searchArray.includes(text)) {
//       searchArray = searchArray.filter(item => item !== text);
//       img.classList.add('none');
//     } else if (searchArray.length < 3) {
//       img.classList.remove('none');
//       searchArray.push(text);
//     }
//     const inputField = document.getElementById('multiselect-input');

//     if (searchArray.length > 0) {
//       const displayText = searchArray.slice(0, 3).join(', ');
//       inputField.value = searchArray.length < 4 ? displayText + ` (${searchArray.length}/3)` : displayText;
//     } else {
//       inputField.value = '';
//     }
//     console.log(searchArray);
//   });
// });
// document.addEventListener('click', function (event) {
//   const multiselect = document.getElementById('multiselect');
//   const multiselectOptions = document.querySelector('.multiselect-options');
//   if (event.target !== multiselect && !multiselect.contains(event.target)) {
//     multiselectOptions.classList.add('none');
//   }
// });
// document.getElementById('multiselect-input').addEventListener('click', function (event) {
//   document.querySelector('.multiselect-options').classList.toggle('none');
//   document.querySelectorAll('.suboptions').forEach(elem => {
//     elem.classList.add('none');
//   });
//   event.stopPropagation();
// });
const categories = [
  {
      name: "Ремонт и строительство",
      subcategories: [
          "Стройматериалы",
          "Инструменты",
          "Сантехника, водоснабжение и сауна",
          "Двери",
          "Садовая техника",
          "Окна и балконы",
          "Камины и обогреватели",
          "Готовые строения и срубы",
          "Потолки"
      ]
  },
  {
      name: "Мебель и интерьер",
      subcategories: [
          "Кровати, диваны и кресла",
          "Шкафы, комоды и стеллажи",
          "Столы и стулья",
          "Текстиль и ковры",
          "Кухонные гарнитуры",
          "Предметы интерьера, искусство",
          "Освещение",
          "Компьютерные столы и кресла",
          "Подставки и тумбы",
          "Другое"
      ]
  },
  {
      name: "Бытовая техника",
      subcategories: [
          "Для кухни",
          "Для дома",
          "Климатическое оборудование",
          "Для индивидуального ухода",
          "Другое"
      ]
  },
  {
      name: "Растения",
      subcategories: [
          "Живые растения",
          "Вертикальные сады",
          "Искусственные растения"
      ]
  },
  {
      name: "Посуда и товары для кухни",
      subcategories: [
          "Сервировка стола",
          "Приготовление пищи",
          "Хранение продуктов",
          "Приготовление напитков",
          "Хозяйственные товары",
          "Кухонные аксессуары",
          "Другое из категории «Посуда и товары для кухни»"
      ]
  }
];
let searchArray = [];

// Генерация категорий и подкатегорий
const multiselectOptions = document.getElementById("multiselect-options");
categories.forEach((category, index) => {
    const liCategory = document.createElement("li");
    liCategory.classList.add("inputCheck");
    liCategory.setAttribute("data-index", index);

    const pCategory = document.createElement("p");
    pCategory.setAttribute("data-index", index);
    pCategory.textContent = category.name;

    const ulSuboptions = document.createElement("ul");
    ulSuboptions.classList.add("suboptions", "none");
    ulSuboptions.setAttribute("data-index", index);

    category.subcategories.forEach((subCategory, subIndex) => {
        const liSubCategory = document.createElement("li");
        const divLiContent = document.createElement("div");
        divLiContent.classList.add("liContent");

        const h6SubCategory = document.createElement("h6");
        h6SubCategory.textContent = subCategory;

        const imgSubCategory = document.createElement("img");
        imgSubCategory.classList.add("none");
        imgSubCategory.setAttribute("src", "./img/Ok.svg");
        imgSubCategory.setAttribute("alt", "");

        divLiContent.appendChild(h6SubCategory);
        divLiContent.appendChild(imgSubCategory);
        liSubCategory.appendChild(divLiContent);
        ulSuboptions.appendChild(liSubCategory);
    });

    liCategory.appendChild(pCategory);
    liCategory.appendChild(ulSuboptions);
    multiselectOptions.appendChild(liCategory);
});

// Добавление событий для элементов
document.querySelectorAll("#multiselectDaddy .inputCheck p").forEach(elem => {
    elem.addEventListener("click", event => {
        const dataIndex = elem.getAttribute("data-index");
        const suboptions = document.querySelector(`.suboptions[data-index="${dataIndex}"]`);
        if (suboptions) {
            suboptions.classList.toggle("none");
        }
    });
});

document.querySelectorAll("#multiselectDaddy .liContent").forEach(elem => {
    elem.addEventListener("click", event => {
        const text = elem.querySelector("h6").textContent;
        const img = elem.querySelector("img");
        if (searchArray.includes(text)) {
            searchArray = searchArray.filter(item => item !== text);
            img.classList.add("none");
        } else if (searchArray.length < 3) {
            img.classList.remove("none");
            searchArray.push(text);
        }
        const inputField = document.getElementById("multiselect-input");

        if (searchArray.length > 0) {
            const displayText = searchArray.slice(0, 3).join(", ");
            inputField.value = searchArray.length < 4 ? displayText + ` (${searchArray.length}/3)` : displayText;
        } else {
            inputField.value = "";
        }
        console.log(searchArray);
    });
});

document.addEventListener("click", event => {
    const multiselectDaddy = document.getElementById("multiselectDaddy");
    const multiselectOptions = document.querySelector("#multiselectDaddy .multiselect-options");
    if (event.target !== multiselectDaddy && !multiselectDaddy.contains(event.target)) {
        multiselectOptions.classList.add("none");
    }
});

document.getElementById("multiselect-input").addEventListener("click", event => {
    document.querySelector("#multiselectDaddy .multiselect-options").classList.toggle("none");
    document.querySelectorAll("#multiselectDaddy .suboptions").forEach(elem => {
        elem.classList.add("none");
    });
});
// ________________________________________
document.querySelector('.cleanAll').onclick = () => {
  document.getElementById('filterBoxChooseTown-input').value = '';
  document.getElementById('filterBoxChooseState-input').value = '';
  document.querySelectorAll('.checkShowRoom').forEach(elem => {
    elem.querySelector('input[type="checkbox"]').checked = false; // Снятие галочки с чекбокса
  });
};







//ИНПУТ С КАТЕГОРИЯМИ(всплывающий список)

//////////////////////////////////////////////////////////////////////////////////////////////////////

//ФИЛЬТР(всплывающий список)
let searchTownArray = [];

document.querySelector('.filterBtn').addEventListener('click', () => {
    document.querySelector('.filterBoxBody').classList.toggle('none');
});
document.getElementById('filterBoxChooseTown-input').addEventListener('click', () => {
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json')
        .then(res => res.json())
        .then(json => {
            render(json.Russia, document.getElementById('filterBoxChooseTown'));
            document.querySelector('.filterBoxChooseTown').classList.toggle('none');
            attachEventListenersToTowns();
        });
});
function render(cities, listElement) {
    listElement.innerHTML = cities.map((city, index) => createTownElemForTownList(city, index)).join('');
}

function createTownElemForTownList(city, index) {
    return `
        <li class="inputCheck liTown liStyle" data-index="${index}">
            <p data-index="${index}">${city}</p><img class="${searchTownArray.includes(city) ? '' : 'none'}" src="./img/Ok.svg" alt="">
        </li>
    `;
}
function attachEventListenersToTowns() {
    document.querySelectorAll('.liTown').forEach((elem) => {
        elem.addEventListener('click', (event) => {
            const text = elem.querySelector('p').textContent;
            const img = elem.querySelector('img');
            searchTownArray.includes(text) ? searchTownArray = searchTownArray.filter(item => item !== text) : searchTownArray.push(text);
            img.classList.toggle('none', !searchTownArray.includes(text));
            document.getElementById('filterBoxChooseTown-input').value = searchTownArray.join(', '); // Вывод выбранных городов через запятую
            console.log(searchTownArray);
        });
    });
}
document.addEventListener('click', function (event) {
    const filterBox = document.querySelector('.filterBox');
    const filterBoxBody = document.querySelector('.filterBoxBody');
    const filterBoxChooseTown = document.querySelector('.filterBoxChooseTown');
    const filterBoxChooseState = document.querySelector('.filterBoxChooseState');
    if (event.target !== filterBox && !filterBox.contains(event.target)) {
        filterBoxBody.classList.add('none');
        filterBoxChooseTown.classList.add('none');
        filterBoxChooseState.classList.add('none');
    }
});


document.getElementById('filterBoxChooseState-input').addEventListener('click', () => {
  document.querySelector('.filterBoxChooseState').classList.toggle('none')
})
document.querySelectorAll('.liState').forEach(elem => {
  elem.addEventListener('click', function(event) {
    const inputField = document.getElementById('filterBoxChooseState-input');
    document.querySelectorAll('.liState img').forEach(img => {
      img.classList.add('none');
    });
    this.querySelector('img').classList.remove('none');
    inputField.value = this.querySelector('p').textContent;
  });
});








//ФИЛЬТР(всплывающий список)






