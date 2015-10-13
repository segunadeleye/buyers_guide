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
      if ($('.'+$target.attr('id')).get(0).style.display == 'none') { 
        $('.'+$target.attr('id')).delay(300).slideDown(800, function() {
          var body = document.body || document.documentElement;
          // body.scrollTop = body.scrollHeight;
        });
      }
    }
  }.bind(this)).on('mouseout', function(eventObject) {
    var $target = $(eventObject.target);
    if ($target.is('div.icon')) {
      $('.'+$target.attr('id')).slideUp(250);
    }
  }.bind(this)).on('click', function(eventObject) {
    var $target = $(eventObject.target);
    if ($target.is('.accord-heading') || $target.is('.accord-heading > span')) {
      $('.active').not($target.closest('h6')).removeClass('active');
      $target.closest('h6').toggleClass('active');
      $('.accord-data').not($target.closest('h6').next()).slideUp(500);
      $target.closest('h6').next().slideToggle(500);
    }
  }.bind(this));
}

$(function() {
  new BuyersGuide();
});


