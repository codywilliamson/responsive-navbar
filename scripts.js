(function($) {
  $(function() { //DOM ready
    // target any a in the menu that has any children, then toggle .nav-dropdown class
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // prevents all dropdowns opening when only one is clicked
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    }); // end prevent dropdowns
    // hide if click away
    $('html').click(function() {
      $('.nav-dropdown').hide();
    }); // end hide
    // toggle open, close styles on nav
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    }); // end toggle
    // toggle hamburger
     $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    }); // end toggle hamburger
  });
 })(jQuery);
