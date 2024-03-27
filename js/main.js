let filterArray = {
    city: '',
    default: true,
    showrooms: 0,
    favorite: 0,
    productSample: 0
}
let searchArray = [];

const savedUsertoken = JSON.parse(localStorage.getItem('userToken'));
console.log(savedUsertoken)
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

//МОИ ОБЪЯВЛЕНИЯ
document.addEventListener("DOMContentLoaded", function () {
    const advCat = document.getElementById('advCat');
    const categorySection = document.getElementById('categorySection');
    const advContent = document.getElementById('advContent');


    const myAd = [
        {
            title: 'Активные',
            sell: [{
                id: '1',
                img: 'https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png',
                cost: '56000',
                name: 'Диван KOLLIN BLUE',
                days: '29'
            }],
            pay: [{
                id: '2',
                img: 'https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png',
                cost: '56000',
                name: 'Диван KOLLIN BLUE',
                days: '29'
            }]
        },
        {
            title: 'На модерации',
            sell: [
                {
                    id: '3',
                    img: 'https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png',
                    cost: '56000',
                    name: 'Диван KOLLIN BLUE',
                    days: '29'
                },
                {
                    id: '4',
                    img: 'https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png',
                    cost: '56000',
                    name: 'Диван KOLLIN BLUE',
                    days: '29'
                },
                {
                    id: '5',
                    img: 'https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png',
                    cost: '56000',
                    name: 'Диван KOLLIN BLUE',
                    days: '29'
                },
            ],
            pay: [{
                id: '6',
                img: 'https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png',
                cost: '56000',
                name: 'Диван KOLLIN BLUE',
                days: '29'
            }]
        },
        {
            title: 'Черновики',
            sell: [],
            pay: [{
                id: '7',
                img: 'https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png',
                cost: '56000',
                name: 'Диван KOLLIN BLUE',
                days: '29'
            }]
        },
        {
            title: 'Архив',
            sell: [],
            pay: []
        },
    ]

    function renderCategories() {
        categorySection.innerHTML = "";

        let firstNonEmptyCategory = null;

        myAd.forEach(item => {
            if (item.sell.length > 0 || item.pay.length > 0) {
                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('card--content');
                categoryDiv.innerHTML = `<p class="cardTitle">${item.title}</p><p class="cardSum">${item.sell.length + item.pay.length}</p>`;
                categoryDiv.addEventListener('click', () => {
                    renderCategory(item.title);
                    setActiveCategory(categoryDiv);
                });
                categorySection.appendChild(categoryDiv);

                if (!firstNonEmptyCategory) {
                    firstNonEmptyCategory = item.title;
                }
            }
        });

        // Автоматически показываем первую активную категорию
        if (firstNonEmptyCategory) {
            renderCategory(firstNonEmptyCategory);
            const firstCategoryDiv = categorySection.querySelector('.card--content p.cardTitle');
            setActiveCategory(firstCategoryDiv.parentNode);
        }
    }

    function renderCategory(category) {
        advContent.innerHTML = "";

        const categoryData = myAd.find(item => item.title === category);
        console.log(categoryData)
        if (categoryData) {
            if (categoryData.sell.length > 0 || categoryData.pay.length > 0) {
                const fragment = document.createDocumentFragment();

                if (categoryData.sell.length > 0) {
                    const sellDiv = document.createElement('div');
                    sellDiv.classList.add('advCatContentChild');
                    sellDiv.innerHTML = `<h5>Продаю</h5>`;
                    categoryData.sell.forEach(item => {
                        console.log(categoryData.title)
                        const contentChildDiv = document.createElement('div');
                        contentChildDiv.classList.add('contentChild');
                        contentChildDiv.dataset.index = item.id;
                        const editOrOption = category === 'Черновики' ? '<img src="./img/mainPage/user/edit.svg" alt=""></img>' : '<img src="./img/mainPage/user/option.svg" alt=""></img>';
                        contentChildDiv.innerHTML = `
                            <div class="contentChildImg">
                                <img src="${item.img}" alt="">
                            </div>
                            <div class="contentChildInfo">
                                <p class="contentChildPrice">${item.cost}</p>
                                <p class="contentChildName">${item.name}</p>
                                <p class="contentChildDays">${item.days} дней до удаления</p>
                            </div>
                            <div>
                                ${editOrOption}
                            </div>`;
                        sellDiv.appendChild(contentChildDiv);
                    });

                    fragment.appendChild(sellDiv);
                }

                if (categoryData.pay.length > 0) {
                    const payDiv = document.createElement('div');
                    payDiv.classList.add('advCatContentChild');
                    payDiv.innerHTML = `<h5>Покупаю</h5>`;
                    categoryData.pay.forEach(item => {
                        const contentChildDiv = document.createElement('div');
                        contentChildDiv.classList.add('contentChild');
                        contentChildDiv.dataset.index = item.id;
                        const editOrOption = category === 'Черновики' ? '<img src="./img/mainPage/user/edit.svg" alt=""></img>' : '<img src="./img/mainPage/user/option.svg" alt=""></img>';
                        contentChildDiv.innerHTML = `
                            <div class="contentChildImg">
                                <img src="${item.img}" alt="">
                            </div>
                            <div class="contentChildInfo">
                                <p class="contentChildPrice">${item.cost}</p>
                                <p class="contentChildName">${item.name}</p>
                                <p class="contentChildDays">${item.days} дней до удаления</p>
                            </div>
                            <div>
                                ${editOrOption}
                            </div>`;
                        payDiv.appendChild(contentChildDiv);
                    });
                    fragment.appendChild(payDiv);
                }

                advContent.appendChild(fragment);
            }
        }
    }

    function setActiveCategory(categoryElement) {
        const activeCategory = categorySection.querySelector('.card--content.active');
        if (activeCategory) {
            activeCategory.classList.remove('active');
        }
        categoryElement.classList.add('active');
    }

    renderCategories(); // Рендерим категории при загрузке страницы
});

// document.addEventListener("DOMContentLoaded", function () {
//     const advCat = document.getElementById('advCat');
//     const categorySection = document.getElementById('categorySection');
//     const advContent = document.getElementById('advContent');

//     const myAd = [
//         {
//             title: 'Активные',
//             sell: [{
//                 id: '1',
//                 img: 'https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png',
//                 cost: '56000',
//                 name: 'Диван KOLLIN BLUE',
//                 days: '29'
//             }],
//             pay: [{
//                 id: '2',
//                 img: 'https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png',
//                 cost: '56000',
//                 name: 'Диван KOLLIN BLUE',
//                 days: '29'
//             }]
//         },
//         {
//             title: 'На модерации',
//             sell: [
//                 {
//                     id: '3',
//                     img: 'https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png',
//                     cost: '56000',
//                     name: 'Диван KOLLIN BLUE',
//                     days: '29'
//                 },
//                 {
//                     id: '4',
//                     img: 'https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png',
//                     cost: '56000',
//                     name: 'Диван KOLLIN BLUE',
//                     days: '29'
//                 },
//                 {
//                     id: '5',
//                     img: 'https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png',
//                     cost: '56000',
//                     name: 'Диван KOLLIN BLUE',
//                     days: '29'
//                 },
//             ],
//             pay: [{
//                 id: '6',
//                 img: 'https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png',
//                 cost: '56000',
//                 name: 'Диван KOLLIN BLUE',
//                 days: '29'
//             }]
//         },
//         {
//             title: 'Черновики',
//             sell: [],
//             pay: [{
//                 id: '7',
//                 img: 'https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png',
//                 cost: '56000',
//                 name: 'Диван KOLLIN BLUE',
//                 days: '29'
//             }]
//         },
//         {
//             title: 'Архив',
//             sell: [],
//             pay: []
//         },
//     ]

//     function renderCategories() {
//         categorySection.innerHTML = "";

//         let firstNonEmptyCategory = null;

//         myAd.forEach(item => {
//             if (item.sell.length > 0 || item.pay.length > 0) {
//                 const categoryDiv = document.createElement('div');
//                 categoryDiv.classList.add('card--content');
//                 categoryDiv.innerHTML = `<p class="cardTitle">${item.title}</p><p class="cardSum">${item.sell.length + item.pay.length}</p>`;
//                 categoryDiv.addEventListener('click', () => renderCategory(item.title));
//                 categorySection.appendChild(categoryDiv);

//                 if (!firstNonEmptyCategory) {
//                     firstNonEmptyCategory = item.title;
//                 }
//             }
//         });

//         if (firstNonEmptyCategory) {
//             renderCategory(firstNonEmptyCategory);
//         }
//     }

//     function renderCategory(category) {
//         advContent.innerHTML = "";

//         const categoryData = myAd.find(item => item.title === category);

//         if (categoryData) {
//             if (categoryData.sell.length > 0 || categoryData.pay.length > 0) {
//                 const fragment = document.createDocumentFragment();

//                 if (categoryData.sell.length > 0) {
//                     const sellDiv = document.createElement('div');
//                     sellDiv.classList.add('advCatContentChild');
//                     sellDiv.innerHTML = `<h5>Продаю</h5>`;
//                     categoryData.sell.forEach(item => {
//                         const contentChildDiv = document.createElement('div');
//                         contentChildDiv.classList.add('contentChild');
//                         contentChildDiv.dataset.index = item.id;
//                         contentChildDiv.innerHTML = `
//                             <div class="contentChildImg">
//                                 <img src="${item.img}" alt="">
//                             </div>
//                             <div class="contentChildInfo">
//                                 <p class="contentChildPrice">${item.cost}</p>
//                                 <p class="contentChildName">${item.name}</p>
//                                 <p class="contentChildDays">${item.days} дней до удаления</p>
//                             </div>
//                             <div>
//                                 <img src="./img/mainPage/user/option.svg" alt="">
//                             </div>`;
//                         sellDiv.appendChild(contentChildDiv);
//                     });
//                     fragment.appendChild(sellDiv);
//                 }

//                 if (categoryData.pay.length > 0) {
//                     const payDiv = document.createElement('div');
//                     payDiv.classList.add('advCatContentChild');
//                     payDiv.innerHTML = `<h5>Покупаю</h5>`;
//                     categoryData.pay.forEach(item => {
//                         const contentChildDiv = document.createElement('div');
//                         contentChildDiv.classList.add('contentChild');
//                         contentChildDiv.dataset.index = item.id;
//                         contentChildDiv.innerHTML = `
//                             <div class="contentChildImg">
//                                 <img src="${item.img}" alt="">
//                             </div>
//                             <div class="contentChildInfo">
//                                 <p class="contentChildPrice">${item.cost}</p>
//                                 <p class="contentChildName">${item.name}</p>
//                                 <p class="contentChildDays">${item.days} дней до удаления</p>
//                             </div>
//                             <div>
//                                 <img src="./img/mainPage/user/option.svg" alt="">
//                             </div>`;
//                         payDiv.appendChild(contentChildDiv);
//                     });
//                     fragment.appendChild(payDiv);
//                 }

//                 advContent.appendChild(fragment);
//             }
//         }
//     }

//     renderCategories(); // Рендерим категории при загрузке страницы
// });




document.getElementById('myAd').onclick = () => {
    document.querySelector('.mainBoxInThisContainer').classList.add('none')
    document.querySelector('.advertisement').classList.remove('none')
}



//МОИ ОБЪЯВЛЕНИЯ

//////////////////////////////////////////////////////////////////////////////////////////////////////

//ИНПУТ С КАТЕГОРИЯМИ(всплывающий список)
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
document.querySelectorAll("#multiselect .inputCheck p").forEach(elem => {
    elem.addEventListener("click", event => {
        const dataIndex = elem.getAttribute("data-index");
        const suboptions = document.querySelector(`.suboptions[data-index="${dataIndex}"]`);
        if (suboptions) {
            suboptions.classList.toggle("none");
        }
    });
});
document.querySelectorAll("#multiselect .liContent").forEach(elem => {
    elem.addEventListener("click", event => {
        const text = elem.querySelector("h6").textContent;
        const img = elem.querySelector("img");
        if (searchArray.includes(`"${text}"`)) {
            searchArray = searchArray.filter(item => item !== (`"${text}"`));
            img.classList.add("none");
        } else if (searchArray[0] === text) {
            img.classList.add("none");
        } else if (searchArray.length < 3) {
            img.classList.remove("none");
            if (searchArray[0] !== text) {
                searchArray.push((`"${text}"`));
            }
        }
        const inputField = document.getElementById("multiselect-input");

        if (searchArray.length > 0) {
            inputField.value = new Intl.ListFormat("ru").format(
                searchArray
            )
        } else {
            inputField.value = "";
        }
        console.log(searchArray);
        const searchContent = searchArray.map(elem => {
            return elem.replace(/"/g, '')
        })
        renderMainList(searchContent, filterArray)
    });
});
document.addEventListener("click", event => {
    const multiselect = document.getElementById("multiselect");
    const multiselectOptions = document.querySelector("#multiselect .multiselect-options");
    if (event.target !== multiselect && !multiselect.contains(event.target)) {
        multiselectOptions.classList.add("none");
    }
});
document.getElementById("multiselect-input").addEventListener("click", event => {
    document.querySelector("#multiselect .multiselect-options").classList.toggle("none");
    document.querySelectorAll("#multiselect .suboptions").forEach(elem => {
        elem.classList.add("none");
    });
});
document.querySelector('.cleanAll').onclick = () => {
    document.getElementById('filterBoxChooseTown').value = '';
    document.getElementById('filterBoxChooseState-input').value = '';
    document.querySelectorAll('.checkShowRoom').forEach(elem => {
        elem.querySelector('input[type="checkbox"]').checked = false; // Снятие галочки с чекбокса
    });
    console.log('clean')
    filterArray = {
        city: '',
        default: true,
        showrooms: 0,
        favorite: 0,
        productSample: 0
    }
    renderMainList(searchArray, filterArray)
};
//ИНПУТ С КАТЕГОРИЯМИ(всплывающий список)

//////////////////////////////////////////////////////////////////////////////////////////////////////

//ФИЛЬТР(всплывающий список)
let searchTownArray = [];

document.querySelector('.filterBtn').addEventListener('click', () => {
    document.querySelector('.filterBoxBody').classList.toggle('none');
});

document.addEventListener('click', function (event) {
    const filterBox = document.querySelector('.filterBox');
    const filterBoxBody = document.querySelector('.filterBoxBody');
    const filterBoxChooseTown = document.getElementById('filterBoxChooseTown');
    const filterBoxChooseState = document.querySelector('.filterBoxChooseState');
    if (event.target !== filterBox && !filterBox.contains(event.target)) {
        filterBoxBody.classList.add('none');
        filterBoxChooseState.classList.add('none');
    }
});
document.getElementById('filterBoxChooseState').addEventListener('click', () => {
    document.querySelector('.filterBoxChooseState').classList.add('none');
})
document.getElementById('filterBoxChooseState-input').addEventListener('click', () => {
    document.querySelector('.filterBoxChooseState').classList.toggle('none')
})
document.querySelectorAll('.liState').forEach(elem => {
    elem.addEventListener('click', function (event) {
        const inputField = document.getElementById('filterBoxChooseState-input');
        document.querySelectorAll('.liState img').forEach(img => {
            img.classList.add('none');
        });
        this.querySelector('img').classList.remove('none');
        inputField.value = this.querySelector('p').textContent;
    });
});

document.querySelector('.filterBoxChooseState').addEventListener('click', (e) => {
    let i = e.target.dataset.index
    if (i !== undefined) {
        // Получаем значение атрибута data-index элемента
        i === '0' ? filterArray.default = false : filterArray.default = true
        renderMainList(searchArray, filterArray)
    }
})
document.querySelectorAll('.checkShowRoom input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            filterArray[this.id] = 1
            console.log(filterArray)
            renderMainList(searchArray, filterArray)
        } else {
            filterArray[this.id] = 0
            console.log(filterArray)
            renderMainList(searchArray, filterArray)
        }
    });
});

//ФИЛЬТР(всплывающий список)

//////////////////////////////////////////////////////////////////////////////////////////////////////

// ПЕРЕКЛЮЧАЛКА В МЕНЮ

document.querySelectorAll('.providerCategory').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.providerPlace').classList.remove('none')
        document.querySelector('.marketPlace').classList.add('none')
        document.querySelector('.categoryWithoutFlex').classList.remove('none')
        document.querySelector('.mainBoxInThisContainer').classList.remove('none')
        document.querySelector('.advertisement').classList.add('none')
        document.querySelector('.productFromTheMarket').classList.add('none')
        document.querySelector('.headerBoxH2andSpan h2').textContent = 'Поставщики'
        if (window.innerWidth < 640) {
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
        }
    }
})
document.querySelectorAll('.marketCategory').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.providerPlace').classList.add('none')
        document.querySelector('.marketPlace').classList.remove('none')
        document.querySelector('.categoryWithoutFlex').classList.remove('none')
        document.querySelector('.mainBoxInThisContainer').classList.remove('none')
        document.querySelector('.advertisement').classList.add('none')

        document.querySelector('.productFromTheMarket').classList.add('none')
        document.querySelector('.headerBoxH2andSpan h2').textContent = 'Барахолка'
        if (window.innerWidth < 640) {
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
        }
    }
})
document.querySelectorAll('.getOut').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.providerPlace').classList.add('none')
        document.querySelector('.marketPlace').classList.remove('none')
        document.querySelector('.categoryWithoutFlex').classList.remove('none')
        document.querySelector('.productFromTheMarket').classList.add('none')
        document.querySelector('.headerBoxH2andSpan h2').textContent = 'Барахолка'
    }
})

// ПЕРЕКЛЮЧАЛКА В МЕНЮ

//////////////////////////////////////////////////////////////////////////////////////////////////////

// ПРОВАЙДЕР - основной бокс
// Пример данных из бэкенда

const backendData = [
    {
        name: "ООО “СЕВЕР ТОРГПРО”",
        category: "Краски / мебель / отделочные материалы",
        discount: "5 - 15%",
        discountConditions: "При покупке продукции на сумму от 5000 рублей и выше, дизайнеры могут воспользоваться следующими скидками: заказы на сумму от 5000 до 9999 рублей. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        showrooms: "Москва, Санкт-Петербург, Омск, Псков"
    },
    {
        name: "ООО “СЕВЕР ТОРГПРО”",
        category: "Краски / мебель / отделочные материалы",
        discount: "5 - 15%",
        discountConditions: "При покупке продукции на сумму от 5000 рублей и выше, дизайнеры могут воспользоваться следующими скидками: заказы на сумму от 5000 до 9999 рублей. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        showrooms: "Москва, Санкт-Петербург, Омск, Псков"
    },
    {
        name: "ООО “СЕВЕР ТОРГПРО”",
        category: "Краски / мебель / отделочные материалы",
        discount: "5 - 15%",
        discountConditions: "При покупке продукции на сумму от 5000 рублей и выше, дизайнеры могут воспользоваться следующими скидками: заказы на сумму от 5000 до 9999 рублей. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        showrooms: "Москва, Санкт-Петербург, Омск, Псков"
    }
    // ... другие объекты
];

const myCategory = ['Первая категория', 'Длинная категория neneneneneneennenenenenen', 'Еще одна категория']

async function likeClickHandler(e) {
    console.log(e.dataset.index);
    console.log(typeof e.dataset.state);
    let response = await sendLikeElemChange(e.dataset.state === 'true' ? 'removeFavorite' : 'addFavorite', e.dataset.index)
    renderMainList(searchArray, filterArray)
}
function categoryClickHandler(e) {
    console.log(e.textContent.replace("/", ""))
    const text = e.textContent.replace("/", "")
    document.querySelectorAll(`#multiselect-options .liContent`).forEach(elem => {
        if (text === elem.textContent.replace("/", "")) {
            console.log(elem);
            elem.querySelector('img').classList.toggle('none')
        }
    });

    if (!searchArray.includes((`"${text}"`))) {
        searchArray = [(`"${text}"`)]
        document.getElementById("multiselect-input").value = searchArray[0]
    }else{
        searchArray = []
        document.getElementById("multiselect-input").value = ''
    }
    const searchText = searchArray[0] && searchArray[0].length > 0 ? searchArray[0].replace(/"/g, '') : ''
    renderMainList([searchText], filterArray)
}
const container = document.querySelector('.infoBodyForProviderCategory');
renderMainList(searchArray, filterArray)
async function renderMainList(search, filter) {
    console.log(search)
    let response = await sendFilterParams(search, filter)
    console.log(response.posts)
    document.querySelector('.providerSumHead').textContent = `(${response.posts.length})`
    // console.log(backendData)
    container.innerHTML = ''
    // console.log(response)
    response.posts.forEach(data => {
        const providerCategoryBox = document.createElement('div');
        providerCategoryBox.classList.add('providerCategoryBox');
        providerCategoryBox.classList.add('box');
        providerCategoryBox.innerHTML = `
            <div class="providerCategoryBoxFirst">
                <div class="providerFirstImg">
                    <img src="./img/mainPage/user/2.jpg" alt="">
                </div>
                <div class="providerFirstComission">
                    <h3>${data.showroomData.minDiscount} - ${data.showroomData.maxDiscount} %</h3>
                </div>
                <div class="providerFirstComission second">
                    <h3>${data.showroomData.minDiscount} - ${data.showroomData.maxDiscount} %</h3>
                </div>
                <div class="btnLikeProviderBox" data-state=${data.is_favorite} data-index=${data.post_id} onclick={likeClickHandler(this)}>
                    <img src="${data.is_favorite ? './img/mainPage/heart.svg' : './img/mainPage/heart (active).svg'}" class="passiveLike" alt="">
                </div>
                <div class="providerFirstHeader box">
                    <h3>${data.organizationInfo.value}</h3>
                    <p class="allCategoryForProdBox">${data.productCategory ? data.productCategory.join(' / ') : myCategory.join(' / ')}</p>  
                    <div class="buildPrivideBoxCategory box">
                        <p onclick={categoryClickHandler(this)}>${data.productCategory && data.productCategory[0] ? data.productCategory[0] : myCategory[0]}/</p>  
                        <p onclick={categoryClickHandler(this)}>${data.productCategory && data.productCategory[1] ? data.productCategory[1] : myCategory[1]}/</p>  
                        <p onclick={categoryClickHandler(this)}>${data.productCategory && data.productCategory[2] ? data.productCategory[2] : myCategory[2]}</p>   
                    </div>
                </div>
            </div>
            <div class="providerCategoryBoxSecond none">
            </div>
        `;
        // providerCategoryBox.innerHTML = `
        //     <div class="providerCategoryBoxHeader" >
        //         <div class="providerCategoryBoxHeaderLeft">
        //             <h3>${data.organizationInfo.value}</h3>
        //             <p>${data.productCategory}</p>
        //         </div>
        //         <div class="providerCategoryBoxHeaderRight">
        //             <h3>${data.showroomData.minDiscount} - ${data.showroomData.maxDiscount} %</h3>
        //             <p>Комиссия</p>
        //         </div>
        //     </div>
        //     <div class="providerCategoryBoxBody">
        //         <div class="providerCategoryBoxBodyUp">
        //             <div class="smallHeader">
        //                 <img src="./img/mainPage/sale.svg" alt="">
        //                 <h4>Условия скидок</h4>
        //             </div>
        //             <p class="infoAboutProviderProduct">${data.showroomData.infoAboutMe}</p>
        //             <div class="accordeonchikForText readMore">
        //                 <p>Подробнее</p>
        //                 <img src="./img/mainPage/down.svg" class="readMore" alt="">
        //                 <img src="./img/mainPage/up.svg" class="readLess none" alt="">
        //             </div>
        //         </div>
        //         <div class="providerCategoryBoxBodyDown">
        //             <div class="smallHeader">
        //                 <img src="./img/mainPage/geo.svg" alt="">
        //                 <h4>Шоурумы</h4>
        //             </div>
        //             <p>${data.userCity}</p>
        //         </div>
        //     </div>
        //     <div class="providerCategoryBoxFooter">
        //         <div class="btnCallForProviderBoxFooter prANDsub">
        //             <p>Связаться</p>
        //         </div>
        //         <div class="btnCatalogForProviderBoxFooter prANDsub">
        //             <p>Каталог товаров</p>
        //             <img src="./img/mainPage/another_site.svg" alt="">
        //         </div>
        //         <div class="btnLikeForProviderBoxFooter" data-state=${data.is_favorite} data-index=${data.post_id} onclick={likeClickHandler(this)}>
        //             <img src="${data.is_favorite ? './img/mainPage/heart.svg' : './img/mainPage/heart (active).svg'}" class="passiveLike" alt="">
        //         </div>
        //     </div>
        // `;

        // Добавляем элемент в контейнер
        container.appendChild(providerCategoryBox);
    });

}

renderMainList(searchArray, filterArray)

const infoContainers = document.querySelectorAll('.providerCategoryBox');

infoContainers.forEach(container => {
    const textElement = container.querySelector('.infoAboutProviderProduct');
    const buttonText = container.querySelector('.accordeonchikForText');

    const maxLength = 145;
    const ellipsis = '...';
    let originalText = textElement.textContent;
    let truncatedText = originalText.substring(0, maxLength) + ellipsis;
    let isExpanded = false;

    textElement.textContent = truncatedText;

    buttonText.addEventListener('click', function () {
        isExpanded = !isExpanded;

        if (isExpanded) {
            textElement.textContent = originalText;
            buttonText.querySelector('p').textContent = 'Свернуть';
            buttonText.querySelector('.readMore').classList.add('none');
            buttonText.querySelector('.readLess').classList.remove('none');
        } else {
            textElement.textContent = truncatedText;
            buttonText.querySelector('p').textContent = 'Подробнее';
            buttonText.querySelector('.readMore').classList.remove('none');
            buttonText.querySelector('.readLess').classList.add('none');
        }
    });

    const likeButton = container.querySelector('.btnLikeForProviderBoxFooter');
    likeButton.addEventListener('click', () => {
        container.querySelector('.passiveLike').classList.toggle('none');
        container.querySelector('.activeLike').classList.toggle('none');
    });
    const likeButtonNew = container.querySelector('.btnLikeProviderBox');
    likeButtonNew.addEventListener('click', () => {
        container.querySelector('.passiveLike').classList.toggle('none');
        container.querySelector('.activeLike').classList.toggle('none');
    });
});
// ПРОВАЙДЕР - основной бокс

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Барахолка - основной бокс

document.addEventListener('DOMContentLoaded', function () {
    const marketData = [
        {
            name: "Бензопила huter bs-40",
            img: "./img/mainPage/marketThing.png",
            cost: "Краски / мебель / отделочные материалы",
            city: "г. Москва",
        },
        {
            name: "Бензопила huter bs-40",
            img: "./img/mainPage/marketThing.png",
            cost: "Краски / мебель / отделочные материалы",
            city: "г. Санкт-Петербург",
        },
        {
            name: "Бензопила huter bs-40",
            img: "./img/mainPage/marketThing.png",
            cost: "Краски / мебель / отделочные материалы",
            city: "г. Псков",
        },
        {
            name: "Бензопила huter bs-40",
            img: "./img/mainPage/marketThing.png",
            cost: "Краски / мебель / отделочные материалы",
            city: "г. Москва",
        },
        {
            name: "Бензопила huter bs-40",
            img: "./img/mainPage/marketThing.png",
            cost: "Краски / мебель / отделочные материалы",
            city: "г. Санкт-Петербург",
        },
        {
            name: "Бензопила huter bs-40",
            img: "./img/mainPage/marketThing.png",
            cost: "Краски / мебель / отделочные материалы",
            city: "г. Псков",
        },
        {
            name: "Бензопила huter bs-40",
            img: "./img/mainPage/marketThing.png",
            cost: "Краски / мебель / отделочные материалы",
            city: "г. Москва",
        },
        {
            name: "Бензопила huter bs-40",
            img: "./img/mainPage/marketThing.png",
            cost: "Краски / мебель / отделочные материалы",
            city: "г. Санкт-Петербург",
        },
        {
            name: "Бензопила huter bs-40",
            img: "./img/mainPage/marketThing.png",
            cost: "Краски / мебель / отделочные материалы",
            city: "г. Псков",
        },
        {
            name: "Бензопила huter bs-40",
            img: "./img/mainPage/marketThing.png",
            cost: "Краски / мебель / отделочные материалы",
            city: "г. Москва",
        },
        {
            name: "Бензопила huter bs-40",
            img: "./img/mainPage/marketThing.png",
            cost: "Краски / мебель / отделочные материалы",
            city: "г. Санкт-Петербург",
        },
        {
            name: "Бензопила huter bs-40",
            img: "./img/mainPage/marketThing.png",
            cost: "Краски / мебель / отделочные материалы",
            city: "г. Псков",
        },
    ];

    const market = document.querySelector('.infoBodyForMarketCategory');

    marketData.forEach(data => {
        const marketCategoryBox = document.createElement('div');
        marketCategoryBox.classList.add('marketCategoryBox');
        marketCategoryBox.classList.add('box');

        marketCategoryBox.innerHTML = `
            <div class="marketCategoryBox">
                <div class="productImg">
                    <img src="${data.img}" alt="">
                </div>
                <div class="marketThingName">
                    <p class="marketName">${data.name}</p>
                    <div class="btnLikeForMarket">
                        <img src="./img/mainPage/heart (market-gray).svg" class="marketImgGray">
                        <img src="./img/mainPage/heart (market-red).svg" class="marketimgRed none">
                    </div>
                </div>
                <div class="marketThingCost">
                    <p>${data.cost}</p>
                </div>
                <div class="marketThingCity">
                    <p>${data.city}</p>
                </div>
            </div> 
        `;
        const marketName = document.querySelectorAll('.marketName')
        marketName.forEach(elem => {
            elem.addEventListener('click', () => {
                document.querySelector('.categoryWithoutFlex').classList.add('none')
                document.querySelector('.productFromTheMarket').classList.remove('none')
            })
        })

        market.appendChild(marketCategoryBox);
    });

    market.addEventListener('click', function (event) {
        const likeButton = event.target.closest('.btnLikeForMarket');
        if (likeButton) {
            const parent = likeButton.closest('.marketCategoryBox');
            if (parent) {
                parent.querySelector('.marketImgGray').classList.toggle('none');
                parent.querySelector('.marketimgRed').classList.toggle('none');
            }
        }
    });

});


// Барахолка - основной бокс
//СЛАЙДЕР
document.addEventListener('DOMContentLoaded', function () {
    var main = new Splide('#main-carousel', {
        type: 'loop',
        perPage: 1,
        gap: 60,
        padding: { left: '8rem', right: '10rem' },
        breakpoints: {
            1200: {
                gap: -40,
                padding: { left: 'calc(25vw - 180px)', right: 'calc(21vw - 190px)' },
            },
            960: {
                gap: "calc(12.5vw - 80px)",
                padding: { left: 'calc(31.3vw - 200px)', right: 'calc(31.3vw - 200px)' },
            },
            640: {
                gap: "calc(3vw - 5px)",
                padding: { left: '10vw', right: 'calc(15.6vw - 20px)' },
            },
        },
        arrows: false, // Скрыть стрелки
        pagination: false, // Скрыть пагинацию
    });


    var thumbnails = new Splide('#thumbnail-carousel', {
        fixedWidth: 110,
        fixedHeight: 65,
        gap: 10,
        rewind: true,
        pagination: false,
        isNavigation: true,
        breakpoints: {
            600: {
                fixedWidth: 60,
                fixedHeight: 44,
            },
        },
        arrows: false, // Скрыть стрелки
        pagination: false, // Скрыть пагинацию
    });


    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
});
//СЛАЙДЕР


// выбор города при регистрации
// Заменить на свой API-ключ
var token = "604ceb4b3fb376968d5303185e3a88cc503e5f08";
var defaultFormatResult = $.Suggestions.prototype.formatResult;

function formatResult(value, currentValue, suggestion, options) {
    var newValue = suggestion.data.city;
    suggestion.value = newValue;
    return defaultFormatResult.call(this, newValue, currentValue, suggestion, options);
}

function formatSelected(suggestion) {
    filterArray.city = suggestion.data.city
    renderMainList(searchArray, filterArray)

    return suggestion.data.city;
}

$(".address").suggestions({
    token: token,
    type: "ADDRESS",
    hint: false,
    bounds: "city",
    constraints: {
        locations: { city_type_full: "город" }
    },
    formatResult: formatResult,
    formatSelected: formatSelected,
    // onSelect: function (suggestion) {
    // }

});
// выбор города при регистрации
async function sendFilterParams(search, filter) {
    let searchUrl = ''
    for (let i = 0; i < search.length; i++) {
        searchUrl = searchUrl + `&productCategory[${i}]=` + search[i]
    }
    const url = `https://di.i-rs.ru/O386prm/?token=${savedUsertoken}${searchUrl}&showrooms=${filter.showrooms}&favorite=${filter.favorite}&productSample=${filter.productSample}&cyty=${filter.city}`;
    let response = await fetch(url, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return await response.json();
}
async function sendLikeElemChange(action, postId) {
    console.log(action)
    const url = `https://di.i-rs.ru/O386prm/?token=${savedUsertoken}&action=${action}&post_id=${postId}`;
    let response = await fetch(url, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return await response.json();
}

