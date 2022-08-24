const { sum, product, divide, greeting } = require('./sum');



test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('multiply 2 * 3 to equal 6', () => {
    expect(product(2, 3)).toBe(6)
})

test('divide 16 by 4 to equal 4', () => {
    expect(divide(16, 4)).toBe(4)
})

test('Hello followed by a name', () => {
    expect(greeting('Dave')).toBe('Hello, Dave!')
})