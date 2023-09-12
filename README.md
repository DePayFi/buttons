https://github.com/DePayFi/buttons/assets/851393/e1df201e-3da9-4bfd-978d-d32d59cb444d

## Quickstart

Visit https://app.depay.com -> Integrations -> New -> Select a button

Configure your button and place html code afterwards:

```html
<div
  class="DePayButton" 
  integration="YOUR-INTEGRATION-ID"
/>
<script src="https://integrate.depay.com/buttons/v12.js"></script>
<noscript><a href="https://depay.com">Web3 Payments</a> are only supported with JavaScript enabled.</noscript>
<script>DePayButtons.init({ document });</script>
```

## Demo

https://depayfi.github.io/buttons/dev.bundle.html

## Support

### Blockchains

- [Ethereum](https://ethereum.org)
- [BNB Smart Chain](https://www.binance.org/smartChain)
- [Polygon](https://polygon.technology)
- [Solana](https://solana.com)

### Wallets

DePay supports [most crypto wallets](https://depay.com/wallets).

## Buttons

Every button can be configured by adding/changing the html attributes 

- `label`: The displayed label of the button

- `widget`: The name of the widget to be opened on click (see: https://github.com/DePayFi/widgets)

- `configuration`: The configuration passed to the widget

### Payment Button

Intended to perform payments for services and goods:

```html
<div
  class="DePayButton" 
  label="Pay"
  widget="Payment"
  configuration='{"accept":[{"blockchain":"ethereum","amount":20,"token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]}'
/>
<script src="https://integrate.depay.com/buttons/v12.js"></script>
<noscript><a href="https://depay.com">Web3 Payments</a> are only supported with JavaScript enabled.</noscript>
<script>DePayButtons.init({ document });</script>
```

[Read how to configure the widget](https://github.com/DePayFi/widgets#depay-payments)

### Donation Button

Intended to receive donations with having users select the amount they are donating:

```html
<div
  class="DePayButton"
  label="Donate"
  widget="Payment"
  configuration='{"title":"Donation","accept":[{"blockchain":"ethereum","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]}'
></div>
<script src="https://integrate.depay.com/buttons/v12.js"></script>
<noscript><a href="https://depay.com">Web3 Payments</a> are only supported with JavaScript enabled.</noscript>
<script>DePayButtons.init({ document });</script>
```

[Read how to configure the widget](https://github.com/DePayFi/widgets#depay-payments)

### Sale Button

Intended to directly sell tokens:

```html
<div
  class="DePayButton"
  label="Buy"
  widget="Sale"
  configuration='{"sell":{"ethereum":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb"}}'
></div>
<script src="https://integrate.depay.com/buttons/v12.js"></script>
<noscript><a href="https://depay.com">Web3 Payments</a> are only supported with JavaScript enabled.</noscript>
<script>DePayButtons.init({ document });</script>
```

[Read how to configure the Sale Widget](https://github.com/DePayFi/widgets#depay-sales)


### css attribute

You can use the css attribute of the button element to declare css rules to style inside elements:

```html
<div 
  class="DePayButton" 
  css="button { background: green; border-radius: 0.4rem; }"
  ...
></div>
```

### Render with React

You can also render DePay Buttons (over initializing them):

```javascript
import DePayButtons from '@depay/buttons'

return(

  <DePayButtons.DePayButton
    label={'Pay'}
    widget={'Payment'}
    configuration={ {"accept":[{"blockchain":"ethereum","amount":20,"token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]} }
  />

)
```

## Development

### Get started

```
yarn install
yarn start
```
