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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

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
    var _props$configuration, _props$configuration2;

    var blockchains = typeof props.blockchains === 'string' ? JSON.parse(props.blockchains).map(function (name) {
      return Blockchains__default['default'][name];
    }) : (props.blockchains || []).map(function (name) {
      return Blockchains__default['default'][name];
    });

    if ((!blockchains || blockchains.length === 0) && (props !== null && props !== void 0 && (_props$configuration = props.configuration) !== null && _props$configuration !== void 0 && _props$configuration.accept || props !== null && props !== void 0 && (_props$configuration2 = props.configuration) !== null && _props$configuration2 !== void 0 && _props$configuration2.sell)) {
      blockchains = _toConsumableArray(new Set(props.configuration.accept.map(function (item) {
        return item.blockchain;
      }))).map(function (name) {
        return Blockchains__default['default'][name];
      });
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
        className: "SupportedBlockchain",
        style: {
          backgroundColor: blockchain.logoBackgroundColor
        }
      }, /*#__PURE__*/React__default['default'].createElement("img", {
        src: blockchain.logo
      }));
    })));
  });

  var insideStyle = "\n  .ReactShadowDOMInsideContainer {\n    user-select: none;\n  }\n  \n  button {\n    background: #ea357a;\n    border-radius: 32px;\n    border: 1px solid transparent;\n    color: white;\n    cursor: pointer;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 21px;\n    font-weight: 500;\n    min-width: 200px;\n    padding: 11px 32px;\n  }\n\n  button:hover {\n    box-shadow: inset 0 0 500px rgba(0,0,0,0.05);\n  }\n\n  button:active {\n    box-shadow: inset 0 0 500px rgba(0,0,0,0.1);\n  }\n\n  button.round {\n    border-radius: 32px;\n  }\n\n  button.rounded {\n    border-radius: 8px;\n  }\n\n  button.square {\n    border-radius: 0;\n  }\n\n  .Row {\n    line-height: 16px;\n  }\n\n  .SupportedBlockchain {\n    background: white;\n    border-radius: 4px;\n    display: inline-block;\n    height: 20px;\n    margin-right: 5px;\n    margin-top: 5px;\n    overflow: hidden;\n    width: 20px;\n    padding: 1px;\n  }\n\n  .SupportedBlockchain:last-child {\n    margin-right: 0;\n  }\n\n  strong {\n    font-weight: 800;\n    letter-spacing: -0.5px;\n  }\n";

  var outsideStyle = "\n  text-align: center;\n";

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var DePayButton = (function (props) {
    var element = React.useRef(null);
    var label = props.label ? props.label : 'Pay';
    React.useEffect(function () {
      var unmount;

      if (element.current) {
        var _ReactShadowDOM = reactShadowDom.ReactShadowDOM({
          document: document,
          element: element.current,
          content: /*#__PURE__*/React__default['default'].createElement(Button, {
            label: label,
            onClick: onclickHandler,
            configuration: props.configuration || {},
            blockchains: props.blockchains
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
      DePayWidgets__default['default'].Payment(_objectSpread(_objectSpread({}, props.configuration), {}, {
        integration: props.integration,
        payload: props.payload
      }));
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
        DePayWidgets__default['default'].Payment(configuration);
      };

      reactShadowDom.ReactShadowDOM({
        document: document,
        element: element,
        content: /*#__PURE__*/React__default['default'].createElement(Button, {
          label: label,
          onClick: onclickHandler,
          configuration: configuration,
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
