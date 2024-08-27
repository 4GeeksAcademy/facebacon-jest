const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
  // Inside the test we call our sum function with 2 numbers
  let total = sum(14, 9);

  // We expect the sum of those 2 numbers to be 23
  expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function () {
  const dollars = fromEuroToDollar(3.5);
  const expected = 3.5 * 1.07;
  expect(dollars).toBe(expected);
});

test("One dollar should be equivalent in Yen", function () {
  const yen = fromDollarToYen(1);
  const expected = 1 * (156.5 / 1.07);
  expect(yen).toBe(expected);
});

test("One yen should be equivalent in British Pound", function () {
  const pounds = fromYenToPound(1);
  const expected = 1 * (0.87 / 156.5);
  expect(pounds).toBe(expected);
});