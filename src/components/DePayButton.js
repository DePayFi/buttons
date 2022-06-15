import Button from './button'
import DePayWidgets from '@depay/widgets'
import insideStyle from '../styles/insideStyle'
import outsideStyle from '../styles/outsideStyle'
import React, { useRef, useEffect } from 'react'
import { ReactShadowDOM } from '@depay/react-shadow-dom'

export default (props)=>{

  let element = useRef(null)

  useEffect(()=>{
    let unmount
    if(element.current) {
      ({ unmount } = ReactShadowDOM({
        document,
        element: element.current,
        content: <Button label={props.label} onClick={onclickHandler} />,
        outsideStyle: outsideStyle,
        insideStyle: insideStyle + " " + props.css
      }))
    }
    return ()=>{ unmount ? unmount() : null }
  }, [element, props])

  const onclickHandler = function () {
    DePayWidgets[props.widget](props.configuration)
  }

  return (
    <div ref={element}/>
  )
}
