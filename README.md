![Screenshot 2023-09-16 at 11 28 02](https://github.com/DePayFi/buttons/assets/851393/86939a32-cf49-45f4-b834-01154ce4c04b)

## Quickstart

Visit https://app.depay.com -> Integrations -> New -> Select a button

Configure your button and place html code into your website:

```html
<div
  class="DePayButton" 
  integration="YOUR_INTEGRATION_ID"
/>
<script src="https://integrate.depay.com/buttons/v13.js"></script>
<noscript><a href="https://depay.com">Crypto Payments</a> are only supported with JavaScript enabled.</noscript>
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
- [Optimism](https://www.optimism.io)
- [Arbitrum](https://arbitrum.io)
- [Fantom](https://fantom.foundation)
- [Avalanche](https://www.avax.network)
- [Gnosis](https://gnosis.io)
- [Base](https://base.org)

To indicate available blockchains icons underneath the button, set them via blockchains attribute:

```html
<div
  class="DePayButton"
  integration="YOUR_INTEGRATION_ID"
  blockchains='["ethereum", "bsc", "polygon"]'
/>
```

Will display ethereum, bsc and polygon icon underneath the payment button.

### Wallets

DePay supports [most crypto wallets](https://depay.com/wallets).

## Buttons

Every button can be configured by adding/changing the html attributes 

- `label`: The displayed label of the button

- `configuration`: The configuration passed to the widget

### Payment Button

```html
<div
  class="DePayButton" 
  label="Pay"
  configuration='{"accept":[{"blockchain":"ethereum","amount":20,"token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]}'
/>
<script src="https://integrate.depay.com/buttons/v13.js"></script>
<noscript><a href="https://depay.com">Crypto Payments</a> are only supported with JavaScript enabled.</noscript>
<script>DePayButtons.init({ document });</script>
```

[Read how to configure the widget](https://github.com/DePayFi/widgets#depay-payments)

### Donation Button

Intended to receive donations with having users select the amount they are donating:

```html
<div
  class="DePayButton"
  label="Donate"
  configuration='{"title":"Donation","accept":[{"blockchain":"ethereum","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]}'
></div>
<script src="https://integrate.depay.com/buttons/v13.js"></script>
<noscript><a href="https://depay.com">Crypto Payments</a> are only supported with JavaScript enabled.</noscript>
<script>DePayButtons.init({ document });</script>
```

[Read how to configure the widget](https://github.com/DePayFi/widgets#depay-payments)

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
