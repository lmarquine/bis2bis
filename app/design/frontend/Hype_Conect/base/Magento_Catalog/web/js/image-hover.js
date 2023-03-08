
define(['jquery'],
function ($) {
  let productItem = $('.product-item-info');
  productItem.hover(function (event) {
    let productImage = $(event.target).parents('.product-item-info').find('.photo.image'),
        productImageHover = $(event.target).parents('.product-item-info').find('.photo-image-hover');
        productImage.removeClass('photo-currently-hovered');
        productImage.addClass('photo-currently-not-hovered');
        productImageHover.removeClass('photo-currently-not-hovered');
        productImageHover.addClass('photo-currently-hovered');
   },
   function (event) {
    let productImage,
        productImageHover,
        myTarget = $(event.target);

    if ($(event.target).hasClass('product-item-info')) {
      productImage = myTarget.find('.photo.image');
      productImageHover = myTarget.find('.photo-image-hover');
    } else {
      productImage = myTarget.parents('.product-item-info').find('.photo.image');
      productImageHover = myTarget.parents('.product-item-info').find('.photo-image-hover');
    }
      productImageHover.removeClass('photo-currently-hovered');
      productImageHover.addClass('photo-currently-not-hovered');
      productImage.removeClass('photo-currently-not-hovered');
      productImage.addClass('photo-currently-hovered');
   });
});