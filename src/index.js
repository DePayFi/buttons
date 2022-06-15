import DePayButton from './components/DePayButton'
import DePayWidgets from '@depay/widgets'
import init from './init'
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

let DePayButtons = {
  init,
  DePayButton,
  React,
  createRoot: ReactDOMClient.createRoot,
  DePayWidgets
}

export default DePayButtons
