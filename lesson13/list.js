let divList = document.getElementsByClassName('list')[0];
let productsList = localStorage.getItem('products');
productsList = JSON.parse(productsList);

if (productsList) {
    for (const product of productsList) {
        console.log(productsList);
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let img = document.createElement('img');
        let btn = document.createElement('button');

        h3.innerText = product.name;
        p.innerText = `quantity: ${product.quantity} - price: ${product.price}`;
        img.src = product.image;
        btn.innerText = 'remove product';

        divList.appendChild(div);
        div.append(img, h3, p, btn);

        btn.onclick = () => {
            productsList.forEach((item, index) => {
                if (item.id === product.id) {
                    productsList.splice(index, 1);
                }
            })
            localStorage.removeItem('products');
            localStorage.setItem('products', JSON.stringify(productsList))
        }
    }
}

let removeBtn = document.getElementsByClassName('remove-all')[0];
removeBtn.onclick = () => {
    localStorage.removeItem('products');
    divList.innerText = '';
}
