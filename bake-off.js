const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  for (let food of recipes) {
    if ((ingredientCheck(bakeryA, food.ingredients[0]) === true && ingredientCheck(bakeryB, food.ingredients[1]) === true) || (ingredientCheck(bakeryA, food.ingredients[1]) === true && ingredientCheck(bakeryB, food.ingredients[0]) === true)) {
      return food.name;
    }
  }

};

const ingredientCheck = function(bakery, ingredient) {
  for (let part of bakery) {
    if (part === ingredient) {
      return true;
    }
  }
  return false;
};


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));