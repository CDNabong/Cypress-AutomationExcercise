const selectors = {
  getInTouch: '.contact-form h2',
  contactUsName: '[data-qa="name"]',
  contactUsEmail: '[data-qa="email"]',
  contactUsSubject: '[data-qa="subject"]',
  contactUsBody: '[data-qa="message"]',
  chooseFile: '[name="upload_file"]',
  submitButton: '[data-qa="submit-button"]',
  successNotification: '.alert.alert-success',
  homeButton: '.btn-success'
}


class ContactUs {

  static verifyGetInTouch() {
    cy.checkElemContainsText(selectors.getInTouch, 'Get In Touch');
  }

  static testNameField() {
    cy.generateRandomUser().then((userData) => {
      cy.typeElemAndCheckValue(selectors.contactUsName, userData.fullName, userData.fullName);
    });
  }

  static testEmailField() {
    cy.generateRandomUser().then((userData) => {
      cy.typeElemAndCheckValue(selectors.contactUsEmail, userData.email, userData.email);
    });
  }

  static testSubjectField() {
    cy.generateRandomText().then((text) => {
      cy.typeElemAndCheckValue(selectors.contactUsSubject, text.randomText, text.randomText);
    });
  }

  static testBodyField() {
    cy.generateRandomParagraph().then((text) => {
      cy.typeElemAndCheckValue(selectors.contactUsBody, text.randomParagraph, text.randomParagraph);
    });
  }

  static testUploadFile() {
    cy.fixture('example.json', null).as('fixtures')
    cy.get(selectors.chooseFile).selectFile('@fixtures');
    cy.clickElemContainsText(selectors.submitButton, 'Submit');
  }

  static successNotification() {
    cy.checkElemContainsText(selectors.successNotification, 'Success! Your details have been submitted successfully.');
    cy.clickElemContainsText(selectors.homeButton, 'Home');
  }




}


export default ContactUs;