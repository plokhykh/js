// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let validationEmail = (email) => {
    email = email.toLowerCase()
    if (email.includes('@') && email.includes('.')) {
        let indexAtSign = email.indexOf('@');
        let indexDot = email.lastIndexOf('.');
        if (indexAtSign >= 2 && indexDot >= indexAtSign + 3) {
            return 'you\'re email is valid'
        }
    }
    return 'you\'re email isn\'t valid'

}
console.log(validationEmail("someemail@gmail.com"));


// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let sortedArr = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
console.log(sortedArr);


// - Напишіть функцію count(str, stringSearch), яка повертає кількість символів stringSearch у рядку str.
let symb = "о";
string = "Астрономия это наука о небесных объектах";

let count = (str, stringSearch) => {
    let arrStr = str.split('').filter(item => item === stringSearch);
    return arrStr.length
}
console.log(count(string, symb));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str = "Сила тяжести приложена к центру масс тела";
let cutString = (str, n) => {
    let arrStr = str.split(' ');
    arrStr.splice(n);
    return arrStr;
}
console.log(cutString(str, 2));
