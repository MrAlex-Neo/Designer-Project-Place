import { userInfo, userData } from "./mainScrypt";

let user; // Объявляем переменную user
console.log(userData)
console.log(userInfo)

document.addEventListener('DOMContentLoaded', () => {
    user = userInfo(userData);

    console.log(user); // Вы увидите данные userData

    // Далее вы можете использовать user и добавить логику
});
