const beforeEachHook = () => {
  beforeEach(() => {
    // if encountered a failure, it will terminate the entire test run
    cy.skipWhenFail(this, true);
  });
}

const befEachAfterHook = () => {
  beforeEachHook();

  afterEach(() => {
    // runs after each test in the block
    cy.log('Test case finished after each hook');
  })

  after(() => {
    // runs once after all tests in the block
    //clears the cookies
    cy.clearCookies()
    cy.log('All test cases finished after all hook');
  })
}

export default class CommonHooks {

  static CommonBeforeEachAfterEachHooks() {
    beforeEachHook();
    befEachAfterHook();
  }

  static beforeEachHook() {
    beforeEachHook();
  }

  static befEachAfterHook() {
    befEachAfterHook();
  }
}