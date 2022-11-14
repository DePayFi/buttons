import Button from './components/button'
import DePayWidgets from '@depay/widgets'
import insideStyle from './styles/insideStyle'
import outsideStyle from './styles/outsideStyle'
import React from 'react'
import { ReactShadowDOM } from '@depay/react-shadow-dom'

export default function ({ document }) {
  Array.from(document.getElementsByClassName('DePayButton')).forEach((element) => {
    if(element.getAttribute('initialized')){ return }
    element.setAttribute('initialized', true)
    const label = element.getAttribute('label') || 'Pay'
    const widget = element.getAttribute('widget') || 'Payment'
    const css = element.getAttribute('css')
    const configuration = JSON.parse(element.getAttribute('configuration') || '{}')
    const onclickHandler = function () {
      DePayWidgets[widget](configuration)
    }
    ReactShadowDOM({
      document,
      element,
      content: <Button label={label} onClick={onclickHandler} configuration={configuration} widget={widget} />,
      outsideStyle: outsideStyle,
      insideStyle: insideStyle + " " + css
    })
  })
}
