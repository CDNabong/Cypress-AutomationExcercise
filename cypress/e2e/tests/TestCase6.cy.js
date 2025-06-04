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
  NavigationBar.verifyContactUs();
  ContactUs.verifyGetInTouch();
  ContactUs.verifyUserDetails();
  ContactUs.verifyMessageDetails();
  ContactUs.testUploadFile();

});