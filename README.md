## Quickstart

Just place this on your website. No additional installations required:

```
<div class="DePayButton" label="Pay" widget="Payment" arguments='{"amount": "20", "token": "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb", "receiver": "0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}'></div>
<script src="https://unpkg.com/depay-buttons@1/dist/umd/index.js"></script>
<noscript><a href="https://depay.fi">DePay</a> is currently not supported without JavaScript enabled.</noscript>
<script>DePayButtons.init({document: document});</script>
```

## Buttons

Every button can be configured by adding/changing the html attributes 

- `label`: The displayed label of the button

- `widget`: The name of the widget to be opened on click (see: https://github.com/DePayFi/depay-widgets)

- `arguments`: The arguments passed to the widget

### Payment Button

Intended to perform payments for services and goods:

```
<div class="DePayButton" label="Pay" widget="Payment" arguments='{"amount": "20", "token": "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb", "receiver": "0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}'></div>
<script src="https://unpkg.com/depay-buttons@1/dist/umd/index.js"></script>
<noscript><a href="https://depay.fi">DePay</a> is currently not supported without JavaScript enabled.</noscript>
<script>DePayButtons.init({document: document});</script>
```

[Read how to configure the Payment Widget](https://github.com/DePayFi/depay-widgets#depay-payments)

### Donation Button

Intended to receive donations with having users select the amount they are donating:

```
<div class="DePayButton" label="Donate" widget="Donation" arguments='{"amount": {"start": "10","min": "1","step": "1" }, "token": "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb", "receiver": "0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}'></div>
<script src="https://unpkg.com/depay-buttons@1/dist/umd/index.js"></script>
<noscript><a href="https://depay.fi">DePay</a> is currently not supported without JavaScript enabled.</noscript>
<script>DePayButtons.init({document: document});</script>
```

[Read how to configure the Donation Widget](https://github.com/DePayFi/depay-widgets#depay-donations)

### Sale Button

Intended to directly sell tokens:

```
<div class="DePayButton" label="Buy" widget="Sale" arguments='{"amount": {"start": "10","min": "1","step": "1" }, "token": "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb"}'></div>
<script src="https://unpkg.com/depay-buttons@1/dist/umd/index.js"></script>
<noscript><a href="https://depay.fi">DePay</a> is currently not supported without JavaScript enabled.</noscript>
<script>DePayButtons.init({document: document});</script>
```

[Read how to configure the Sale Widget](https://github.com/DePayFi/depay-widgets#depay-sales)

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
