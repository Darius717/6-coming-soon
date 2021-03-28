const sum = (a, b) => a + b;
const minus =  (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const matematika = {
    sudeti: sum,
    atimti: minus,
    sudauginti: multiply,
    dalinti: divide,
    
    sum: sum,
    subtract: minus,
    multiply: multiply,
    divide: divide,
}

export { matematika }