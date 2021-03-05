## Quickstart

```javascript
const { render } = window.ReactDialog;

render({
  document,
  content: React.createElement('h1', {}, 'I am a dialog!'),
  styles: `
    h1 {
      color: red;
    }
  `
});
```

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
