// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrUsers = [
    new User(1, 'Joey', 'Tribbiani', 'qwerty@hmail.com', '+16102458246'),
    new User(5, 'Rachel', 'Green', 'qwerty@hmail.com', '+14844578925'),
    new User(10, 'Monica', 'Geller', 'qwerty@hmail.com', '+14844578913'),
    new User(2, 'Phoebe', 'Buffay', 'qwerty@hmail.com', '+14844578908'),
    new User(7, 'Chandler', 'Bing', 'qwerty@hmail.com', '+18143519571'),
    new User(3, 'Ross', 'Geller', 'qwerty@hmail.com', '+16102448340'),
    new User(9, 'Zach', 'Miller', 'qwerty@hmail.com', '+16102467341'),
    new User(8, 'Gina', 'Tribbiani', 'qwerty@hmail.com', '+18102467986'),
    new User(6, 'Ursula', 'Buffay', 'qwerty@hmail.com', '+16102418785'),
    new User(4, 'Roberta', 'Morganstern', 'qwerty@hmail.com', '+13102418123'),
];

console.log(arrUsers);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let arrEvenId = arrUsers.filter(user => user.id % 2 === 0);
console.log(arrEvenId);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = arrUsers.sort((a, b) => a.id - b.id);
console.log(sortedUsers);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrClients = [
    new Client(2, "Leanne", "Leanne", "Sincere@april.biz", "92998-3874", ['rice', 'beef', 'milk', 'sugar']),
    new Client(10, "Ervin", "Howell", "Shanna@melissa.tv", "90566-7771", ['coffee', 'beans']),
    new Client(6, "Clementine", "Bauch", "Nathan@yesenia.net", "59590-4157", ['eggs', 'potatoes', 'apples', 'oranges', 'butter']),
    new Client(1, "Patricia", "Lebsack", "Julianne.OConner@kory.org", "53919-4257", ['wine']),
    new Client(8, "Chelsey", "Dietrich", "Lucio_Hettinger@annie.ca", "33263", ['bananas', 'tea', 'soda']),
    new Client(4, "Kurtis", "Weissnat", "Telly.Hoeger@billy.biz", "58804-1099", ['chocolate', 'berries', 'salmon', 'citrus', 'pork', 'chicken']),
    new Client(3, "Nicholas", "Runolfsdottir", "Sherwood@rosamond.me", "45169", ['eggs', 'salmon', 'citrus', 'pork', 'chicken']),
    new Client(9, "Glenna", "Reichert", "Chaim_McDermott@dana.io", "76495-3109", ['coffee', 'milk', 'sugar', 'beans']),
    new Client(5, "Clementina", "DuBuque", "Rey.Padberg@karina.biz", "31428-2261", ['citrus', 'berries', 'bananas']),
    new Client(7, "Mrs. Dennis", "Schulist", "Karley_Dach@jasper.info", "23505-1337", ['salmon', 'wine', 'oranges', 'rice', 'tea'])
]
console.log(arrClients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClients = arrClients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);
