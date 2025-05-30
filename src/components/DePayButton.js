import Button from './button'
import DePayWidgets from '@depay/widgets'
import insideStyle from '../styles/insideStyle'
import outsideStyle from '../styles/outsideStyle'
import React, { useRef, useEffect } from 'react'
import { ReactShadowDOM } from '@depay/react-shadow-dom'

export default (props)=>{

  let element = useRef(null)

  let label = props.label ? props.label : 'Pay'

  useEffect(()=>{
    let unmount
    if(element.current) {
      ({ unmount } = ReactShadowDOM({
        document,
        element: element.current,
        content: <Button label={label} onClick={onclickHandler} configuration={props.configuration || {}} blockchains={props.blockchains} />,
        outsideStyle: outsideStyle,
        insideStyle: insideStyle + " " + props.css
      }))
    }
    return ()=>{ unmount ? unmount() : null }
  }, [element, props])

  const onclickHandler = function () {
    DePayWidgets.Payment({...props.configuration, integration: props.integration, payload: props.payload })
  }

  return (
    <div ref={element}/>
  )
}
