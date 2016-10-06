function expand_logo (callback) {
    $(".spin").animate({
        "width": "1000vw",
        "left": "-500vw",
        "right": "-500vw",
        "top": "-500vw",
    }, 800, callback);
}

function retract_logo () {
    $(".section").fadeOut();

    $(".spin").animate({
        "width": "280px",
        "left": "0",
        "right": "0",
        "top": "60px",
    }, 800);
}


$(document).ready(function() {
    $(".nav-link").click(function(){
/*        var name = $(this).attr("id") + "-hash";
        console.log(name);
        var callback = function () {
            $(name).fadeIn();
        };
        expand_logo(callback);*/

        // $('body').transition({ scale: ($('body').css('scale')+5) });
    })
    $(".back-button").click(function(){
   //     retract_logo();
       /*$(".section").fadeOut();*/
    })
});

