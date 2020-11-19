let unit = require('../src/unit');

test('1+1=2', () => {
    expect(unit.add(1, 1)).toBe(2);
})

test('2+3=5', () => {
    expect(unit.add(2, 3)).toBe(5);
})