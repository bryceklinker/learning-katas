function fizzbuzz(number) {
    if (number%3 ===0 && number%5 === 0) {return "fizzbuzz"}
    if (number%3 ===0) {return 'fizz'}
    if (number%5 ===0) {return 'buzz'}
    return `${number}`;
}

it('Given the number one then returns one', () => {
    const result = fizzbuzz(1);
    expect(result).toBe('1');
});

it('Given the number two then returns two', () => {
    const result = fizzbuzz(2);
    expect(result).toBe('2');
});

it("Given the number 3 returns fizz", () => {
    const result = fizzbuzz (3);
    expect(result).toBe ('fizz')
})
it("Given the number 6 returns fizz", () => {
    const results = fizzbuzz (6);
    expect (results).toBe ('fizz')
})
it("given the number 5 returns buzz", () => {
    const results = fizzbuzz (5);
    expect (results).toBe ("buzz")
})
it("given the number 30 returns fizzbuzz", () => {
    const results = fizzbuzz (30);
    expect (results).toBe ("fizzbuzz")
})
