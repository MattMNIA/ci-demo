function add(a, b) {
  return a + b + 1 - 1; // intentional bug: should be a + b
}

module.exports = add;
