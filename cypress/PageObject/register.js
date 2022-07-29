///<reference types = "cypress" />

//Program to register the users in the application
class RegisterUser {
  visit() {
    cy.visit('https://ts-e2e-challenge.netlify.app/list');
  }

  clickRegister() {
    const btnRegister = cy.get('.css-hf8lg3');
    btnRegister.click();
  }
  //Adds username automatically by using the function randomNames
  addUserName(value) {
    const username = cy.get('#username');
    username.clear();
    username.type(randomNames(wordLength));
    return this;
  }
  /*Adds password. The idea behind using same password for all the users is: 
  Same password can be used by many users but all users can not have same username*/
  addPassword(value) {
    const password = cy.get('#password');
    password.clear();
    password.type('abc123456');
    return this;
  }
  submit() {
    const button = cy.get('[type = submit]');
    button.click();
  }
  logout() {
    cy.get('button').contains('Logout').click();
  }
  //method to add username manually
  users(value) {
    const username = cy.get('#username');
    username.clear();
    username.type('manedoe');
    return this;
  }
}

export default RegisterUser;

//Function to generate random usernames
const wordLength = 7;
function randomNames(wordLength) {
  let output = '';
  for (let i = 0; i < wordLength; i++) {
    const usernames = Math.floor(Math.random() * 27);
    output += String.fromCharCode(97 + usernames);
  }
  return output;
}
