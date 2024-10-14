const firstShelfItems = [
    "assets/images/collection/wine.png",
    "assets/images/collection/milk.png",
    "assets/images/collection/jam.png",
    "assets/images/collection/cheese.png"
];

const secondShelfItems = [
    "assets/images/collection/meat.png",
    "assets/images/collection/chicken_meat.png",
    "assets/images/collection/chips.png"
];

const thirdShelfItems = [
    "assets/images/collection/ananas.png",
    "assets/images/collection/banana.png",
    "assets/images/collection/apple.png",
    "assets/images/collection/onion.png"
];

const itemsInBasket = document.getElementById('items-in-basket');
const basket = document.getElementById("block-bascket");
let itemCount = 0;

function createShelf(shelf, id) {
    const newShelf = document.getElementById(id);
  
    shelf.forEach((imgName) => {
        const td = document.createElement('td');
        const img = document.createElement('img');
        img.src = imgName;
        img.id = imgName;
        img.draggable = true;

        img.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData('id', imgName);
        });

        img.addEventListener("touchstart", (e) => {
            e.preventDefault();
            addToBasket(imgName);
        });

        td.appendChild(img);
        newShelf.appendChild(td);
    });
}

basket.addEventListener("dragover", (e) => {
    e.preventDefault();
});

basket.addEventListener("drop", (e) => {
    e.preventDefault();
    addToBasket(e.dataTransfer.getData('id'));
});

basket.addEventListener("touchstart", (e) => {
    const itemName = e.target.src;
    if (itemName) {
        addToBasket(itemName);
    }
});

function addToBasket(itemName) {
    if (itemCount < 3) {
        const buyItem = document.createElement("img");
        buyItem.src = itemName;
        buyItem.className = "buyItem";
        itemsInBasket.appendChild(buyItem);
        itemCount++;
        removeItemFromShelf(itemName);
    }

    if (itemCount === 3) {
        const button = document.querySelector('.btn');
        button.style.display = 'block';
    }
}

function removeItemFromShelf(itemName) {
    const tableItem = document.getElementById(itemName);
    tableItem.style.opacity = '0';
}

createShelf(firstShelfItems, 'first');
createShelf(secondShelfItems, 'second');
createShelf(thirdShelfItems, 'third');
