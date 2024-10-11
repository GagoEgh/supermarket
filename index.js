const firstShelfItems = ["assets/images/collection/wine.png","assets/images/collection/milk.png",
    "assets/images/collection/jam.png","assets/images/collection/cheese.png"];
const secondShelfItems = ["assets/images/collection/meat.png","assets/images/collection/chicken_meat.png", "assets/images/collection/chips.png"];


function createShelf(shelf,id){
  const firstShelf = document.getElementById(id);
 
  shelf.forEach((imgName)=>{
    const td = document.createElement('td');
    const img = document.createElement('img');
    img.src = imgName;
    td.appendChild(img);
    firstShelf.appendChild(td);
  })
 

  console.log(firstShelf);

}

createShelf(firstShelfItems,'first');
createShelf(secondShelfItems,'second')