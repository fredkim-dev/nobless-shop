/*************************/
/* LOGIN PAGE MANAGEMENT */
/*************************/
import { SyliusLoadableForm } from './sylius-loadable-forms';

const loginPage = function mainFunctions() {
  // Open reset password modal
  $('.reset-password-open').on('click', function(e) {
    e.preventDefault();
    const modalId = $(this).data('modalId');
    $(modalId).modal('show');
    $('.header-dropdown').removeClass('show');
  })

  // Only when class login-form exists in page
  if($('.login-form')) {
    $('.submit-login').on('click', function(e) {
      e.preventDefault();
      const formElement = $(this).data('form');
      $(formElement).submit();
    });
  }

  // Only when class verify-account exists in page
  const verifyAccountObject = $('.verify-account');
  if(verifyAccountObject) {
    verifyAccountObject.on('click', function(e) {
      e.preventDefault();
      $(this).closest('form').submit();
    });
  }

  // Only when resetPasswordSubmit button exists in page, Ajax call to reset password
  if ($('#resetPasswordSubmit')) {
    loadAjaxPasswordReset();

    // Actions when modal is closed
    $('#resetPasswordModal').on('show.bs.modal', function(e) {
      if (!$('.modal-content').hasClass('is-success')) {
        // Ajax load
        const modalBody = $('.reset-password .modal-dialog .modal-body');
        const overlay = document.querySelector('[data-js-loading-overlay]');
        const url = $(this).data('ajax-password-request-url');
        $('form.loadable', this).addClass('loading');
        $.ajax({
          type: "GET",
          url,
          success: function(response) {
            modalBody.html(response);
            loadAjaxPasswordReset();
            SyliusLoadableForm($('form.loadable', modalBody)[0]);
          }
        })
      }
    }).on('hide.bs.modal', function (e) {
      $('.reset-password .modal-dialog input.form-control').removeClass('is-invalid');
      $('.reset-password .modal-dialog form').removeClass('loading');
      $('.reset-password .modal-dialog form input').val('');
      $('.reset-password .modal-dialog .form-error-message').html('');
    })
  }

  // Check if email is valid before submit register form
  $('button.submit-register').on('click', function(e) {
    e.preventDefault();
    const regex = /\S+@\S+\.\S+/;
    const registerForm = $($(e.target).data('form'));
    const inputRegisterForm = registerForm.find('input');
    const email = inputRegisterForm.val();
    const invalidSpan = inputRegisterForm.closest('div').next('span');
    if (regex.test(email)) {
      invalidSpan.removeClass('d-block');
      inputRegisterForm.removeClass('is-invalid');
      registerForm.submit();
    } else {
      invalidSpan.addClass('d-block');
      inputRegisterForm.addClass('is-invalid');
    }
  });

  // When email field is filled and customer wants to modify its value
  $('.register-form input, .header-register-form input').on('keyup', function(e) {
    const regex = /\S+@\S+\.\S+/;
    const email = $(e.target).closest('form').find('input').val();
    if (regex.test(email) && $(e.target).hasClass('is-invalid')) {
      $(e.target).closest('div').next('span').removeClass('d-block');
      $(e.target).removeClass('is-invalid');
    }
  });
};

function loadAjaxPasswordReset() {
  $('#resetPasswordSubmit').on('click', function(event) {
    event.preventDefault();
    $('.reset-password .modal-dialog .form-error-message').html('');
    const form = $(this).closest('form');
    $(form).addClass('loading');
    $.ajax({
      type: "POST",
      url: form.attr('action'),
      data: form.serialize(),
      success: function(response) {
        $('.reset-password .modal-dialog').append(response);
        $('.reset-password .modal-dialog .modal-content:not(.success)').addClass('d-none');
        $('.modal-dialog input.form-control').removeClass('is-invalid');
        $(form).removeClass('loading');
        $('.modal-content').addClass('is-success');
      },
      error: function(error) {
        $('.reset-password .modal-dialog input.form-control').addClass('is-invalid');
        $('.modal-dialog .form-errors .form-error-message').text($($.parseHTML(error.responseText)[1]).find('.form-errors ul li').text());
        $(form).removeClass('loading');
      }
    })
  });
}

export default loginPage;
