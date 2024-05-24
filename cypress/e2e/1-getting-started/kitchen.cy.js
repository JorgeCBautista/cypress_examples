describe('Kitchen Sink Test', () => {
    const times = 10
    const leftArrowSequence = '{leftarrow}'.repeat(times);
    const rightArrowSequence = '{rightarrow}'.repeat(times);
    beforeEach(() => {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click();
        cy.url().should('include', '/commands/actions');
      })

    it('Visits the Kitchen Sink', () => {
    });

    it('Digito mi email ', () => {
        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com');
    });

    it('Agrego datos a la izquierda y derecha de mi email', () => {
        cy.get('.action-email').type(leftArrowSequence).type('Jorge');
        cy.get('.action-email').type(rightArrowSequence).type('Derecha');
    });

    it('Agrego datos al campo desahbilitado', () => {
        cy.get('.action-disabled').type('disabled error checking', { force: true });
        cy.get('.action-disabled').should('have.value', 'disabled error checking');
    });

    it('Hago focus en Paswword', () => {
        cy.get('.action-focus').type('user@example.com').focus()
        cy.get('.action-focus').should('have.class', 'focus')
        .prev().should('have.attr', 'style', 'color: orange;')
    });

    it('Hacer blur en Paswword', () => {
        cy.get('.action-blur').type('About to blur')
        cy.get('.action-blur').blur()
        cy.get('.action-blur').should('have.class', 'error')
          .prev().should('have.attr', 'style', 'color: red;')
    });

    it('Escribir y borrar un texto', () => {
        cy.get('.action-clear').type('Clear this text')
        cy.get('.action-clear').should('have.value', 'Clear this text')
        cy.get('.action-clear').clear()
        cy.get('.action-clear').should('have.value', '')
    });

   });