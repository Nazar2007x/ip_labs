// Завдання 1
// Функція calculateSum(n) — сума від 1 до n
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log("Sum 1..5 =", calculateSum(5));


// Завдання 2
// Функціональний вираз multiply(a, b)
const multiply = function(a, b) {
    return a * b;
};

console.log("Multiply 4 * 3 =", multiply(4, 3));


// Завдання 3
// Стрілкова функція power(a, b)
const power = (a, b) => a ** b;

console.log("Power 2^5 =", power(2, 5));


// Завдання 4
// Рекурсивна функція harmonicSeries(n)
// 1 + 1/2 + 1/3 + ... + 1/n
function harmonicSeries(n) {
    if (n === 1) return 1;
    return 1 / n + harmonicSeries(n - 1);
}

console.log("Harmonic series n=5 =", harmonicSeries(5));


// Завдання 5
// Функція-замикання createMultiplier(multiplier)
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
console.log("Double 6 =", double(6));


// Завдання 6*
// processSet(set, callback)
function processSet(set, callback) {
    const result = new Set();

    for (let item of set) {
        result.add(callback(item));
    }

    return result;
}

const numbers = new Set([1, 2, 3, 4]);

const squaredSet = processSet(numbers, x => x * x);

console.log("Processed Set:", squaredSet);
