const soma = require('../soma');
const primo = require('../primo');
const contagem = require('../contagem');
const fibonacci = require('../FibonacciMelhorado');
const mdc = require('../mdc');
const quicksort = require('../quicksort');
test('sunFunc 10+20 = 30', () => {
    expect(soma(10, 20)).toBe(30);
});
test('sunFunc -10+20 = 10', () => {
    expect(soma(-10, 20)).toBe(10);
});
test('primeFunc 10 = false', () => {
    expect(primo(10)).toBe(false);
});
test('primeFunc 3 = true', () => {
    expect(primo(3)).toBe(true);
});
test('contFunc 10 = true', () => {
    expect(contagem(10)).toBe(true);
});
test('contFunc 3 = false', () => {
    expect(contagem(3)).toBe(false);
});
test('fibonacciFunc 5 = 0, 1, 1, 2, 3', () => {
    expect(fibonacci(5)).toMatchObject([0, 1, 1, 2, 3]);
});
test('fibonacciFunc 1 = 0', () => {
    expect(fibonacci(1)).toMatchObject([0]);
});
test('mdcFunc 5 10 = 5', () => {
    expect(mdc(5, 10)).toBe(5);
});
test('mdcFunc 1 = 1', () => {
    expect(mdc(1, 1)).toBe(1);
});
test('quicksortFunc 5,4,3,1 = 1,3,4,5', () => {
    expect(quicksort([5, 4, 3, 1])).toMatchObject([1, 3, 4, 5]);
});
test('quicksortFunc 100,4,3,150 = 3,4,100,150', () => {
    expect(quicksort([100, 4, 3, 150])).toMatchObject([3, 4, 100, 150]);
});
