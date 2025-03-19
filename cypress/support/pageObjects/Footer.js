const selectors = {
  footerSubscription: '#footer > div.footer-widget > div > div > div.col-sm-3.col-sm-offset-1 > div > h2',
  emailSubscriptionField: '#susbscribe_email',
  subscribeButton: '#subscribe',
  successNotification: '#success-subscribe',
  scrollUpIcon: "#scrollUp"
}

class Footer {

  static verifySubscriptionText() {
    cy.checkElemContainsText(selectors.footerSubscription, 'Subscription');
  }

  static enterEmailForSubscription() {
    cy.generateRandomUser().then((userData) => {
      cy.typeElemAndCheckValue(selectors.emailSubscriptionField, userData.email, userData.email);
    });
    cy.get(selectors.subscribeButton).click();
  }

  static verifySuccessNotification() {
    cy.checkElemContainsText(selectors.successNotification, 'You have been successfully subscribed!');
  }

  static clickScrollUpIcon() {
    cy.get(selectors.scrollUpIcon).click();
  }

}

export default Footer;