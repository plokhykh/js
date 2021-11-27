// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`model - ${this.model}\n 
        producer - ${this.producer}\n 
        year - ${this.year}\n 
        maxSpeed - ${this.maxSpeed}\n
        engine - ${this.engine}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}


let tesla = new Car('Tesla', 'Tesla, Inc', 2010, 400, 3);
tesla.drive();
tesla.info();

tesla.increaseMaxSpeed(120);
console.log(tesla.maxSpeed);

tesla.changeYear(2018);
console.log(tesla.year);

tesla.addDriver({ name: 'Nick', age: 34 });
console.log(tesla);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car1 {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`model - ${this.model}\n 
        producer - ${this.producer}\n 
        year - ${this.year}\n 
        maxSpeed - ${this.maxSpeed}\n
        engine - ${this.engine}`)
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    }


}

let toyota = new Car1('Camry', 'Toyota Motor Corporation', 2019, 280, 2, 5);
toyota.drive();
toyota.info();

toyota.increaseMaxSpeed(40);
console.log(toyota.maxSpeed);

toyota.changeYear(2020);
console.log(toyota.year);

toyota.addDriver({ name: 'Toshy', age: 26 });
console.log(toyota);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let arrCinderella = [
    new Cinderella('Anne', '24', 36),
    new Cinderella('Kate', 29, 39),
    new Cinderella('Jasmine', 20, 35),
    new Cinderella('Jane', 28, 37),
    new Cinderella('Celine', 25, 38),
    new Cinderella('Rapunzel', 22, 34),
    new Cinderella('Zelda', 24, 40),
    new Cinderella('Belle', 26, 41),
    new Cinderella('Emma', 27, 33),
    new Cinderella('Ariel', 21, 42)
]

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Eric', 28, 34);

for (let i = 0; i < arrCinderella.length; i++) {
   if(arrCinderella[i].size === prince.shoe){
       console.log(`You found your princess. It's ${arrCinderella[i].name}`)
   }
}

let foundPrincess = arrCinderella.find(item => item.size === prince.shoe).name;
console.log(foundPrincess);
