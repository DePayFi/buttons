const insideStyle = `
  .ReactShadowDOMInsideContainer {
    user-select: none;
  }
  
  button {
    background: #ea357a;
    border-radius: 32px;
    border: 1px solid transparent;
    color: white;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 21px;
    font-weight: 500;
    min-width: 200px;
    padding: 11px 32px;
  }

  button:hover {
    box-shadow: inset 0 0 500px rgba(0,0,0,0.05);
  }

  button:active {
    box-shadow: inset 0 0 500px rgba(0,0,0,0.1);
  }

  button.round {
    border-radius: 32px;
  }

  button.rounded {
    border-radius: 8px;
  }

  button.square {
    border-radius: 0;
  }

  .Row {
    line-height: 16px;
  }

  .SupportedBlockchain {
    background: white;
    border-radius: 4px;
    display: inline-block;
    height: 20px;
    margin-right: 5px;
    margin-top: 5px;
    overflow: hidden;
    width: 20px;
    padding: 1px;
  }

  .SupportedBlockchain:last-child {
    margin-right: 0;
  }

  strong {
    font-weight: 800;
    letter-spacing: -0.5px;
  }
`

export default insideStyle
