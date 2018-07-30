$(document).ready(function() {
    var $cross = $('#mobileCross'),
        $bars = $('#menuBars'),
        $menu = $('#mobileMenu');
    
    var $latest = $('#latest'),
        $toLatest = $('#latest-link'),
        $popular = $('#popular'),
        $toPopular = $('#popular-link');
    
    //Menu show/hide
    $bars.on('click', function() {
         $menu.removeClass('closeMenu').addClass('openMenu');
    });
    
    $cross.on('click', function() {
        $menu.removeClass('openMenu').addClass('closeMenu');
    });
    
    
    //Collections switch
    $toPopular.on('click', function() {
        $toLatest.removeClass('active-link');
        $toPopular.addClass('active-link');
        $popular.removeClass('hideCollection').addClass('showCollection');
        $latest.removeClass('showCollection').addClass('hideCollection');
    });
    
    $toLatest.on('click', function() {
        $toLatest.addClass('active-link');
        $toPopular.removeClass('active-link');
        $latest.removeClass('hideCollection').addClass('showCollection');
        $popular.removeClass('showCollection').addClass('hideCollection');
    });
});