define(['jquery'],
  function ($) {

  $(function () {
    let nav = $('.page-header');
    console.log('js carregafo');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        nav.addClass("fixed-header");
        $('body').css('padding-top', 70);
        $( "tnav-sections" ).css("display","none");
        console.log('scrool adicionado');
      } else {
        nav.removeClass("fixed-header");
        $('body').css('padding-top', 0);
        $( "tnav-sections" ).css("display","block");

        console.log('scrool removido');
      }
    });

    $( ".page-header" ).hover(function() {
      $( "tnav-sections" ).css("display","block");
    });
  });
});