$(function() {
    $(window).scroll(function() {
            if ($('html').scrollTop() > 80) {
                $('.menu-top-outside').addClass('fixmenu')
            } else {
                $('.menu-top-outside').removeClass('fixmenu')
            }

            if ($('html').scrollTop() > 400) {
                $('.back-to-top').css('opacity', '1')
            } else {
                $('.back-to-top').css('opacity', '0')
            }
            if ($('html').scrollTop() > 770) {
                $('.back-to-top').css('background-color', 'rgba(227, 227, 227, 0.411)')
            } else {
                $('.back-to-top').css('background-color', 'rgba(27, 27, 27, 0.411)')
            }
        })
        // Back to top ==0
    $('.back-to-top').click(function() {
        $('html').animate({ scrollTop: 0 }, 1000);
    });


    $('.hotline-tag').click(function() {
        $('.hotline').toggle();
        $('.hotline-tag').addClass('rotate');
    });
    // Menu scroll
    $('#openMenu').click(function() {
        $('.underlist-lv2-res').toggle();
    });
    $('.top_menu-icon').click(function() {
        $('.menu-detail').toggle();
        $('.underlist-lv2-res').hide();
    });

    // Strim length
    $('.news-title a').html(function() {
        var str = $('.news-title a').html();
        if (str.length <= 15) {
            $('.news-title a').html(str);
        } else $('.news-title a').html(str.substring(0, 10) + '...');
    });
    $('.news-detail').html(function() {
        var str = $('.news-detail').html();
        if (str.length <= 35) {
            $('.news-detail').html(str);
        } else $('.news-detail').html(str.substring(0, 25) + '...');
    });


});

// Tab 
function openRoom(evt, roomName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontents");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(roomName).style.display = "block";
    evt.currentTarget.className += " active";
};
document.getElementById("defaultOpen").click();