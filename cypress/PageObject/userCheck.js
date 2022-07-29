//Checks if users is already registered or not

import RegisterUser from './register';

const user = new RegisterUser();

class ValidateUser {
  addUser() {
    user.users();
    user.addPassword();
    user.submit();
    cy.wait(2000);
    cy.get('p').contains(
      'Hey there! Welcome to your reading list. Get started by heading over to the Discover page to add books to your list.'
    );

    user.logout();
  }
  checkUser() {
    user.users();
    user.addPassword();
    user.submit();
    cy.wait(2000);
    cy.get('.css-1633ev8').contains(
      'Cannot create a new user with the username "johndoe"'
    );
  }
}

export default ValidateUser;
