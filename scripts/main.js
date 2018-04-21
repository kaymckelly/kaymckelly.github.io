// putting dynamic content in the modal for lightbox-style viewing of larger screenshots
$(document).ready(function() {
  $(a.lightbox).click(function(event) {
    event.preventDefault();
    var content = $('.modal-body');
    content.empty();

    content.html($(this).html());
  })
})


// $('#exampleModalCenter').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget);
//   var recipient = button.data('whatever');
//   var modal = $(this);
//   modal.find('.modal-body').text('the message is ' + recipient);
//   modal.find('.modal-body').val(recipient);
// });
