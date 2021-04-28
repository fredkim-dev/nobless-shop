/***************************/
/* CONTACT PAGE MANAGEMENT */
/***************************/

const contactPage = function mainFunctions() {
  // Ajax call when contact form is submitted
  $('#contactPage form button').on('click', function(e) {
    e.preventDefault();
    const form = $(this).closest('form');
    $(form).addClass('loading');
    $.ajax({
      type: "POST",
      url: form.attr('action'),
      data: form.serialize(),
      success: function(response) {
        $('#contactResponseModal .modal-body div').html(response);
        $('#contactResponseModal').modal('show');
        // Delete all errors of form when success
        $('#contactPage [name^="sylius_contact"]').val('').prop( "checked", false );
        $('#contactPage [name^="sylius_contact"], #contactPage [for^="sylius_contact_"]').removeClass('is-invalid');
        $('#contactPage span.invalid-feedback').remove();
        $(form).removeClass('loading');
      },
      error: function(error) {
        if (error.status === 406) {
          $('#contactPage span.invalid-feedback').remove();
          const errorList = $($.parseHTML(error.responseText)[1]).find('span').toArray();
          errorList.forEach(error => {
            if (error.outerText !== '') {
              if (error.className !== 'acceptCgv') {
                $('#sylius_contact_' + error.className)
                  .addClass('is-invalid')
                  .after('<span class="invalid-feedback d-block">' + error.outerText + '</span>');
              } else {
                $('#sylius_contact_' + error.className)
                  .next('label')
                  .addClass('is-invalid');
              }
            }
          });
        }

        if (error.status === 417) {
          $('#contactPage .contact-error').html($.parseHTML(error.responseText)[1]);
        }

        $(form).removeClass('loading');
      }
    })
  });

  // Add new field when chosen subject is "other"
  $('#sylius_contact_subject').on('change', function(e) {
    if($(e.target).val() === 'other') {
      $('.other-subject').show();
    } else {
      $('.other-subject').hide();
    }
  });
}

export default contactPage;
