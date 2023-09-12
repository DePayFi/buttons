import Button from './button'
import DePayWidgets from '@depay/widgets'
import insideStyle from '../styles/insideStyle'
import outsideStyle from '../styles/outsideStyle'
import React, { useRef, useEffect } from 'react'
import { ReactShadowDOM } from '@depay/react-shadow-dom'

export default (props)=>{

  let element = useRef(null)

  let widget = props.widget ? props.widget : 'Payment'
  let label = props.label ? props.label : 'Pay'

  useEffect(()=>{
    let unmount
    if(element.current) {
      ({ unmount } = ReactShadowDOM({
        document,
        element: element.current,
        content: <Button label={label} onClick={onclickHandler} widget={widget} configuration={props.configuration} />,
        outsideStyle: outsideStyle,
        insideStyle: insideStyle + " " + props.css
      }))
    }
    return ()=>{ unmount ? unmount() : null }
  }, [element, props])

  const onclickHandler = function () {
    DePayWidgets[widget](props.configuration)
  }

  return (
    <div ref={element}/>
  )
}
