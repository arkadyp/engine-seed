'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');

// Boilerplate code to make your life easier
FamousEngine.init();

// Initialize with a scene; then, add a 'node' to the scene root
var scene = FamousEngine.createScene().addChild();

var outerNode = scene.addChild();
outerNode.setSizeMode('absolute', 'absolute', 'absolute');
outerNode.setAbsoluteSize(300, 300);
outerNode.setPosition(100, 100);
var outerNodeDOM = new DOMElement(outerNode);
outerNodeDOM.setProperty('border', '1px solid black');

var modifierNodeSync;
var innerNodeSync;
var innerNodeSyncDOM;
function addModifierPlusNodeSync() {
    modifierNodeSync = outerNode.addChild();
    innerNodeSync = modifierNodeSync.addChild();
    innerNodeSync.setSizeMode('absolute', 'absolute', 'absolute');
    innerNodeSync.setAbsoluteSize(100, 100);
    innerNodeSyncDOM = new DOMElement(innerNodeSync);
    innerNodeSyncDOM.setProperty('background-color', 'red');
    innerNodeSyncDOM.setContent('I should be inside the box [sync]');
}

addModifierPlusNodeSync();
outerNode.removeChild(modifierNodeSync);
addModifierPlusNodeSync();

var modifierNodeAsync;
var innerNodeAsync;
var innerNodeAsyncDOM;
function addModifierPlusNodeAsync() {
    modifierNodeAsync = outerNode.addChild();
    innerNodeAsync = modifierNodeAsync.addChild();
    innerNodeAsync.setSizeMode('absolute', 'absolute', 'absolute');
    innerNodeAsync.setAbsoluteSize(100, 100);
    innerNodeAsync.setPosition(200, 0);
    innerNodeAsyncDOM = new DOMElement(innerNodeAsync);
    innerNodeAsyncDOM.setProperty('background-color', 'green');
    innerNodeAsyncDOM.setContent('I should be inside the box [async]');
}

addModifierPlusNodeAsync();
setTimeout(function(){
    outerNode.removeChild(modifierNodeAsync);
    addModifierPlusNodeAsync();
}, 1);


