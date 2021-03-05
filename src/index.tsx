import Button from './components/button'
import React from 'react'
import ReactDOM from 'react-dom'

function Pay() {

}

const init = function (): void {
  Array.from(document.getElementsByClassName("DePayButton")).forEach((element)=>{
    ReactDOM.render(
      <Button label={'I am a button label'} />,
      element,
    )
  })
}

export { init }
