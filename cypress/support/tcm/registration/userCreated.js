import NavigationBar from '../../pageObjects/NavigationBar.js';
import SignUp from '../../pageObjects/SignUp.js';

describe('Verify user is registered', () => {
  NavigationBar.clickSignUpLogin();
  NavigationBar.testNewUserSignup();
  SignUp.testRegisterUser();
  SignUp.verifyAccountCreated();
  SignUp.verifyAccountLoggedIn();
});