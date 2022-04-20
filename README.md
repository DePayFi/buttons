## Quickstart

Just place this on your website. No additional installations required:

```html
<div
  class="DePayButton"
  label="Pay"
  widget="Payment"
  configuration='{"accept":[{"blockchain":"ethereum","amount":20,"token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]}'
></div>
<script src="https://integrate.depay.fi/buttons/v6.js"></script>
<noscript><a href="https://depay.fi">Web3 Payments</a> are currently not supported without JavaScript enabled.</noscript>
<script>DePayButtons.init({document: document});</script>
```

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
></div>
<script src="https://integrate.depay.fi/buttons/v6.js"></script>
<noscript><a href="https://depay.fi">Web3 Payments</a> are currently not supported without JavaScript enabled.</noscript>
<script>DePayButtons.init({document: document});</script>
```

[Read how to configure the Payment Widget](https://github.com/DePayFi/widgets#depay-payments)

### Donation Button

Intended to receive donations with having users select the amount they are donating:

```html
<div
  class="DePayButton"
  label="Donate"
  widget="Donation"
  configuration='{"accept":[{"blockchain":"ethereum","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]}'
></div>
<script src="https://integrate.depay.fi/buttons/v6.js"></script>
<noscript><a href="https://depay.fi">Web3 Payments</a> are currently not supported without JavaScript enabled.</noscript>
<script>DePayButtons.init({document: document});</script>
```

[Read how to configure the Donation Widget](https://github.com/DePayFi/widgets#depay-donations)

### Sale Button

Intended to directly sell tokens:

```html
<div
  class="DePayButton"
  label="Buy"
  widget="Sale"
  configuration='{"sell":{"ethereum":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb"}}'
></div>
<script src="https://integrate.depay.fi/buttons/v6.js"></script>
<noscript><a href="https://depay.fi">Web3 Payments</a> are currently not supported without JavaScript enabled.</noscript>
<script>DePayButtons.init({document: document});</script>
```

[Read how to configure the Sale Widget](https://github.com/DePayFi/widgets#depay-sales)

## Development

### Get started

```
yarn install
yarn start
```

### Release

```
npm publish
```
