import $ from 'jquery';

const ordersGrid = function mainFunctions() {
  // Desktop Accordion
  $('#orderAccordionDesktop').on('hidden.bs.collapse', function(e) {
    $(e.target).closest('tr').removeClass('show');
  });

  $('#orderAccordionDesktop').on('show.bs.collapse', function(e) {
    $('tr', this).removeClass('show');
    $(e.target).closest('tr').addClass('show');
  });

  // Mobile Accordion
  $('#orderAccordionMobile').on('show.bs.collapse', function (e) {
    $(e.target).prev('div').removeClass('init');
  })
  $('#orderAccordionMobile').on('hidden.bs.collapse', function (e) {
    $(e.target).prev('div').addClass('init');
  })

  $('.arrow-close').on('click', function() {
    $(this).closest('div.order-details').prev('div').trigger('click');
  });
}

export default ordersGrid;
