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
  timeout = null;
  
  this._$body.on('mouseover', function(eventObject) {
    var $target = $(eventObject.target);
    if ($target.is('div.icon') || $target.is('div.icon p')) {
      if ($('.'+$target.closest('div').attr('id')).get(0).style.display == 'none') { 
        timeout = setTimeout(function() {
          $('.'+$target.closest('div').attr('id')).stop(true, true).slideDown(350, function() {
            var body = document.body || document.documentElement;
            // body.scrollTop = body.scrollHeight;
          });
        }, 600);
      }
    }
  }.bind(this)).on('mouseout', function(eventObject) {
    var $target = $(eventObject.target);
    if ($target.is('div.icon') || $target.is('div.icon p')) {
      clearTimeout(timeout);
      $('.'+$target.closest('div').attr('id')).stop(true, true).slideUp('fast');
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


