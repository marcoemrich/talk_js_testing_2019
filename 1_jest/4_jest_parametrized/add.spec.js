test.each(
  [
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3]
  ]
  )(
  'add(%i, %i) => %i',
  (a, b, expected) => {
    expect(a + b).toBe(expected);
  },
);