describe('leap year specs', () => {
  describe('A year is a leap year ', () => {
    test('if it is divisible by 4 but not by 100', () => {
      expect(isLeapYear(4)).toBeTruthy();
    });
    it('if it is divisible by 400', () => {
      expect(isLeapYear(400)).toBeTruthy();
    });
  });

  describe('A year is *NOT*s a leap year ', () => {
    test('if it is not divisible by 4', () => {
      expect(isLeapYear(3)).toBeFalsy();
    });
    test('if it is divisible by 100 but not by 400', () => {
      expect(isLeapYear(100)).toBeFalsy();
    });
  });
});

const isLeapYear = year => {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}
