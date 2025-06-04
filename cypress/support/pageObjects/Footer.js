const selectors = {
  footerSubscription: '#footer > div.footer-widget > div > div > div.col-sm-3.col-sm-offset-1 > div > h2',
  emailSubscriptionField: '#susbscribe_email',
  subscribeButton: '#subscribe',
  successNotification: '#success-subscribe',
  scrollUpIcon: "#scrollUp"
}

const verifySubscriptionText = () => {
  cy.checkElemContainsText(selectors.footerSubscription, 'Subscription');
}

const enterEmailForSubscription = () => {
  cy.generateRandomUser().then((userData) => {
      cy.typeElemAndCheckValue(selectors.emailSubscriptionField, userData.email, userData.email);
    });
  cy.clickVisibleElement(selectors.subscribeButton);
}

const verifySuccessNotification = () => {
  cy.checkElemContainsText(selectors.successNotification, 'You have been successfully subscribed!');
}

class Footer {

  static subscriptionText() {
    it("Verify text 'SUBSCRIPTION'", () => {
      verifySubscriptionText();
    });
  }

  static verifyEmailForSubscription() {
    it("Enter email address in input and click arrow button'", () => {
      enterEmailForSubscription();
    });

    it("Verify success message 'You have been successfully subscribed!' is visible", () => {
      verifySuccessNotification();
    });
  }

  static clickScrollUpIcon() {
    cy.get(selectors.scrollUpIcon).click();
  }

}

export default Footer;