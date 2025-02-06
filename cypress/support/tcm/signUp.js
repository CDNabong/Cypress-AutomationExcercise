export const signUp = () => {
  it(`Click on 'Signup / Login' button`, () => {
    cy.get('.fa-lock')
      .should('be.visible')
      .click();
    cy.verifyPageTitle('Automation Exercise - Signup / Login');
    cy.url().should('include', '/login');
  }); 
  it(`Verify 'New User Signup!' is visible`, () => {
    cy.get('.signup-form h2')
      .should('contain', 'New User Signup!');
  });
  it('Enter name and email address', () => {
    cy.get('[data-qa=signup-name]').type(randomData.fullName);
    cy.get('[data-qa=signup-email]').type(randomData.email);
  });
  it(`Click 'Signup' button`, () => {
    cy.get('[data-qa=signup-button]')
      .should('contain', 'Signup')
      .click()
  });
  it(`Verify that 'ENTER ACCOUNT INFORMATION' is visible`, () => {
    cy.verifyPageTitle('Automation Exercise - Signup');
    cy.url().should('include', '/signup');
    cy.get('.title.text-center').eq(0)
      .should('contain', 'Enter Account Information');
  });
  it(`Fill details: Title, Name, Email, Password, Date of birth`, () => {
    cy.get('[id="id_gender1"]').click()
    cy.get('[data-qa=password]').type(randomData.password)
    cy.get('#days').select('22')
    cy.get('#months').select('11')
    cy.get('#years').select('1999')
  });
  it(`Select checkbox 'Sign up for our newsletter!'`, () => {
    cy.get('label[for="newsletter"]')
      .should('contain', 'Sign up for our newsletter!')
      .click()
  });
  it(`Select checkbox 'Receive special offers from our partners!'`, () => {
    cy.get('label[for="optin"]')
      .should('contain', 'Receive special offers from our partners!')
      .click()
  });
  it(`Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number`, () => {
    cy.get('[data-qa=first_name]').type(randomData.firstName)   
    cy.get('[data-qa=last_name]').type(randomData.lastName)
    cy.get('[data-qa="company"]').type(randomData.text)
    cy.get('[data-qa="address"]').type(randomData.streetAddress)
    cy.get('#country').select('United States')
    cy.get('[data-qa="state"]').type(randomData.state)
    cy.get('[data-qa="city"]').type(randomData.city)
    cy.get('[data-qa="zipcode"]').type(randomData.zipCode)
    cy.get('[data-qa=mobile_number]').type(randomData.mobile)
  });
  it(`Click 'Create Account button'`, () => {
    cy.get('[data-qa="create-account"]').click()
  })
  it(`Verify that 'ACCOUNT CREATED!' is visible`, () => {
    cy.get('[data-qa="account-created"]').should('contain', 'Account Created!')
  })
  it(`Click 'Continue' button`, () => {
    cy.get('[data-qa="continue-button"]').click()
  })
  it(`Verify that 'Logged in as username' is visible`, () => {
    cy.get('a')
      .contains('Logged in as')
      .should('contain', `${randomData.fullName}`)
  })
}