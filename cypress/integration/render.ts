import React from 'react'
import { render } from 'src'

describe('render', () => {
  
  it('attaches a shadow container to the body and renders the given content into the root of the shadow dom', () => {
  
    cy.visit('cypress/test.html').then((contentWindow) => {
      cy.document().then((document) => {

        render({
          document,
          content: React.createElement('h1', {}, 'I am a dialog!')
        })
        
        cy.get('#ReactDialogShadowContainer').should(element => {
          const [container] = element.get()
          expect(
            container.shadowRoot.querySelector('h1').innerHTML
          ).to.equal('I am a dialog!')
        })
      })
    })
  })

  it('renders only 1 dialog at a time (removes the previous one)', () => {

    cy.visit('cypress/test.html').then((contentWindow) => {
      cy.document().then((document) => {

        render({
          document,
          content: React.createElement('h1', {}, 'I am a dialog!')
        })
        render({
          document,
          content: React.createElement('h1', {}, 'I am another dialog!')
        })

        cy.get('body').find('#ReactDialogShadowContainer').its('length').should('eq', 1)

        cy.get('#ReactDialogShadowContainer').should(element => {
          const [container] = element.get()
          expect(
            container.shadowRoot.querySelector('h1').innerHTML
          ).to.equal('I am another dialog!')
        })
      })
    })
  })

  it('injects shadow container styles into the embedding document (only once)', () => {
    cy.visit('cypress/test.html').then((contentWindow) => {
      cy.document().then((document) => {

        render({
          document,
          content: React.createElement('h1', {}, 'I am a dialog and my container is styled!')
        })
        render({
          document,
          content: React.createElement('h1', {}, 'I am another dialog and my container is styled!')
        })

        cy.get('head').find('#ReactDialogShadowContainerStyles').its('length').should('eq', 1)
      })
    })
  })

  it('injects styles into the shadow root dom', () => {
    cy.visit('cypress/test.html').then((contentWindow) => {
      cy.document().then((document) => {

        render({
          document,
          content: React.createElement('h1', {}, 'I am a dialog and my container is styled!'),
          styles: `
            h1 {
              color: white;
            }
          `
        })

        cy.get('#ReactDialogShadowContainer').should(element => {
          const [container] = element.get()
          debugger
          expect(
            container.shadowRoot.querySelector('style').innerHTML.replace(/\s/g,'')
          ).to.equal('h1{color:white;}')
        })
      })
    })
  })
})
