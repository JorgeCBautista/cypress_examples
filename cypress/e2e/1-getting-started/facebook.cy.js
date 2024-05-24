describe('Facebook Page Test', () => {

    beforeEach(() => {
        cy.visit('https://www.facebook.com/');
      })

    it('Visits the Facebook Page', () => {
   });

   it('I write my credentials', () => {
    cy.get('[role="button"]').should('have.text', 'Registrarte')
    cy.get('[type="email"]').type('UsuarioLento', { delay: 200 })
    cy.get('[type="email"]').should('have.value', 'UsuarioLento')

    cy.get('[type="password"]').type('ContraLento', { delay: 200 })
    cy.get('[type="password"]').should('have.value', 'ContraLento')

    cy.get('[type="submit"]').click().wait(200)

    cy.get('[role="button"]').should('have.text', 'Crear cuenta nueva')

});
   
      });