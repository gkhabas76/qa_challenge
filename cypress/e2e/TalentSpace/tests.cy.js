/// <reference types = "cypress" />

import RegisterUser from '../../PageObject/register';
import Books from '../../PageObject/addBooks';
import ValidateUser from '../../PageObject/userCheck';

describe('Test suites for Creating an account, adding books to reading lists and verifying existing username', function () {
  const register = new RegisterUser();
  const books = new Books();
  const user = new ValidateUser();
  before(function () {
    cy.clearLocalStorageCache();
  });
  beforeEach(() => {
    cy.restoreLocalStorageCache();
    register.visit();
    register.clickRegister();
  });
  afterEach(() => {
    cy.saveLocalStorageCache();
  });
  it('Creates a new user account by adding username automatically', () => {
    register.addUserName();
    register.addPassword();
    register.submit();
    cy.wait(2000);
    //Verifies the Paragraph text after users successfully registers or logins in the applications.
    cy.get('p').contains(
      'Hey there! Welcome to your reading list. Get started by heading over to the Discover page to add books to your list.'
    );
    //Users selects and adds books to their reading list
    books.navDiscover();
    books.selectBooks();
    books.navReadingList();
    books.logout();
  });
  it('Adds User manually', () => {
    user.addUser();
  });
  it('Verifies if user already exists or not', () => {
    user.checkUser();
  });
});
