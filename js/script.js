$(document).ready(function() {
    
    $('#imageGallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:7,
        slideMargin:0,
        enableDrag: true,
        addClass: 'brand-slider-full',
        currentPagerPosition:'left',
        adaptiveHeight: true,
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }   
    });
});