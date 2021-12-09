let favorites = localStorage.getItem('favorites');

if (favorites.length) {
    favorites = JSON.parse(favorites);
    console.log(favorites);
    for (const favorite of favorites) {
        let div = document.createElement('div');
        div.innerText = `name: ${favorite.name}\n age: ${favorite.age}\n status: ${favorite.status}\n`;

        document.getElementsByClassName('favorites')[0].appendChild(div);
    }
}
