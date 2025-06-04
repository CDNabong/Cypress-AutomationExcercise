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

const getInTouch = () => {
  cy.checkElemContainsText(selectors.getInTouch, 'Get In Touch');
}

const enterName = () => {
  cy.generateRandomUser().then((userData) => {
    cy.typeElemAndCheckValue(selectors.contactUsName, userData.fullName, userData.fullName);
  });
}

const enterEmail = () => {
  cy.generateRandomUser().then((userData) => {
    cy.typeElemAndCheckValue(selectors.contactUsEmail, userData.email, userData.email);
  });
}

const enterSubject = () => {
  cy.generateRandomText().then((text) => {
    cy.typeElemAndCheckValue(selectors.contactUsSubject, text.randomText, text.randomText);
  });
}

const enterBody = () => {
  cy.generateRandomParagraph().then((text) => {
    cy.typeElemAndCheckValue(selectors.contactUsBody, text.randomParagraph, text.randomParagraph);
  });
}

const uploadFile = () => {
  cy.fixture('example.json', null).as('fixtures')
  cy.get(selectors.chooseFile).selectFile('@fixtures');
  cy.clickElemContainsText(selectors.submitButton, 'Submit');
  cy.checkElemContainsText(selectors.successNotification, 'Success! Your details have been submitted successfully.');
  cy.clickElemContainsText(selectors.homeButton, 'Home');
}




class ContactUs {

  static verifyGetInTouch() {
    it("Verify 'GET IN TOUCH' is visible", () => {
      getInTouch();
    });
  }

  static verifyUserDetails() {
    it("Enter name and email", () => {
      enterName();
      enterEmail();
    });
  }

  static verifyMessageDetails() {
    it("Enter subject and body", () => {
      enterSubject();
      enterBody();
    });
  }

  static testUploadFile() {
    it("Verify upload file and success notification", () => {
      uploadFile();
    });

    it("Verify homepage", () => {
      cy.verifyPageTitle('Automation Exercise');
    });
  }

}


export default ContactUs;