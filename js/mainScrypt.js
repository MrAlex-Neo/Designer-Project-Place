const userData = {};

//Логика первого окна регистрации с выбором роли в приложении
const designerBox = document.getElementById('designerBox');
const providerBox = document.getElementById('providerBox');
const submitButton = document.querySelector('.Btn');
const createAccountBtn = document.getElementById('createAccountBtn');
// const joinSmallBox = document.querySelectorAll('.joinSmallBox');

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

const form = document.querySelector('.joinBox');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    userData.designer = designerBox.querySelector('.circle').classList.contains('clicked');
    userData.provider = providerBox.querySelector('.circle').classList.contains('clicked');
    userInfo(userData)
});
function userInfo(userData) {
    return userData;
}

export { userInfo, userData };
//Логика первого окна регистрации с выбором роли в приложении

