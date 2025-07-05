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

const scrollUpIcon = () => {
  cy.clickVisibleElement(selectors.scrollUpIcon);
}

class Footer {

  static subscriptionText() {
    verifySubscriptionText();
  }

  static verifyEmailForSubscription() {
    enterEmailForSubscription();
    verifySuccessNotification();
  }

  static clickScrollUpIcon() {
    it("Click on arrow at bottom right side to move upward", () => {
      scrollUpIcon();
    });
  }

}

export default Footer;