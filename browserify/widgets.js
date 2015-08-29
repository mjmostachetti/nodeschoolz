var domify = require('domify')
var inherits = require('inherits')
var EventEmitter = require('events').EventEmitter
var insertCss = require("insert-css")

var html = '<form class="send">' +
        '<textarea type="text" name="msg"></textarea>' +
        '<input type="submit" value="submit">' +
        '</form>'

module.exports = Widget;
inherits(Widget, EventEmitter)
insertCss('.send textarea {background-color: purple;color: yellow;}');

function Widget(){
  if (!(this instanceof Widget)) return new Widget;
  this.element = domify(html)
  this.emit('message')
}

Widget.prototype.appendTo = function(target){
  target.appendChild(this.element)
}

