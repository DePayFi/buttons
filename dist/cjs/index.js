'use strict';

var React = require('react');
var DePayWidgets = require('@depay/widgets');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var DePayWidgets__default = /*#__PURE__*/_interopDefaultLegacy(DePayWidgets);
var ReactDOM__default$1 = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

var Button = (function (props) {
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("button", {
    onClick: props.onClick
  }, props.label)), /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("img", {
    className: "ExampleToken",
    src: "data:image/png;base64,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",
    title: "USDC"
  }), /*#__PURE__*/React__default['default'].createElement("img", {
    className: "ExampleToken",
    src: "data:image/png;base64,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",
    title: "USDT"
  }), /*#__PURE__*/React__default['default'].createElement("img", {
    className: "ExampleToken",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAxlBMVEUAAADvrxDvtQXvtgrvtwvvtwrxuQvxuAvwugvwuQrvtwjwuQvwugvwuQrvuAnvtwjxugvxuwrwuQvxugnvugvwuQvxuwvyuQvxuQrwuwrvtg3vtwzvtQvvuQrwuAvvtgvvuQ3vvxDvuAvwugvvuQrvtwrvuArwuArvuAzvuQzvuAvvtwzvtwvvtgvwuQv33IX////22Hb99uHywin0ykj102f55KP++/D43IXzxjj213bywSr99uDxvRr313bzxjn44JT65KPcDRBMAAAALnRSTlMAEDBQYICPn7/fQM/vr3Agn3/fbzDvj19/r1BAMIC/cFAQkM9QoLCvkIBwgKCQV/fbcAAAAAFiS0dEMK7cLeQAAAAJcEhZcwAALEsAACxLAaU9lqkAAAAHdElNRQfkAwENLSZE4qLAAAAIeUlEQVR42uWd2XrbNhBGQZsSSXGzGSlpQluR7Sxe4rHapC3apIve/6V6YVmVLYkkwJnhgPwfIF/OMTDYREAp5nhHx/5oHIRhFEWwThRFYRiMR/7kyFO9jXfkj4M4gZokcTo6nvSNfZIFERglTrNJP1qD549jsEw8Ps4d/8uPI2iZ+OTY0ZbgZWECOAl95xqCdxoCasIsd+pvDwRxpR1M0Fr+bk6O5Td9OnoAACheSW4GkxQYcjIR2/aBKaEvEN+PgDGFP2h8cQr48UUp4Ov7IhVMO8MHAEi7HhS9MXSck04VvEqg83TYD7pt/VsKOmoEpyAmp138+WMQFP5GcArCwtsI8hjEhbMRSCj+u5llgxn7D+U1y/ZpHoHYcHSDNwkIzox8VvQTCA/taOC9BfFJvWF2f45CMHWCn87AJAFHMntHUv7BoWQDLP/Eg4Fj/OgGnONHNuAgP6oBJ/kRDTjKj2bAWX4kA69I/4sPD6T//Jv2/O9o+ZdLWgNl6/VPQsxPbGB2Jnn997BckhtotzLyOPipDbTZH3jLwk9sIBU6AG7xExuwHgx9Nn5iA28EDgAv+GkNzHJxBXCHn9aAVSEc8/LTGngtawa8l5/WQCapABzgJzVgXAaiDvhJDcRiZgAV/KQGzo06QEf8pAbORHSAGn5KA7GEDlDLT2ngvPsO0ICf0sBZ1x2gET+hgbDjNVBDfkIDWaebQI35l8ufqaZDTdYEJ93z//K1wzVB3mf+JnUw7TV/fR30+81ff1AQ9Zy/rgn4fecH8PkbgCh+KNgbgCz+6iYQDYC/qgn4Q+CvagKRQP5vjE3AF8j/6/I3vrnAXCL/ksDAgbnARCY/hYGSZxmIxE9gIGVZBqLxExjYty/wXi4/voFz+jEQlR/dwGyXfyGaH91ASVwC0fmxDYS0JZCAH9nAzvaoL54f2UBGOAsk4sc1ENL1ADJ+XAPP+0DmBD+qgXOiHkDKj2kgpOkBxPyYBjyKMYCcH9FARtADGPjxDGz1gQuX+NEMbM2FFk7xoxkokdcBbPxYBi43AlBuBfrGx7/8HWUDvUAeBDUf/x+4AyHWVoB2jH9zQnIJnAbk8G+KAN7FYNopfrjCnQU0MiCJ/6kIoB6IaJf41zOBDNgMCONfLweQfxem3eGHALkG1hgQx7+eCgHwGJDH/1gFW9XAP783NkDE/123+f8ftZwHPix/NDVAxf+j1crIV0qN2q3/Ghqg42+1NrxsNQg8rn8bGaDkb2MgaDMIPK3/Gxig5W9h4EoplbTkb2CAmt/ewMx+JbC9/1NjgJ7f3oCnzjD2vyoNcPBbGziynAa83P+rMMDDb2vgg92ZyO7+50EDXPyWBnyracC+/d8DBvj47QyMbPbD9u9/7zfwFx+/lYFL9RFt/3+/AUZ+GwOB+bHg4fOPhgbo+C0MhMYCqs5/Ghmg5Dc3EJr+PrL6/KuBAVp+YwOFoYC6879aA9T8pgYMBdSff9YYoOc3NFAoXP4aAxz8hgYUMn+lAR5+MwMKm7/CABe/kQGFzn/QAB+/iYHmAhof/y855/8Hoim6gO4jv1ER1D3kNxLQyIBj/GA2EdK94zedCuue8RsLqDHgHD8Uxsth3St+i/2ACgMO8kNosSWme8QPgc2mqO4PP1xabYvr3vDDyO5gRPeFH3zLH4jonvBDaXs4qvvBD0fWx+O6F/zg2f9AQveBf9bmJzLafX64UspiJvTcgMv88Knd5xLadX4YtfxqVDvODx+Ush0HH/O32/xQIn8w4ho/kNwh5xD/40dDHwfLD58IPplxiX/9yUw5WP71R1MXg+V/+nY2Hir/Ffans47xbz6d9QfKDx9wb9Bwjh9y1KsE/3GO/2pzgwROEdCO8a+/G0WcCWi3+DclQKmLhNGAGP7tq6TmwGZADn9IcZmcdof/2R3reLNh7Qw/5DTX6WlX+J9fKTkCDgOS+F9cKspykYoofsjpLlXVLvC/vFgYdVtIy+ffeWfjIiE2IIwfctrnJbR0/mDnbnHUncEdA9L4t9YBmySEBsTx73toZgRkBsTx7317E/2ITMvlh70vkX8mMiCQP9j7ykwJJAYE8h96aWlOYUAi/6FHF/GbAGiJ/IdfWyN4bO2rQP6C/81pUfxVLy5GQ+Avunh2XBB/9aurUf/5i25enhfDX/PsLsFcQBh/UfPydNlz/roGQNsEBPCnta/PT3vNv38Z+DzXfeYP6vmRt0e38m/3/EWDBoD/9uYmq6756ysgcR1cdcxfNOMnrIOrTvkhbygAfX/UyAAd/41qnLg7A3T8RXN+ysnAqiv+5h2AthNUGyDkv1FGiTsxQMhfmPGrPOnAACF/khsKoJsOHTZAyA+3yjjX3AYo+a/N+dVFxGuAkr/wLASQloFdA5T85gWAYYNwxcffdA20mzs2A6T8N8o6KZMBUv7Unp+2EP5vgJTfrgBuCiGHAVr+XLXKNCE3QMqftOSnPihYEfPDO9U6tKdlK1r+W4UQ0sGQNjdKDdoAEr+zBtD4HTWAyO+kAVR+Bw0g8ztnAJ2fdo9MzgK4KovEFfykVCTJIzf4i6lSQzZQ5IosF6l8/tRTlLkbYPl/sTgUXQoTX5FHciGg7P5bheBaKv+1p3jyXmQ3SG4VWyR2gzhXnBE3Gtwp5shqBPFU8eduwH9+WY1gPlVdxY+GVfz3NIIvgxn7Dyr4PNDWL6EfzEslI90oKHwlJ/wKROHzKxCHr5RS/nxwfX/ntwQsg2IqFV8ppfJb4p6Q3HlKeBZ0zSCZl8qF5DTVYJ55ypnkGbKD+Z1D9NjtIHHqb78db/Gl9Zcn0X3pKP1TQ1jcW0uI73234TctocxSQwtRkJX9gN+aJi1GaVy7oZ7Ewb0/7Rv7dmuYlv7oPpjPo2gzZ4qiaD4P7kf+gp/8P2trg1ZRAsSHAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAzLTAxVDEzOjQzOjM0KzAwOjAwAEkXAwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMy0wMVQxMzo0MzozNCswMDowMHEUr78AAAAASUVORK5CYII=",
    title: "BUSD"
  }), /*#__PURE__*/React__default['default'].createElement("img", {
    className: "ExampleToken",
    src: "data:image/png;base64,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",
    title: "ETH"
  }), /*#__PURE__*/React__default['default'].createElement("img", {
    className: "ExampleToken",
    src: "data:image/png;base64,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",
    title: "BNB"
  })), /*#__PURE__*/React__default['default'].createElement("a", {
    className: "PoweredBy",
    target: "_blank",
    href: "https://depay.fi?utm_source=".concat(window.location.hostname, "&utm_medium=button&utm_campaign=ButtonV3"),
    title: "Web3 Payments with the power of DeFi. Accept any token with on-the-fly conversion."
  }, "Powered by ", /*#__PURE__*/React__default['default'].createElement("strong", null, "DePay")));
});

var insideStyle = "\n  .ReactShadowDOMInsideContainer {\n    user-select: none;\n  }\n  \n  button {\n    background: #ea357a;\n    border-radius: 2rem;\n    border: 1px solid transparent;\n    color: white;\n    cursor: pointer;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 1.3rem;\n    font-weight: 500;\n    min-width: 200px;\n    padding: 0.7rem 1.4rem;\n  }\n\n  button:hover {\n    box-shadow: inset 0 0 500px rgba(0,0,0,0.05);\n  }\n\n  button:active {\n    box-shadow: inset 0 0 500px rgba(0,0,0,0.1);\n  }\n\n  button.round {\n    border-radius: 2rem;\n  }\n\n  button.rounded {\n    border-radius: 0.4rem;\n  }\n\n  button.square {\n    border-radius: 0;\n  }\n\n  .ExampleToken {\n    border-radius: 999px;\n    height: 22px;\n    margin-right: 6px;\n    margin-top: 6px;\n    overflow: hidden;\n    width: 22px;\n  }\n\n  .PoweredBy {\n    color: rgba(0,0,0,0.2);\n    display: block;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 0.8rem;\n    font-style: italic;\n    line-height: 0.9rem;\n    text-decoration: none;\n  }\n\n  .PoweredBy:hover {\n    color: rgba(0,0,0,0.4);\n  }\n\n  strong {\n    font-weight: 800;\n    letter-spacing: -0.5px;\n  }\n";

var outsideStyle = "\n  text-align: center;\n";

function _interopDefaultLegacy$1 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy$1(ReactDOM__default$1['default']);

const insideContainerClass = 'ReactShadowDOMInsideContainer';

function createInsideContainer({ document, shadow, style }) {
  const container = document.createElement('div');
  container.setAttribute('class', insideContainerClass);
  shadow.appendChild(container);

  if (style && style.length) {
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(style));
    shadow.appendChild(styleElement);
  }

  return container
}

const outsideContainerClass = 'ReactShadowDOMOutsideContainer';

function createOutsideContainer({ document, element, style }) {
  const container = document.createElement('div');
  container.setAttribute('class', outsideContainerClass);
  container.setAttribute('style', style);
  element.appendChild(container);
  return container
}

function createShadow(container) {
  let shadow;

  if (container.shadowRoot) {
    shadow = container.shadowRoot;
  } else {
    shadow = container.attachShadow({ mode: 'open' });
  }

  return shadow
}

function trimStyle(style) {
  return style.replace(/\s*[\r\n]\s*/g, '')
}

function unmount(outsideContainer) {

  if (outsideContainer && outsideContainer.shadowRoot) {
    const shadowRoot = outsideContainer.shadowRoot;

    if (shadowRoot) {
      const insideContainer = shadowRoot.childNodes[0];
      if (insideContainer) {
        ReactDOM__default['default'].unmountComponentAtNode(insideContainer);
      }
    }

    outsideContainer.remove();
  }
}

function ReactShadowDOM({ document, element, content, outsideStyle = '', insideStyle = '' }) {
  const outsideContainer = createOutsideContainer({
    document,
    element,
    style: trimStyle(outsideStyle),
  });

  const shadow = createShadow(outsideContainer);

  const insideContainer = createInsideContainer({ document, shadow, style: trimStyle(insideStyle) });

  if (typeof content === 'function') {
    content = content(insideContainer);
  }

  ReactDOM__default['default'].render(content, insideContainer);

  return { content, unmount: () => unmount(outsideContainer) }
}

var ReactShadowDOM_1 = ReactShadowDOM;

function init (_ref) {
  var document = _ref.document;
  Array.from(document.getElementsByClassName('DePayButton')).forEach(function (element) {
    var label = element.getAttribute('label') || 'Pay';
    var widget = element.getAttribute('widget') || 'Payment';
    var widgetConfiguration = JSON.parse(element.getAttribute('configuration') || '{}');

    var onclickHandler = function onclickHandler() {
      DePayWidgets__default['default'][widget](widgetConfiguration);
    };

    ReactShadowDOM_1({
      document: document,
      element: element,
      content: /*#__PURE__*/React__default['default'].createElement(Button, {
        label: label,
        onClick: onclickHandler
      }),
      outsideStyle: outsideStyle,
      insideStyle: insideStyle
    });
  });
}

var DePayButtons = {
  init: init
};

module.exports = DePayButtons;
