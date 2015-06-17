'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');

// Boilerplate code to make your life easier
FamousEngine.init();

var root = FamousEngine.createScene().addChild();
root.setSizeMode(1, 1, 1);
root.setAbsoluteSize(400, 400);

var children = [];
var child;
var domEl;
for (var i = 0; i < 20; i++) {
    child = root.addChild();
    if (i > 0) {
        child.setPosition(Math.random() * 800, Math.random() * 800);
    }
    child.setSizeMode(1, 1, 1);
    child.setAbsoluteSize(50, 50);
    children.push(child);
    domEl = new DOMElement(child);
    domEl.setProperty('background-color', 'black');
    domEl.setProperty('color', 'white');
    domEl.setContent(i);
}

setTimeout(function(){
    domEl = new DOMElement(root);
    domEl.setProperty('border', '1px solid black');
    domEl.setProperty('overflow', 'scroll');
}, 500);

setTimeout(function(){
    root.removeChild(children[0]);
}, 1000);