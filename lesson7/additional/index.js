// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

function User(id, name, username, email, street, suite, city, zipcode, geoLat, geoLng, phone, website, companyName, catchPhrase, bs) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {
        street: street,
        suite: suite,
        city: city,
        zipcode: zipcode,
        geo: {
            lat: geoLat,
            lng: geoLng
        }
    };
    this.phone = phone;
    this.website = website;
    this.company = {
        name: companyName,
        catchPhrase: catchPhrase,
        bs: bs
    }
}

let newUser = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light',
    'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442',
    'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net',
    'harness real-time e-markets');

console.log(newUser);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

class Tag {
    constructor(title, action, titleOfAttr, actionOfAttr) {
        this.title = title;
        this.action = action;
        this.attributes = [{ titleOfAttr: titleOfAttr, actionOfAttr: actionOfAttr }];
    }
}

let a = new Tag (a, 'В зависимости от присутствия атрибутов name или href тег устанавливает ссылку или якорь', )
