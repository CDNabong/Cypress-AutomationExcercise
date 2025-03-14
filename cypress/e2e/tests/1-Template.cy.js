describe('Template how to use mocha framework', () => {
  
  before(() => {
    // runs once before all tests in the block
    console.log('before all tests in the block - hook');
  })

  beforeEach(() => {
    // runs before each test in the block
    console.log('before each test in the block - hook');
  })

  afterEach(() => {
    // runs after each test in the block
    console.log('after each test in the block - hook');
  })

  after(() => {
    // runs once after all tests in the block
    console.log('after all tests in the block - hook');
  })

  it("Print in console log 1", () => {
    console.log('Test case 1');
  });

  it("Print in console log 2", () => {
    console.log('Test case 2');
  });

  it("Print in console log 3", () => {
    console.log('Test case for 3');
  });

});