import ContactUs from '../../support/pageObjects/ContactUs';
import NavigationBar from '../../support/pageObjects/NavigationBar';

describe('Test Case 6: Contact Us Form', () => {
  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies()

    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  beforeEach(() => {
    // runs before each test in the block
  })

  afterEach(() => {
    // runs after each test in the block
  })

  after(() => {
    // runs once after all tests in the block
    //clears the cookies
    cy.clearCookies()
  })

  it("Click on 'Contact us' button", () => {
    NavigationBar.clickContactUs();
  });

  it("Verify 'GET IN TOUCH' is visible", () => {
    ContactUs.verifyGetInTouch();
  });
  
  it("Enter name, email, subject and message", () => {
    ContactUs.testNameField();
    ContactUs.testEmailField();
    ContactUs.testSubjectField();
    ContactUs.testBodyField();
  });

  it("Upload a file", () => {
    ContactUs.testUploadFile();
  });

  it("Verify success notification", () => {
    ContactUs.successNotification();
  });

  it("Verify page title homepage", () => {
    cy.verifyPageTitle('Automation Exercise');
  });

});