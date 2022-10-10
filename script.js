const script = (ints) => {
  let stringList = [];

  const has3 = (n) => n.toString().includes(3);
  const has5 = (n) => n.toString().includes(5);

  ints.map((n) => {
    if (n % 3 == 0 && n % 5 == 0) {
      stringList.push("FizzBuzz");
      has3(n) && stringList.push("Fizz");
      has5(n) && stringList.push("Buzz");
    } else {
      if (n % 3 == 0 || has3(n)) stringList.push("Fizz");
      if (n % 5 == 0 || has5(n)) stringList.push("Buzz");
    }
  });
  return stringList;
};

module.exports = script;
