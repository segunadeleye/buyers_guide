function BuyersGuide() {
  this.constructor();
}

BuyersGuide.prototype.constructor = function() {
  this._$body = $('body');
  this._init();
}

BuyersGuide.prototype._init = function() {
  this._addEventListenerToBody();
}

BuyersGuide.prototype._addEventListenerToBody = function() {
  this._$body.on('mouseover', function(eventObject) {
    var $target = $(eventObject.target);
    if ($target.is('div.icon')) {
      $('.'+$target.attr('id')).delay(300).slideDown(800);
    }
  }.bind(this)).on('mouseout', function(eventObject) {
    var $target = $(eventObject.target);
    if ($target.is('div.icon')) {
      $('.'+$target.attr('id')).slideUp(250);
    }
  }.bind(this));
}

$(function() {
  new BuyersGuide();
});
