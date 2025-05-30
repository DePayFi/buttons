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
    const blockchains = element.getAttribute('blockchains')
    const integration = element.getAttribute('integration')
    const payload = element.getAttribute('payload')
    const css = element.getAttribute('css')
    const configuration = JSON.parse(element.getAttribute('configuration') || '{}')
    if(integration) { configuration['integration'] = integration }
    if(payload) { configuration['payload'] = payload }
    const onclickHandler = function () {
      DePayWidgets.Payment(configuration)
    }
    ReactShadowDOM({
      document,
      element,
      content: <Button label={label} onClick={onclickHandler} configuration={configuration} blockchains={blockchains} />,
      outsideStyle: outsideStyle,
      insideStyle: insideStyle + " " + css
    })
  })
}
