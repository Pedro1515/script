/* global test, expect */
const script = require("./script");

test(`
    ● Devuelve Fizz si el número es divisible por 3 o si incluye un 3 en el número.
    ● Devuelve Buzz si el número es divisible por 5 o si incluye un 5 en el número.
    ● Devuelve FizzBuzz si el número es divisible por 3 y por 5.
`, () => {
  expect(script([33, 55, 225, 13545, 532, 22])).toEqual([
    "Fizz",
    "Buzz",
    "FizzBuzz",
    "Buzz",
    "FizzBuzz",
    "Fizz",
    "Buzz",
    "Fizz",
    "Buzz",
  ]);
});
