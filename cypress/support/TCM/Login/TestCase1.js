import NavigationBar from '../../../pageObjects/NavigationBar.js';
import SignUp from '../../support/pageObjects/SignUp.js';

describe('Test Case 1: Register User', () => {

  it("Click on 'Signup / Login' button", () => {
    NavigationBar.clickSignUpLogin();
  });

  it("Verify 'New User Signup!' is visible", () => {
    NavigationBar.verifyNewUserSignup();
  });

  it('Should register a new user', () => {
    SignUp.testRegisterUser();
  });

  it('Should verify the user is created', () => {
    SignUp.verifyAccountCreated();
  });

  it('Should verify the user is logged in', () => {
    SignUp.verifyAccountLoggedIn();
  });

  it("Click 'Delete Account' button", () => {
    SignUp.verifyAccountDeletion();
  });

  it("Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", () => {
    SignUp.verifyAccountDeleted();
  });
  
});