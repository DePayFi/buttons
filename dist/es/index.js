import React from 'react';
import DePayWidgets from 'depay-widgets';
import ReactShadowDOM from 'depay-react-shadow-dom';

class Button extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("button", { onClick: this.props.onClick }, this.props.label)),
            React.createElement("div", null,
                React.createElement("img", { className: "ExampleToken", src: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png" }),
                React.createElement("img", { className: "ExampleToken", src: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png" }),
                React.createElement("img", { className: "ExampleToken", src: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png" }),
                React.createElement("img", { className: "ExampleToken", src: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png" }),
                React.createElement("img", { className: "ExampleToken", src: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png" })),
            React.createElement("a", { className: "PoweredBy", target: "_blank", href: "https://depay.fi", title: "Accept and perform crypto payments with DePay" },
                "Powered by ",
                React.createElement("strong", null, "DePay"))));
    }
}

const insideStyle = `
  .ReactShadowDOMInsideContainer {
    user-select: none;
  }
  
  button {
    background: #ea357a;
    border-radius: 2rem;
    border: 1px solid transparent;
    color: white;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1.3rem;
    font-weight: 500;
    min-width: 200px;
    padding: 0.7rem 1.4rem;
  }

  button:hover {
    box-shadow: inset 0 0 500px rgba(0,0,0,0.05);
  }

  button:active {
    box-shadow: inset 0 0 500px rgba(0,0,0,0.1);
  }

  button.round {
    border-radius: 2rem;
  }

  button.rounded {
    border-radius: 0.4rem;
  }

  button.square {
    border-radius: 0;
  }

  .ExampleToken {
    height: 22px;
    width: 22px;
    margin-right: 6px;
    margin-top: 6px;
  }

  .PoweredBy {
    color: rgba(0,0,0,0.3);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 0.8rem;
    font-style: italic;
    text-decoration: none;
  }

  .PoweredBy:hover {
    color: rgba(0,0,0,0.4);
  }

  strong {
    font-weight: 800;
    letter-spacing: -0.5px;
  }
`;

const outsideStyle = `
  text-align: center;
`;

const init = function ({ document }) {
    Array.from(document.getElementsByClassName('DePayButton')).forEach((element) => {
        const label = element.getAttribute('label') || 'Pay';
        const widget = element.getAttribute('widget') || 'Payment';
        const widgetArguments = JSON.parse(element.getAttribute('arguments') || '{}');
        const onclickHandler = function () {
            DePayWidgets[widget](widgetArguments);
        };
        ReactShadowDOM({
            document,
            element,
            content: React.createElement(Button, { label: label, onClick: onclickHandler }),
            outsideStyle: outsideStyle,
            insideStyle: insideStyle,
        });
    });
};

export { init };
