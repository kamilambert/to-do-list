

$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed')
})

// Click on X to delete to-do
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove()
  })
  event.stopPropagation()
})
