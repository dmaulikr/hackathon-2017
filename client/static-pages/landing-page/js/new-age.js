function getTrees() {
  return new Promise(function(resolve, reject) {
    axios.get('http://foncoreapi.azurewebsites.net/tree')
      .then(function (response) {
        resolve(response.data);
      })
  });
}

(function ($) {
  "use strict"; // Start of use strict

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(document).on('click', 'a.page-scroll', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 100
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
  });

  setTimeout(function () {
    $('.loader').slideUp('slow');
  }, 2500);

  getTrees().then(function(data) {
    $('#treeNumber').text(data.length);
  });

})(jQuery); // End of use strict
