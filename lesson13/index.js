// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


let productForm = document.forms.product;
let id = 0;
productForm.onsubmit = function (e) {
    let products = localStorage.getItem('products') || [];
    if (products.length) {
        products = JSON.parse(products);
        id = products[products.length - 1].id
    }
    e.preventDefault();
    let newProduct = {
        name: this.name.value,
        quantity: this.quantity.value,
        price: this.price.value,
        image: this.image.value,
        id: id+= 1
    }

    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
};

