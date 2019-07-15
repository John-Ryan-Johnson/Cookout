const hamburger = {
  name: 'Hamburger',
  type: 'beef',
  cooked: false,
}
const zucchini = {
  name: 'Zucchini',
  type: 'vegetable',
  cooked: false,
}
const chickenBreast = {
  name: 'Chicken Breast',
  type: 'chicken',
  cooked: false,
}
const corn = {
  name: 'Corn',
  type: 'vegetable',
  cooked: false,
}
const steak = {
  name: 'Steak',
  type: 'beef',
  cooked: false,
}


const foods = [hamburger, zucchini, chickenBreast, corn, steak];


const cookedFood = [];

function grill(eachItem) {
  
  eachItem.cooked = true;

 
  cookedFood.push(eachItem);
};

foods.forEach((currentItem) => {
  grill(currentItem)
})

console.log(cookedFood)