'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');

// Boilerplate code to make your life easier
FamousEngine.init();

// Initialize with a scene; then, add a 'node' to the scene root
var root = FamousEngine.createScene().addChild();
var circle;
var square;
var el;

function addCircle() {
    circle = root.addChild();
    circle.setSizeMode(1,1,1);
    circle.setAbsoluteSize(300, 300);
    el = new DOMElement(circle);
    el.setProperty('border', '5px solid red');
    el.setProperty('border-radius', '50%');
    el.setContent('circle');
}

function addSquare() {
    square = root.addChild();
    square.setSizeMode(1,1,1);
    square.setAbsoluteSize(300, 300);
    square.setPosition(400, 0);
    el = new DOMElement(square);
    el.setProperty('border', '5px solid green');
    el.setContent('square');
}

addCircle();
addSquare();

setTimeout(function (){
    root.removeChild(square);
    root.removeChild(circle)

    setTimeout(function() {

        // Seems like the node that was was allocated to circle
        // gets reallocated to square but the border-radius property
        // doesn't get properly wiped away.
        addSquare();

        setTimeout(function() {
            addCircle();
        }, 750)
    }, 750)
}, 750);
