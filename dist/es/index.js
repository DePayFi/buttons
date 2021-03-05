
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    render() {
        return (React.createElement("button", null, this.props.label));
    }
}

const init = function () {
    Array.from(document.getElementsByClassName("DePayButton")).forEach((element) => {
        ReactDOM.render(React.createElement(Button, { label: 'I am a button label' }), element);
    });
};

export { init };
