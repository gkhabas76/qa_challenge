/// <reference types = "cypress" />

// Program for users to add books in their reading list
class Books {
  //This method will help users to navigate to Disover page
  navDiscover() {
    cy.get('ul').then(() => {
      cy.get('.css-11gax2f').contains('Discover').click();
      cy.get('p').contains('Welcome to the discover page.');
    });
  }
  /* This methods helps users to add the books and checks the whether 
  it has been added to the reading list by verifying the remove icon (-)
  The application should display the remove icon after users successfully add books to their reading lists.*/
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
  /* This methods helps users to navigate users to Reading list page after they added books.
  it checks if the books has been added to the reading list by verifying the Mark as read icon (✅).*/
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
