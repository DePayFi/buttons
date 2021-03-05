
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

class Button extends React__default['default'].Component {
    render() {
        return (React__default['default'].createElement("button", null, this.props.label));
    }
}

const init = function () {
    Array.from(document.getElementsByClassName("DePayButton")).forEach((element) => {
        ReactDOM__default['default'].render(React__default['default'].createElement(Button, { label: 'I am a button label' }), element);
    });
};

exports.init = init;
