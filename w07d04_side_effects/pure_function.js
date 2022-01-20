// what is a pure-function?
// - no side-effects
// - output is deterministic

const addTwo = (n) => {
  return n + 2;
};

const sum = addTwo(5);
const anotherSum = addTwo(5);

// side-effect is when the function 
// reaches outside of itself to do something


const addThree = (n) => {
  const result = n + 3;
  console.log(result);
  return result;
}

// addThree(3);


const additionVal = 3;

const addFour = (n) => {
  return additionVal + n;
}

console.log(addFour(5));


