///<reference types="cypress" />
describe("project-2",() => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/project-2");
    });

    /**
     *  Navigate to https://techglobal-training.com/frontend/project-2
        Validate that the username input box is displayed
        Validate that the username input box is not required
        Validate that the label of the username input box is “Please enter your username”
        Validate that the password input box is displayed
        Validate that the password input box is not required
        Validate that the label of the password input box is “Please enter your password”
        Validate the “LOGIN” button is displayed
        Validate the “LOGIN” button is clickable
        Validate that the button text is “LOGIN”
        Validate the “Forgot Password?” link is displayed
        Validate that the “Forgot Password?” link is clickable
        Validate that the link text is “Forgot Password?”
     */
  it('Test Case 01 - Validate the login form', () => {
    cy.get('#username').should('be.visible').and('not.have.attr', 'required');
    cy.get('[for="username"]').should('have.text', 'Please enter your username');
    cy.get('#password').should('be.visible').and('not.have.attr', 'required');
    cy.get('[for="password"]').should('have.text', 'Please enter your password');
    cy.get('#login_btn').should('be.visible')
    .and('be.enabled')
    .and('have.text', 'LOGIN')
    .next().should('be.visible')
    .and('have.attr', 'href', '/frontend/project-2')
    .and('have.text', 'Forgot Password?');
    
  });
/**
 *  Navigate to https://techglobal-training.com/frontend/project-2
    Enter the username as “TechGlobal”
    Enter the password as “Test1234”
    Click on the “LOGIN” button
    Validate the success message is displayed as “You are logged in”
    Validate the logout button displayed with the text “LOGOUT”
 */


  it('Test Case 02 - Validate the valid login', () => {
    cy.get('#username').type('TechGlobal');
    cy.get('#password').type('Test1234');
    cy.get('#login_btn').click();
    cy.get('#success_lgn').should('have.text', 'You are logged in');
    cy.get('.Button_c_button__TmkRS').should('be.visible')
    .and('have.text', 'LOGOUT');
  });

  /**
   *  Navigate to https://techglobal-training.com/frontend/project-2
      Enter the username as “TechGlobal”
      Enter the password as “Test1234”
      Click on the “LOGIN” button
      Click on the “LOGOUT” button
      Validate that the login form is displayed
   */
  it('Test Case 03 - Validate the logout', () => {
    cy.get('#username').type('TechGlobal');
    cy.get('#password').type('Test1234');
    cy.get('#login_btn').click();
    cy.get('#success_lgn').should('have.text', 'You are logged in');
    cy.get('.Button_c_button__TmkRS').click();
    cy.get('.LoginForm_form__m12Jc').should('be.visible');    
  });

/**
 *  Navigate to https://techglobal-training.com/frontend/project-2
    Click on the “Forgot Password?” link
    Validate that the modal heading “Reset Password” is displayed
    Validate that the close button is displayed
    Validate that the email input box is displayed
    Validate that the label of the email input box is “Enter your email address and we'll send you a link to reset your password.”
    Validate the “SUBMIT” button is displayed
    Validate the “SUBMIT” button is clickable
    Validate that the button text is “SUBMIT”
 */

  it('Test Case 04 - Validate the Forgot Password? Link and Reset Password modal', () => {
    cy.get('.Button_c_button__TmkRS').next().click()
    cy.get('#sub_heading').should('have.text','Reset Password');
    cy.get('.delete').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('[for="email"]').should('have.text',"Enter your email address and we'll send you a link to reset your password. ");
    cy.get('#submit').should('be.visible')
    .and('be.enabled')
    .and('have.text','SUBMIT');      
  });
/**
 *  Navigate to https://techglobal-training.com/frontend/project-2
    Click on the “Forgot Password?” link
    Validate that the “Reset Password” modal is displayed
    Click on the close button
    Validate that the “Reset Password” modal is closed
 */

  it('Test Case 05 - Validate the Reset Password modal close button', () => {
    cy.get('#login_btn').next().click();
    cy.get('.modal-card').should('be.visible');
    cy.get('.delete').click();
    cy.get('.modal-card').should('not.exist');      
  });
/**
 *  Navigate to https://techglobal-training.com/frontend/project-2
    Click on the “Forgot Password?” link
    Enter an email
    Click on the “SUBMIT” button
    Validate the form message “A link to reset your password has been sent to your email address.” is displayed under the “SUBMIT” button
 */

  it('Test Case 06 - Validate the Reset Password form submission', () => {
    cy.get('#login_btn').next().click()
    cy.get('#email').type('someEmail@gmail.com');
    cy.get('#submit').click();
    cy.get('#confirmation_message').should('have.text','A link to reset your password has been sent to your email address.');
  });
/**
 *  Navigate to https://techglobal-training.com/frontend/project-2
    Leave username empty
    Leave password empty
    Click on the “LOGIN” button
    Validate the failure message is displayed as “Invalid Username entered!” above the form
 */

  it('Test Case 07 - Validate the invalid login with the empty credentials', () => {
    cy.get('#login_btn').click();
    cy.get('#error_message').should('have.text','Invalid Username entered!');   
  });
/**
 *  Navigate to https://techglobal-training.com/frontend/project-2
    Enter the username as “John”
    Enter the password as “Test1234”
    Click on the “LOGIN” button
    Validate the failure message is displayed as “Invalid Username entered!” above the form
 */

  it('Test Case 08 - Validate the invalid login with the wrong username', () => {
    cy.get('#username').type('John');
    cy.get('#password').type('Test1234');
    cy.get('#login_btn').click();
    cy.get('#error_message').should('have.text','Invalid Username entered!');  
  });
/**
 *  Navigate to https://techglobal-training.com/frontend/project-2
    Enter the username as “TechGlobal”
    Enter the password as “1234”
    Click on the “LOGIN” button
    Validate the failure message is displayed as “Invalid Password entered!” above the form
 */

  it('Test Case 09 - Validate the invalid login with the wrong password', () => {
    cy.get('#username').type('TechGlobal');
    cy.get('#password').type('1234');
    cy.get('#login_btn').click();
    cy.get('#error_message').should('have.text','Invalid Password entered!');  
  });
/**
 *  Navigate to https://techglobal-training.com/frontend/project-2
    Enter the username as “John”
    Enter the password as “1234”
    Click on the “LOGIN” button
    Validate the failure message is displayed as “Invalid Username entered!” above the form
 */

  it('Test Case 10 - Validate the invalid login with the wrong username and password', () => {
    cy.get('#username').type('John');
    cy.get('#password').type('1234');
    cy.get('#login_btn').click();
    cy.get('#error_message').should('have.text','Invalid Username entered!');  
  });
  });