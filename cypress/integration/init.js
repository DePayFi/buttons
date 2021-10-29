import DePayButtons from '../../src'
import React from 'react'
import ReactDOM from 'react-dom'

describe('init', () => {
  
  it('initalizes a payment button', () => {
  
    cy.visit('cypress/init.payment.button.test.html').then((contentWindow) => {
      cy.document().then((document) => {
        DePayButtons.init({document})
        cy.get('.DePayButton .ReactShadowDOMOutsideContainer').should(element => {
          const [container] = element.get()
          expect(
            container.shadowRoot.querySelector('.ReactShadowDOMInsideContainer button').innerHTML
          ).to.equal('Pay')
        })
      })
    })
  })

  it('initalizes a donation button', () => {
  
    cy.visit('cypress/init.donation.button.test.html').then((contentWindow) => {
      cy.document().then((document) => {
        DePayButtons.init({document})
        cy.get('.DePayButton .ReactShadowDOMOutsideContainer').should(element => {
          const [container] = element.get()
          expect(
            container.shadowRoot.querySelector('.ReactShadowDOMInsideContainer button').innerHTML
          ).to.equal('Donate')
        })
      })
    })
  })

  it('initalizes a sale button', () => {
  
    cy.visit('cypress/init.sale.button.test.html').then((contentWindow) => {
      cy.document().then((document) => {
        DePayButtons.init({document})
        cy.get('.DePayButton .ReactShadowDOMOutsideContainer').should(element => {
          const [container] = element.get()
          expect(
            container.shadowRoot.querySelector('.ReactShadowDOMInsideContainer button').innerHTML
          ).to.equal('Buy')
        })
      })
    })
  })
})
