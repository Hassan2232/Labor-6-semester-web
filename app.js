$('.scrollto').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 600,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });

    return false;
});

$('.burger__btn').on('click', function() {
    $('.btn__menu').toggleClass('active');
    $('.menu').toggleClass('active');
    $('body').toggleClass('active');
});


$(function($) {
    $('#post').on('submit', function(event) {
        event.preventDefault();
      if ( validateForm() ) { // если есть ошибки возвращает true
        return false;
      } else {
       
        location.href = "index.html";//редирект
        
      }
    });
    
    function validateForm() {
      $(".text-error").remove();
      
      // Проверка имени    
      var el_l = $("#formName");
      if ( el_l.val().length < 3 ) {
        var v_login = true;
        el_l.after('<span class="text-error for-login">Name must be more than 2 characters</span>');
      } 
      $("#formName").toggleClass('error', v_login );
      
      // Проверка e-mail
      var reg =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      var el_e = $("#formEmail");
      var v_email = el_e.val()?false:true;
    
      if ( v_email ) {
        el_e.after('<span class="text-error for-email">The e-mail field is required</span>');
      } else if ( !reg.test( el_e.val() ) ) {
        v_email = true;
        el_e.after('<span class="text-error for-email">invalid e-mail</span>');
      }
      $("#formEmail").toggleClass('error', v_email );
      
      // Проверка текста
      
      var el_p1 = $("#formText");
      
      var v_pass1 = el_p1.val()?false:true;
      
   
     if ( el_p1.val().length < 6 ) {
        var v_pass1 = true;
        el_p1.after('<span class="text-error for-pass1">Password from 6 characters</span>');
      } 
      
      $("#formText").toggleClass('error', v_pass1 );
      
      return ( v_login || v_email || v_pass1 );
    }


     
  });

