import React, { useRef, useEffect } from 'react';
import Blockchains from '@depay/web3-blockchains';
import DePayWidgets from '@depay/widgets';
import { ReactShadowDOM } from '@depay/react-shadow-dom';
import m from 'react-dom';

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var Button = (function (props) {
  var blockchains = props.blockchains ? JSON.parse(props.blockchains).map(function (name) {
    return Blockchains[name];
  }) : [];

  if (!blockchains || blockchains.length === 0) {
    switch (props.widget) {
      case 'Payment':
      case 'Donation':
        blockchains = _toConsumableArray(new Set(props.configuration.accept.map(function (item) {
          return item.blockchain;
        }))).map(function (name) {
          return Blockchains[name];
        });
        break;

      case 'Sale':
        blockchains = Object.keys(props.configuration.sell).map(function (name) {
          return Blockchains[name];
        });
        break;
    }
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "Row"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: props.onClick
  }, props.label)), /*#__PURE__*/React.createElement("div", {
    className: "Row"
  }, blockchains.map(function (blockchain) {
    return /*#__PURE__*/React.createElement("div", {
      key: blockchain.name,
      title: blockchain.label,
      className: "SupportedBlockchain",
      style: {
        backgroundColor: blockchain.logoBackgroundColor
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: blockchain.logo
    }));
  })));
});

var insideStyle = "\n  .ReactShadowDOMInsideContainer {\n    user-select: none;\n  }\n  \n  button {\n    background: #ea357a;\n    border-radius: 32px;\n    border: 1px solid transparent;\n    color: white;\n    cursor: pointer;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 21px;\n    font-weight: 500;\n    min-width: 200px;\n    padding: 11px 32px;\n  }\n\n  button:hover {\n    box-shadow: inset 0 0 500px rgba(0,0,0,0.05);\n  }\n\n  button:active {\n    box-shadow: inset 0 0 500px rgba(0,0,0,0.1);\n  }\n\n  button.round {\n    border-radius: 32px;\n  }\n\n  button.rounded {\n    border-radius: 8px;\n  }\n\n  button.square {\n    border-radius: 0;\n  }\n\n  .Row {\n    line-height: 16px;\n  }\n\n  .SupportedBlockchain {\n    background: white;\n    border-radius: 4px;\n    display: inline-block;\n    height: 20px;\n    margin-right: 5px;\n    margin-top: 5px;\n    overflow: hidden;\n    width: 20px;\n    padding: 1px;\n  }\n\n  .SupportedBlockchain:last-child {\n    margin-right: 0;\n  }\n\n  strong {\n    font-weight: 800;\n    letter-spacing: -0.5px;\n  }\n";

var outsideStyle = "\n  text-align: center;\n";

var DePayButton = (function (props) {
  var element = useRef(null);
  useEffect(function () {
    var unmount;

    if (element.current) {
      var _ReactShadowDOM = ReactShadowDOM({
        document: document,
        element: element.current,
        content: /*#__PURE__*/React.createElement(Button, {
          label: props.label,
          onClick: onclickHandler,
          widget: props.widget,
          configuration: props.configuration
        }),
        outsideStyle: outsideStyle,
        insideStyle: insideStyle + " " + props.css
      });

      unmount = _ReactShadowDOM.unmount;
    }

    return function () {
      unmount ? unmount() : null;
    };
  }, [element, props]);

  var onclickHandler = function onclickHandler() {
    DePayWidgets[props.widget](props.configuration);
  };

  return /*#__PURE__*/React.createElement("div", {
    ref: element
  });
});

function init (_ref) {
  var document = _ref.document;
  Array.from(document.getElementsByClassName('DePayButton')).forEach(function (element) {
    if (element.getAttribute('initialized')) {
      return;
    }

    element.setAttribute('initialized', true);
    var label = element.getAttribute('label') || 'Pay';
    var widget = element.getAttribute('widget') || 'Payment';
    var blockchains = element.getAttribute('blockchains');
    var integration = element.getAttribute('integration');
    var payload = element.getAttribute('payload');
    var css = element.getAttribute('css');
    var configuration = JSON.parse(element.getAttribute('configuration') || '{}');

    if (integration) {
      configuration['integration'] = integration;
    }

    if (payload) {
      configuration['payload'] = payload;
    }

    var onclickHandler = function onclickHandler() {
      DePayWidgets[widget](configuration);
    };

    ReactShadowDOM({
      document: document,
      element: element,
      content: /*#__PURE__*/React.createElement(Button, {
        label: label,
        onClick: onclickHandler,
        configuration: configuration,
        widget: widget,
        blockchains: blockchains
      }),
      outsideStyle: outsideStyle,
      insideStyle: insideStyle + " " + css
    });
  });
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var client = createCommonjsModule(function (module, exports) {


{
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
}
});

var DePayButtons = {
  init: init,
  DePayButton: DePayButton,
  React: React,
  createRoot: client.createRoot,
  DePayWidgets: DePayWidgets
};

export default DePayButtons;
