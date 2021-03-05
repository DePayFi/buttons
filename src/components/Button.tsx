import React from 'react'

interface ButtonProps {
  label: string
}

class Button extends React.Component<ButtonProps> {

  render(): React.ReactNode {
    return(
      <button>
        { this.props.label }
      </button>
    )
  }
}

export default Button
