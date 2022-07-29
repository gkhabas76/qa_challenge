/// <reference types = "cypress" />

// Program for users to add books in their reading list
class Books {
  navDiscover() {
    cy.get('ul').then(() => {
      cy.get('.css-11gax2f').contains('Discover').click();
      cy.get('p').contains('Welcome to the discover page.');
    });
  }
  selectBooks() {
    cy.get('.e1baol0z1').then(() => {
      cy.wait(2000);
      cy.get('h2')
        .eq(1)
        .then(() => {
          cy.get('.css-zmb3is')
            .eq(1)
            .then(() => {
              cy.get('.e1baol0z0').eq(1).click();
              cy.wait(2000);
              cy.get('small').eq(1).scrollIntoView();
              cy.get('[aria-label="Remove from list"]');
            });
        });
    });
  }
  navReadingList() {
    cy.wait(2000);
    cy.get('ul').then(() => {
      cy.get('.css-11gax2f').contains('Reading List').click();
      cy.get('[aria-label="Mark as read"]');
    });
  }
  logout() {
    cy.get('button').contains('Logout').click();
  }
}

export default Books;
