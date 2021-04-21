/****************************/
/* SHARE PRODUCT MANAGEMENT */
/****************************/

const shareProduct = function mainFunctions() {
  if(document.getElementById('shareDropdown')) {
    jQuery('#copyShare').tooltip('disable');
    // Facebook Share
    document.getElementById('facebookShare').addEventListener('click', function (event) {
      event.preventDefault();
      const winTop = (screen.height / 2) - (350 / 2);
      const winLeft = (screen.width / 2) - (600 / 2);
      const url = document.getElementById('facebookShare').dataset.url;
      window.open('http://www.facebook.com/sharer.php?u='+url, 'Facebook - Noblezz Shop', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=600,height=350');
    });

    // Pinterest Share
    document.getElementById('pinterestShare').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('realPinterestShare').click();
    });


    // Copy to Clipboard
    document.getElementById('copyShare').addEventListener('click', function (event) {
      event.preventDefault();
      const copyText = document.getElementById('pageLink');
      $('#copyShare').tooltip('enable');
      navigator.clipboard.writeText(copyText.value)
        .then(() => {
          $('#copyShare').tooltip('show');
          setTimeout(function() { $('#copyShare').tooltip('disable'); }, 1500);
        })
        .catch((error) => { console.log(`Copy failed! ${error}`) })
    });

    // Mail To
    document.getElementById('mailShare').addEventListener('click', function(event) {
      event.preventDefault();
      const mailTo = document.getElementById('mailShare').dataset.mailto;
      window.location.href = mailTo;
    });
  }
}

export default shareProduct;
