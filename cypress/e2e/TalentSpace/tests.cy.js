/// <reference types = "cypress" />

import RegisterUser from '../../PageObject/register';
import Books from '../../PageObject/addBooks';
import ValidateUser from '../../PageObject/userCheck';

describe('Creates a new user account by generating usernames automatically', function () {
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
  it('Creates a new user account', () => {
    register.addUserName();
    register.addPassword();
    register.submit();
    cy.wait(2000);
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
    user.addsUser();
  });
  it('Verifies if user already exists or not', () => {
    user.checkUser();
  });
});
