describe('webmasters cart', function() {
  it('should show a total price', function() {
    cy.visit('https://www.webmasters-fernakademie.de/fernkurse')

    // cy.contains('OK').click();

    cy.get('ul.course_list li:first-child() .special_button').click();

    cy.get('form > .special_button').click()

    cy.screenshot();

    cy.get('tr:last-child td.text_right')
      .invoke('text')
      .should('include', "9.900,00")
  })
})