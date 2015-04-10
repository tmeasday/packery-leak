window.createPackery = function(times) {
  _.times(times, function() {
    // console.log('creating packery');
    // var $el = $('.platebox');
    var $el = $('<div>');
    $el.packery({
        itemSelector: ".plateitem",
        columnWidth: 2,
        rowHeight: 2
    });
    $el.packery('destroy');
  });
}

Template.hello.helpers({
  show: function() {
    return Session.get('show');
  }
});

Template.hello.events({
  'click .js-toggle': function() {
    Session.set('show', ! Session.get('show'));
  }
});

Template.packed.rendered = function() {
  this.$('div').packery();
}

Template.packed.destroyed = function() {
  this.$('div').packery('destroy');
}