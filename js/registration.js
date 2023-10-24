const userData = {};

//Логика стартового окна регистрации с выбором роли в приложении
const designerBox = document.getElementById('designerBox');
const providerBox = document.getElementById('providerBox');
const submitButton = document.querySelector('.Btn');
const createAccountBtn = document.getElementById('createAccountBtn');

function handleCategoryClick(selectedBox, deselectedBox) {
    selectedBox.querySelector('.circle').classList.add('clicked');
    deselectedBox.querySelector('.circle').classList.remove('clicked');
    selectedBox.querySelector('.joinSmallBox').classList.add('activeBorder');
    deselectedBox.querySelector('.joinSmallBox').classList.remove('activeBorder');
    submitButton.classList.add('activeBtn');
    createAccountBtn.removeAttribute('disabled');
}

designerBox.addEventListener('click', () => {
    handleCategoryClick(designerBox, providerBox);
});

providerBox.addEventListener('click', () => {
    handleCategoryClick(providerBox, designerBox);
});

function registrationRolesBox() {
    userData.designer = designerBox.querySelector('.circle').classList.contains('clicked');
    userData.provider = providerBox.querySelector('.circle').classList.contains('clicked');
    document.querySelector('.registrationRoles').classList.add('none')
    document.querySelector('.registrationMain').classList.remove('none')
    LogData()
}

createAccountBtn.onclick = registrationRolesBox;



//Логика стартового окна регистрации с выбором роли в приложении

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Логика первой части регистрации с вводом телефонного номера
const phoneInput = document.getElementById('phone');
const label = document.querySelector('.input-container label');

phoneInput.addEventListener('focus', () => {
    phoneInput.value = '+7';
    label.style.top = '-25px';
    label.style.left = '-2px';
    label.style.fontSize = '14px';
});

phoneInput.addEventListener('blur', () => {
    if (!phoneInput.value) {
        phoneInput.value = '';
        label.style.top = '20%';
        label.style.left = '2%';
        label.style.fontSize = '16px';
    }
});

document.addEventListener('click', (event) => {
    if (event.target !== phoneInput) {
        phoneInput.value = '';
        label.style.top = '20%';
        label.style.left = '2%';
        label.style.fontSize = '16px';
    }
});

const phonePattern = /^\+7\d{10}$/

phoneInput.addEventListener('input', (event) => {
    const value = event.target.value;
    if (phonePattern.test(value)) {
        document.getElementById('createPhoneBtn').removeAttribute('disabled');
    } else {
        document.getElementById('createPhoneBtn').setAttribute('disabled', 'disabled');
    }
});

document.getElementById('createPhoneBtn').onclick = () => {
    userData.phone = phoneInput.value
    document.getElementById('regBoxOne').classList.add('none')
    document.getElementById('regBoxTwo').classList.remove('none')
    LogData()
}

function LogData() {
    console.log(userData)
}

//Логика первой части регистрации с вводом телефонного номера

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Логика второй части регистрации с вводом данных о пользователе
document.querySelector('.private').onclick = () => {
    document.querySelector('.private').classList.add('chooseInputActive')
    document.querySelector('.company').classList.remove('chooseInputActive')
    userData.format = 'private'
    document.querySelector('.organizForm').classList.remove('none')
    document.querySelector('.privateBranch').classList.remove('none')
    LogData()
};

document.querySelector('.company').onclick = () => {
    document.querySelector('.private').classList.remove('chooseInputActive')
    document.querySelector('.company').classList.add('chooseInputActive')
    userData.format = 'company'
    document.querySelector('.organizForm').classList.remove('none')
    document.querySelector('.privateBranch').classList.add('none')
    LogData()
};
document.querySelector('.self').onclick = () => {
    document.querySelector('.self').classList.add('chooseInputActive')
    document.querySelector('.ip').classList.remove('chooseInputActive')
    document.querySelector('.ooo').classList.remove('chooseInputActive')
    userData.privateform = 'self'
    LogData()
};
document.querySelector('.ip').onclick = () => {
    document.querySelector('.self').classList.remove('chooseInputActive')
    document.querySelector('.ip').classList.add('chooseInputActive')
    document.querySelector('.ooo').classList.remove('chooseInputActive')
    userData.privateform = 'ip'
    LogData()
};
document.querySelector('.ooo').onclick = () => {
    document.querySelector('.self').classList.remove('chooseInputActive')
    document.querySelector('.ooo').classList.add('chooseInputActive')
    document.querySelector('.ip').classList.remove('chooseInputActive')
    userData.privateform = 'ooo'
    LogData()
};

document.getElementById('userNameCompany').addEventListener('input', (event) => {
    const value = event.target.value;
    if (value != '') {
        document.getElementById('finishTwoPartPrivateRegistr').removeAttribute('disabled');
    } else {
        document.getElementById('finishTwoPartPrivateRegistr').setAttribute('disabled', 'disabled');
    }
});
document.getElementById('finishTwoPartPrivateRegistr').onclick = () => {
    userData.privateCompanyName = document.getElementById('userNameCompany').value
    document.getElementById('regBoxTwo').classList.add('none')
    document.getElementById('regBoxThree').classList.remove('none')
    LogData()
    render()
}

// добавление организации в userdata при регистрации
var token = "604ceb4b3fb376968d5303185e3a88cc503e5f08";
function join(arr /*, separator */) {
    var separator = arguments.length > 1 ? arguments[1] : ", ";
    return arr.filter(function(n){return n}).join(separator);
}
function showSuggestion(suggestion) {
    userData.suggestion = suggestion
    LogData()
}
$("#userNameCompany").suggestions({
    token: token,
    type: "PARTY",
    count: 5,
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: showSuggestion
});
// добавление организации в userdata при регистрации

//Логика второй части регистрации с вводом данных о пользователе

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Логика третьей части регистрации с вводом данных о пользователе
const typeProjectsArray = ['Простой', 'Кратко-срочный', 'Безде-фектный', 'Монопроект', 'Ресурсно сложный', 'Долгосрочный', 'Стандартный', 'Мультипроект',]
function render() {
    const typeArray = document.getElementById('typeProjects')
    typeArray.innerHTML = ''
    for(let i = 0; i < typeProjectsArray.length; i++) {
        typeArray.insertAdjacentHTML("beforeend", TheyAreTypeProgectsFormToList (typeProjectsArray[i], i))
        console.log(typeProjectsArray[i])
    }
}

function TheyAreTypeProgectsFormToList (text, index) {
    return `
    <option selected data-index="${index}">${text}</option>`
}
document.getElementById('userName').addEventListener('input', (event) => {
    const value = event.target.value;
    if (value != '') {
        document.getElementById('finishThreePartPrivateRegistr').removeAttribute('disabled');
    } else {
        document.getElementById('finishThreePartPrivateRegistr').setAttribute('disabled', 'disabled');
    }
});

document.getElementById('finishThreePartPrivateRegistr').onclick = () => {
    userData.userName = document.getElementById('userName').value
    userData.userCity = document.getElementById('userCity').value
    userData.typeProjects = document.getElementById('typeProjects').value
    document.getElementById('regBoxThree').classList.add('none')
    document.getElementById('regBoxFour').classList.remove('none')
    LogData()
}


//Логика третьей части регистрации с вводом данных о пользователе











// API
const fileInput = document.getElementById('fileInput');
const userAva = document.getElementById('userAva');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        // Отправка файла на сервер
        const formData = new FormData();
        formData.append('userAva', file);

        // Здесь вы можете использовать метод fetch или другие методы для отправки файла на сервер и получения ссылки на него
        // Затем обновите ваш объект данных userData с полученной ссылкой

        // Пример с fetch:
        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Обновление объекта данных
                userData.userAva = data.imageUrl;
                userAva.src = data.imageUrl; // Отображение выбранного изображения
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке изображения:', error);
        });
    }
});

// Добавьте обработчик клика на .avaDownload, чтобы открыть диалог выбора файла
document.querySelector('.avaDownload').addEventListener('click', () => {
    fileInput.click();
});


