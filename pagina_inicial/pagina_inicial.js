'use strict'








$('.user-status').click(function() {
    changeUserStatus(this)
})

function changeUserStatus(element) {
    let userStatusIndex = $(element).index()

    for (let index = 0; index < $('.user-status').length; index++) {
        $('.user-status').eq(index).children().eq(2).hide()
    }

    $(element).children().eq(2).toggle()

    switch (userStatusIndex) {
        case 5:
            $("body").get(0).style.setProperty("--user-status", "var(--green)");
            break

        case 6:
            $("body").get(0).style.setProperty("--user-status", "var(--yellow)");
            break
        
        case 7:
            $("body").get(0).style.setProperty("--user-status", "var(--red)");
            break
    }
    
}


$('.sidebar').hide()
function showSideBar() {
    $('.sidebar').animate({width: 'toggle'})
    $('.expanded-item').slideUp()

    $('.expand-item').css({
        'transform': 'rotate(0deg)',
        'transition': '.25s'
    })

    $('.expand-item .sidebar-item, .sidebar-item').removeClass('expanded')
}

// $(document).click(function() {
//     var element = $(".show-sidebar");
//     if (!element.is(event.target) && !element.has(event.target).length) {
//         $('.sidebar').animate({width: '0px'})
//     }
// });





$('.profile-expand').hide()
$(document).click(function() {
    var element = $(".profile, .profile-expand");
    if (!element.is(event.target) && !element.has(event.target).length) {
        $('.profile-expand').hide()
    }
    else {
        $('.profile-expand').show()   
    }
});




$('.notifications-expand').hide()
$(document).click(function() {
    var element = $(".notifications, .notifications-expand");
    if (!element.is(event.target) && !element.has(event.target).length) {
        $('.notifications-expand').hide()
    }
    else {
        $('.notifications-expand').show()
        
    }
});



if ($('.notifications-item').length == 0) {
    $('.notifications-expand p:last-child').show()
} else {
    $('.notifications-expand p:last-child').hide()
}




function markAllRead() {
    $('.quantity').hide()
    $('.notifications-item').hide()
    $('.notifications-expand p:last-child').show()
}




$('.expanded-item').hide()
$('.expand-item').parent().click(function() {
    $('.expand-item').css({
        'transform': 'rotate(90deg)',
        'transition': '.25s'
    })

    $('.expanded-item').slideToggle()

    $(this).toggleClass('expanded')
    $('.expanded-item .sidebar-item').toggleClass('expanded')
})









var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
});




$('span[aria-label=Next]').html('<i data-feather="chevron-right"></i>')
$('span[aria-label=Previous]').html('<i data-feather="chevron-left"></i>')
