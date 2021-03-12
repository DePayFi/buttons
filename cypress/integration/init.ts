import React from 'react'
import { init } from 'src'

describe('init', () => {
  
  it('initalizes a payment button', () => {
  
    cy.visit('cypress/init.payment.button.test.html').then((contentWindow) => {
      cy.document().then((document) => {
        init({document})
        cy.get('.DePayButton .ReactShadowDOMOutsideContainer').should(element => {
          const [container] = element.get()
          expect(
            container.shadowRoot.querySelector('.ReactShadowDOMInsideContainer button').innerHTML
          ).to.equal('Pay')
        })
      })
    })
  })
})
