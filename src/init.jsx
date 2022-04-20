import Button from './components/button'
import DePayWidgets from '@depay/widgets'
import insideStyle from './styles/insideStyle'
import outsideStyle from './styles/outsideStyle'
import React from 'react'
import { ReactShadowDOM } from '@depay/react-shadow-dom'

export default function ({ document }) {
  Array.from(document.getElementsByClassName('DePayButton')).forEach((element) => {
    const label = element.getAttribute('label') || 'Pay'
    const widget = element.getAttribute('widget') || 'Payment'
    const css = element.getAttribute('css')
    const widgetConfiguration = JSON.parse(element.getAttribute('configuration') || '{}')
    const onclickHandler = function () {
      DePayWidgets[widget](widgetConfiguration)
    }
    ReactShadowDOM({
      document,
      element,
      content: <Button label={label} onClick={onclickHandler} />,
      outsideStyle: outsideStyle,
      insideStyle: insideStyle + " " + css
    })
  })
}
