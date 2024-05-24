describe('Google Page Test', () => {
    const times = 5
    const downArrowSequence = '{downarrow}'.repeat(times - 2);
    const upArrowSequence = '{uparrow}'.repeat(times - 3);

    beforeEach(() => {
        cy.visit('https://www.google.com/');
      })

     it('Visits the Google Page', () => {
        cy.get('.gLFyf').click();
        cy.get('.gLFyf').type(downArrowSequence, { delay: 200 })
                        .wait(500)
                        .type(upArrowSequence, { delay: 200 });
    });


    it('I investigate about Jenkins plugin install', () => {
        cy.get('.gLFyf').type('Jenkins{enter}', { delay: 200 }).wait(350);
        cy.get('.gLFyf').should('contain.text', 'Jenkins');
        cy.get('.VuuXrf').eq(0).click().wait(1000);
        cy.origin('https://www.jenkins.io', () => {
        cy.wait(200);
        cy.get('body').type('{ctrl+k}').wait(100)
        const times = 5
        const downArrowSequence = '{downarrow}'.repeat(times - 3);
        cy.get('#docsearch-input').type('Installation').wait(150)
                                  .type(downArrowSequence, { delay: 200 }).type('{enter}');
        cy.scrollTo('bottom', { ensureScrollable: false });

      });
      

    });

      });