import CommonHooks from '../../support/pageObjects/commonHooks';
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
  CommonHooks.CommonBeforeEachAfterEachHooks

  it("Click on 'Contact us' button", () => {
    NavigationBar.verifyContactUs();
  });

  it("Verify 'GET IN TOUCH' is visible", () => {
    ContactUs.verifyGetInTouch();
  });

  it("Enter name and email", () => {
    ContactUs.verifyUserDetails();
  });

  it("Enter subject texts", () => {
    ContactUs.verifySubjectText(); // not working properly, need to fix
  });

  it("Enter body texts", () => {
    ContactUs.verifyBodyText(); // not working properly, need to fix
  });

  it("Verify upload file and success notification", () => {
    ContactUs.testUploadFile();
  });

  it("Verify homepage", () => {
    cy.verifyPageTitle('Automation Exercise');
  });

});