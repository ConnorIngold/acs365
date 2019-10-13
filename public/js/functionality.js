$(".tab").on('click', function(){
  $('.tab').removeClass('selected')
  $(this).toggleClass("selected")
})