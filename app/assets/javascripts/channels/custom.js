$(document).ready(function(){
  $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
});
$(document).on('click', 'span.clickable', function(e){
    var $this = $(this);
  if(!$this.hasClass('panel-collapsed')) {
    $this.parents('.offer').find('.offer-content').slideUp();
    $this.parents('.offer').find('.offer-footer').slideUp();
    $this.addClass('panel-collapsed');
    $this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
  } else {
    $this.parents('.offer').find('.offer-content').slideDown();
    $this.parents('.offer').find('.offer-footer').slideDown();
    $this.removeClass('panel-collapsed');
    $this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
  }
})
