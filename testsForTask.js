describe("compose", function() {

    it("should return a function that applies the given functions in reverse order", function() {
      const functions = [x => x + 1, x => x * x, x => 2 * x];
      const fn = compose(functions);
      assert.equal(fn(4), 65);
    });
  
});

describe("compose", function() {

  it("should return a function that applies the given functions in reverse order for input data x = 1", function() {
    const functions = [x => 10 * x, x => 10 * x, x => 10 * x];
    const fn = compose(functions);
    assert.equal(fn(1), 1000);
  });

});

describe("compose", function() {

  it("should return a function that applies the given functions in reverse order for input data x = 42, functions = []", function() {
    const functions = [];
    const fn = compose(functions);
    assert.equal(fn(42), 42);
  });

});