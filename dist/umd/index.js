(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('@depay/web3-blockchains'), require('@depay/widgets'), require('@depay/react-shadow-dom'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['react', '@depay/web3-blockchains', '@depay/widgets', '@depay/react-shadow-dom', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.DePayButtons = factory(global.React, global.Web3Blockchains, global.DePayWidgets, global.ReactShadowDOM, global.ReactDOM));
}(this, (function (React, Blockchains, DePayWidgets, reactShadowDom, m) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var Blockchains__default = /*#__PURE__*/_interopDefaultLegacy(Blockchains);
  var DePayWidgets__default = /*#__PURE__*/_interopDefaultLegacy(DePayWidgets);
  var m__default = /*#__PURE__*/_interopDefaultLegacy(m);

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
    var blockchains = [];

    switch (props.widget) {
      case 'Payment':
      case 'Donation':
        blockchains = _toConsumableArray(new Set(props.configuration.accept.map(function (item) {
          return item.blockchain;
        }))).map(function (name) {
          return Blockchains__default['default'].findByName(name);
        });
        break;

      case 'Sale':
        blockchains = Object.keys(props.configuration.sell).map(function (name) {
          return Blockchains__default['default'].findByName(name);
        });
        break;
    }

    return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "Row"
    }, /*#__PURE__*/React__default['default'].createElement("button", {
      onClick: props.onClick
    }, props.label)), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "Row"
    }, blockchains.map(function (blockchain) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: blockchain.name,
        title: blockchain.label,
        className: "SupportedBlockchain"
      }, /*#__PURE__*/React__default['default'].createElement("img", {
        src: blockchain.logo
      }));
    })));
  });

  var insideStyle = "\n  .ReactShadowDOMInsideContainer {\n    user-select: none;\n  }\n  \n  button {\n    background: #ea357a;\n    border-radius: 32px;\n    border: 1px solid transparent;\n    color: white;\n    cursor: pointer;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 21px;\n    font-weight: 500;\n    min-width: 200px;\n    padding: 11px 32px;\n  }\n\n  button:hover {\n    box-shadow: inset 0 0 500px rgba(0,0,0,0.05);\n  }\n\n  button:active {\n    box-shadow: inset 0 0 500px rgba(0,0,0,0.1);\n  }\n\n  button.round {\n    border-radius: 32px;\n  }\n\n  button.rounded {\n    border-radius: 8px;\n  }\n\n  button.square {\n    border-radius: 0;\n  }\n\n  .Row {\n    line-height: 16px;\n  }\n\n  .SupportedBlockchain {\n    background: white;\n    border-radius: 999px;\n    display: inline-block;\n    height: 22px;\n    margin-right: 4px;\n    margin-top: 4px;\n    overflow: hidden;\n    width: 22px;\n    padding: 1px;\n  }\n\n  .SupportedBlockchain:last-child {\n    margin-right: 0;\n  }\n\n  .PoweredBy {\n    color: rgba(0,0,0,0.2);\n    display: inline-block;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 12px;\n    font-style: italic;\n    line-height: 28px;\n    position: relative;\n    text-decoration: none;\n    top: -5px;\n  }\n\n  .PoweredBy:hover {\n    color: rgba(0,0,0,0.4);\n  }\n\n  strong {\n    font-weight: 800;\n    letter-spacing: -0.5px;\n  }\n";

  var outsideStyle = "\n  text-align: center;\n";

  var DePayButton = (function (props) {
    var element = React.useRef(null);
    React.useEffect(function () {
      var unmount;

      if (element.current) {
        var _ReactShadowDOM = reactShadowDom.ReactShadowDOM({
          document: document,
          element: element.current,
          content: /*#__PURE__*/React__default['default'].createElement(Button, {
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
      DePayWidgets__default['default'][props.widget](props.configuration);
    };

    return /*#__PURE__*/React__default['default'].createElement("div", {
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
      var css = element.getAttribute('css');
      var configuration = JSON.parse(element.getAttribute('configuration') || '{}');

      var onclickHandler = function onclickHandler() {
        DePayWidgets__default['default'][widget](configuration);
      };

      reactShadowDom.ReactShadowDOM({
        document: document,
        element: element,
        content: /*#__PURE__*/React__default['default'].createElement(Button, {
          label: label,
          onClick: onclickHandler,
          configuration: configuration,
          widget: widget
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
    exports.createRoot = m__default['default'].createRoot;
    exports.hydrateRoot = m__default['default'].hydrateRoot;
  }
  });

  var DePayButtons = {
    init: init,
    DePayButton: DePayButton,
    React: React__default['default'],
    createRoot: client.createRoot,
    DePayWidgets: DePayWidgets__default['default']
  };

  return DePayButtons;

})));
