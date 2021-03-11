import React from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
}

class Button extends React.Component<ButtonProps> {
  render(): React.ReactNode {
    return (
      <div>
        <div>
          <button onClick={this.props.onClick}>{this.props.label}</button>
        </div>
        <div>
          <img
            className="ExampleToken"
            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
          />
          <img
            className="ExampleToken"
            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
          />
          <img
            className="ExampleToken"
            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
          />
          <img
            className="ExampleToken"
            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
          />
          <img
            className="ExampleToken"
            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png"
          />
        </div>
        <a
          className="PoweredBy"
          target="_blank"
          href="https://depay.fi"
          title="Accept and perform crypto payments with DePay"
        >
          Powered by <strong>DePay</strong>
        </a>
      </div>
    )
  }
}

export default Button
