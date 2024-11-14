console.log("//----------------ПЕРЕМЕННЫЕ----------------//");

let firstName = 'Sasha'; //Изменять переменную name можно
console.log(firstName);
firstName = 16;
console.log(firstName);

const old = 16; //Изменять переменную age нельзя, т.к. она объявлена как константа
// age = 14; вызовет ошибку во время отработки в браузере (т.е. runtime error) TypeScript отслеживает изменения констант на стадии написания кода.

console.log("//----------------ОПЕРАТОРЫ----------------//");
console.log("/*Базовые арифметические операторы*/");
/*Базовые арифметические операторы*/
const width = 10;
const height = 5;
const space = width * height;
const newWidht = width - 4;
const newWidth2 = width + 4;
const division = newWidht / newWidth2;
const volume = 2 ** 3; // эквивалент 2 в степени 3 (2 * 2 * 2)
console.log(volume);

console.log("//----------------СТРОКИ----------------//");
const city = 'Москва';
const street = 'Новослободская';
const house = 5;
const adress = city + ', ' + street + ' ' + house; //конкатенация (объединение) строк
console.log(adress);

console.log("//----------------ОПЕРАТОРЫ ПРИСВАИВАНИЯ----------------//");
let age = 18 + 5;
age += 2; // эквивалент age = age + 2
age -= 3; // эквивалент age = age - 3
age *= 2; // эквивалент age = age * 2
age /= 2; // эквивалент age = age / 2

age++; // эквивалент age = age + 1
age--; // эквивалент age = age - 1

console.log(age);

console.log("//----------------ОПЕРАТОРЫ СРАВНЕНИЯ----------------//");
age = 20;
const vasia = 20;
console.log(age > vasia);
console.log(age < vasia);
console.log(age == vasia);
console.log(age >= vasia);
console.log(age != vasia);

console.log("//----------------ТИПЫ ДАННЫХ----------------//");
console.log("/*Примитивные типы данных*/");
const ammountOfBricks = 43;
let surname = 'Иванов';
const isAdmin = true;

const isMarried = undefined; //значение переменной не задано
const isHere = null; //это явное пустое значение
let data;

const admin = Symbol('Admin'); // TODO: ПОЧИТАТЬ ПРО ЭТОТ ТИП ДАННЫХ
const admin1 = Symbol('Anmin');
const isEqual = admin == admin1; //Тип данных Symbol всегда уникален, даже при совпадении их описаний. Могут использоваться как id в объектах и если сторонный код имеет символ с таким же описанием, то конфликта не  будет. Если делать id через строки, то при совпадении значения id из стороннего кода будет конфликт.
console.log(isEqual); 
const big = BigInt(427308496752098323); // TODO: ПОЧИТАТЬ ПРО ЭТОТ ТИП ДАННЫХ
console.log(big);


console.log("/*Тип данных - Объект*/");
let human = {
    person: {
        firstName: 'Николай',
        lastName: 'Мельников',
        middleName: 'Александрович',
    },
    isMarried: undefined,
    isEmployed: true,
}

const fullName = human.person.firstName + ' ' + human.person.middleName + ' ' + human.person.lastName;
console.log('ФИО: ' + fullName + ' \nТрудоустроен: ' + human.isEmployed + ' \nВ браке : ' + human.isMarried);

let a = 5;
let b = 5.6;
console.log(typeof a);
console.log(typeof b);
a = 'word';
console.log(typeof a);

const isFake = 10 > 50;
console.log(typeof isFake);

let c;
console.log(typeof c); //При объявлении переменной без присвоения ей значения, ее тип будет undefined

let d = null;
console.log(d);

/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;


console.log('Успею ли я выполнить работу? ' + (availableHours > projectHours));

let cost = payRateUSD * projectHours
console.log('Стоимость работы составит: ' + cost + '$');

console.log("//----------------ШАБЛОННЫЕ СТРОКИ----------------//");

const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';

const template = author + ' заказал ' + projectName + ' стоимостью ' + price + '$';
console.log(template);

const template2 = `${author} заказал ${projectName} стоимостью ${price}$`
console.log(template2);

const template3 = author + ' заказал ' + projectName + ' \nстоимостью ' + price + '$';
console.log(template3);

const template4 = `Проект
Цена ${price}$`; //При использовании обратных ковычек для переноса строки можно использовать фактический переном строки вместо \n
console.log(template4);

console.log("//----------------ПРЕОБРАЗОВАНИЕ ТИПОВ----------------//");
const ages = '18';
console.log(Number(ages) + 5); //Конвертация в число
console.log(ages - 5);
const userName = 'Вася';
console.log(Number(userName) + 5);
console.log(typeof NaN);

console.log(String(4) + 8); // Конвертация в строку
console.log(Boolean(1)); //При конвертации в boolean все числа (+ и -) будут давать true, а 0 - false
console.log(Boolean('hello')); // При конвертации в boolean строки - любая строка true, пустая строка - false
console.log(Boolean('333') + 10); //При любом значении строки, кроме пустой, результат будет 11. Т.к. любая строка, кроме пустой, это true, а true это 1 => 1 + 10 = 11. Если строка пустая, то результатом Boolean('') будет false, а false - это 0 => 0 + 10 = 10. 
console.log(Boolean('') + 10) //Пустая строка - 0. 0 + 10 = 10
console.log(true + 2) //Результат будет 3. Т.к. true это 1. 1 + 2 = 3

const x = 2 + '10';
console.log(x - 10); //Результат будет 200, т.к. при вычислении значения х двойка в выражении будет преобразована в строку из-за наличия строчной '10'. Т.е. 2 + '10' будет строчное '210'. В выражении х - 10 обратная ситуация х равный '210' конвертируется в число 210 и из него вычетается 10 => результат 200