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
  
  this._$body.on('click', function(eventObject) {
    var $target = $(eventObject.target);
    if ($target.is('div.icon')) {
      $siblingTop = $target.siblings('.icon').offset().top || 0;
      $selfTop = $target.offset().top || 0;
      if (Math.abs($siblingTop - $selfTop) <= 5) { // the elements are on same line
        if ($('.'+$target.attr('id')).last().get(0).style.display == 'none') { 
          timeout = setTimeout(function() {
            $($('.'+$target.attr('id')).last().get(0)).stop(true, true).slideDown(100, function() {
              var body = document.body || document.documentElement;console.log(9);
              // body.scrollTop = body.scrollHeight;
            });
          }, 200);
        }
      } else {
        if ($('.'+$target.attr('id')).first().get(0).style.display == 'none') { 
          timeout = setTimeout(function() {
            $($('.'+$target.attr('id')).first().get(0)).stop(true, true).slideDown(100, function() {
              var body = document.body || document.documentElement;console.log(99);
              // body.scrollTop = body.scrollHeight;
            });
          }, 200);
        }
      }
    }
  }.bind(this)).on('mouseout', function(eventObject) {
    var $target = $(eventObject.target);
    if ($target.is('div.icon')) {
      clearTimeout(timeout);
      $('.'+$target.attr('id')).stop(true, true).slideUp('fast');
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


