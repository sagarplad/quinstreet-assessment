$(document).ready(function () {
    $('#phone').mask('(000) 000-0000');
  
    $('#leadForm').on('submit', function (e) {
      e.preventDefault();
  
      let name = $('#name').val().trim();
      let phone = $('#phone').val().trim();
      let email = $('#email').val().trim();
      let hasError = false;
  
      // Reset errors
      $('input').removeClass('error');
  
      // Validate name
      if (name.length < 2) {
        $('#name').addClass('error');
        hasError = true;
      }
  
      // Validate phone
      if (!phone.match(/\(\d{3}\) \d{3}-\d{4}/)) {
        $('#phone').addClass('error');
        hasError = true;
      }
  
      // Validate email
      if (!email) {
        $('#email').addClass('error');
        hasError = true;
      }
  
      if (hasError) return;
  
      // Submit data
      $.ajax({
        url: 'https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar',
        type: 'POST',
        data: $(this).serialize(),
      }).always(function () {
        $('#submitBtn').text('Submitted').prop('disabled', true);
      });
          
    });
  });
  