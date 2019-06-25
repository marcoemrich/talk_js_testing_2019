const ERROR_MESSAGE_NEGATIVE_NUMBER = 'Negative numbers are not allowed';

const add = (a, b) => a + b;
const sum = numbers => numbers.reduce(add);

const containsNegatives = numbers => numbers.filter(n => n < 0).length > 0;
const splitStringToNumbers = str => str.split(",").map(Number);

const string_calc = (str) => {
  const numbers = splitStringToNumbers(str);
  if (containsNegatives(numbers)) throw new Error(ERROR_MESSAGE_NEGATIVE_NUMBER);
  return sum(numbers);
}

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(3, 4)).toEqual(7);
  });
});

describe('sum', () => {
  it('adds up all numbers', ()  => {
    expect(sum([1, 2, 3])).toEqual(6);
  })
});

describe('string_calc', () => {
  it('returns 0 for an empty string', () => {
    expect(
      string_calc("")
    ).toEqual(0);
  });

  it('returns the number from a string containing just that number', () => {
    expect(
      string_calc("3")
    ).toStrictEqual(3);
  });

  it('returns the sum of several numbers from a string', () => {
    expect(
      string_calc("1,2,3")
    ).toEqual(6); // 7
  });

  it('throws an exception for negative numbers', () => {
    expect(
      () => string_calc("-1")
    ).toThrowError(
      new Error(ERROR_MESSAGE_NEGATIVE_NUMBER)
    );
  });

  it.todo('ignores numbers < 1000');

});

// describe & it
// watcher
// git
// runner filter/match
// todo
// f and x