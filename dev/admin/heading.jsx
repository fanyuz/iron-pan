const React = require('react');
const ReactDOM = require('react-dom');
const nav = require('./common.jsx');
ReactDOM.render(
    <nav.AppNav>
        <div className="des">
            <h1>heading</h1>
        </div>
    </nav.AppNav>
    , document.querySelector('#page'));