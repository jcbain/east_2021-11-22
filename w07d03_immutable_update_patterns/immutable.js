// primitives are immutable

// objects are mutable
const burrito = {
  type: 'bowl',
  vegetarian: true,
  ingredients: ['lettuce', 'black beans']
};

const copy = {
  ...burrito,
  type: 'whole wheat tortilla',
  ingredients: [...burrito.ingredients, 'guac']

};

// copy.ingredients.push('guac')

// copy.type = 'whole wheat tortilla';

console.log("original", burrito);
console.log("copy", copy);
