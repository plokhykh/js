// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let userRegistration = document.forms.userRegistration;

userRegistration.onsubmit = function (e) {
    e.preventDefault();
    let user = {
        name: this.username.value,
        age: this.age.value
    };
    localStorage.setItem('user', JSON.stringify(user));
};


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let car = document.forms.car;

car.onsubmit = function (e) {
    e.preventDefault();
    let car ={
        model: this.model.value,
        type: this.type.value,
        volume: this.volume.value,
    }
    let cars = localStorage.getItem('cars') || [];
    cars = JSON.parse(cars);
    cars.push(car);
    localStorage.setItem('cars', JSON.stringify(cars));
};
