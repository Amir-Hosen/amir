
//....mixItUp

var mixer = mixitup('.grid-latestwork-container');

//....SCROLLIFY

$(function() {
    $.scrollify({
        section : ".scrollify",
        setHeights: false,
        updateHash: false,
    });
});



//  HAMBURGER MENU

function openMenu() {
    document.getElementById('navbar').style.height = "90%";
}



function closeMenu() {
    document.getElementById('navbar').style.height = "0%";
}

// smoth scroll

$(function(){
    $('.menu-item a, .scrollify-down a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        
        return false;
    })
})