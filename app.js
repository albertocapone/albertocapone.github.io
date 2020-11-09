function switchTabs() {
    var selectedTab = $(this).data('tab');

    var currentTab;
    
    $('#scrollable > div').each(function() {
        if($(this).hasClass('active')) {
           currentTab = $(this).data('tab');
        }
    });

    console.log(selectedTab, currentTab)

    if(selectedTab != currentTab){
        
        if ($('#portfolio').hasClass('active')) {
            $('.entry').each(function () {
                $(this).removeClass('slide-in-left');
                $(this).find('.timedot').removeClass('fade-in');
            });
        }
    
        $('#sideButtons li').each(function () {
            if ($(this).data('tab') == selectedTab) {
                $(this).addClass('active')
            } else {
                $(this).removeClass('active');
            }
        });
    
        $('main > div').each(function () {
            if ($(this).data('tab') == selectedTab) {
                $(this).addClass('active')
                if (selectedTab == 1) {
                   animateOnScroll();
                }
            } else {
                $(this).removeClass('active');
            }
        });
    }
}

function copyToKeyboard() {
    var temp = $("<input>");
    var myMail = "albertocapone@outlook.it";
    $("body").append(temp);
    temp.val(myMail).select();
    document.execCommand("copy");
    temp.remove();
    $('#copiedAlert').show();
    setTimeout(function () {
        $('#copiedAlert').hide();
    }, 800);
}

function animateOnScroll() {
    var mainHeight = $('main').height();
    var vpHeight = $(window).height();
    var vpOrigin = vpHeight - mainHeight;
    $('.entry').each(function () {
        var boxOrigin = $(this).offset().top;
        if (boxOrigin > vpOrigin && boxOrigin < vpHeight -20 && !$(this).hasClass('slide-in-left')) {
            $(this).addClass('slide-in-left');
            $(this).find('.timedot').addClass('fade-in');
        }
    });
}

function init() {
    animateOnScroll();
    $('#sideButtons li').click(switchTabs);
    $('#myMail').click(copyToKeyboard);
    $('main').scroll(animateOnScroll);
    $(window).on('resize' , () => { location.reload() } );
}

$(document).ready(init);