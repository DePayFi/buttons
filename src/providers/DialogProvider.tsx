import React from 'react'
import DialogContext from '../contexts/DialogContext'

interface DialogProviderProps {
  closeContainer: () => void
}

class DialogProvider extends React.Component<DialogProviderProps> {
  state = {
    closable: true,
  }

  setClosable(closable: boolean): void {
    this.setState({
      closable,
    })
  }

  render(): React.ReactNode {
    return (
      <DialogContext.Provider
        value={{
          closeContainer: this.props.closeContainer,
          setClosable: this.setClosable.bind(this),
          closable: this.state.closable,
        }}
      >
        {this.props.children}
      </DialogContext.Provider>
    )
  }
}

export default DialogProvider
