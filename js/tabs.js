var last_tab;
$(document).ready(function(){
    $(window).hashchange( function(){
        var hash = location.hash + "_hash"
        var active_link = location.hash + "_link";        
        $(active_link).addClass("active-tab");
        if (last_tab) {
            $(last_tab).removeClass("active-tab");
        };
        last_tab = active_link
        
        if (location.hash == "") {
                //console.log(last_tab);
            $(".section:visible").animate({
                "top": "100vh",
                "opacity": 0
            }, 200);
            $(".section:visible").addClass("visuallyhidden");

            $(".spin").animate({
                "width": "280px"
                /*"left": 0,
                "right": 0*/
            }, 200, function() {
                $(".menu").fadeIn(200);
            });
            

        } else {
            $(hash).removeClass("visuallyhidden");

            $(".spin").animate({
                "width": "50px"
                /*"left": 0,
                "right": "80%"*/
            }, 200);
            //$(hash).fadeIn(800);
            $(hash).animate({
                "top": "120px",
                "opacity": 1
            }, 200);

            $(".menu").fadeOut(200, function(){
               
            });
            /*$(".section").css({
                "top": "100px",
                "opacity": 1
                });*/
        }
        /*if (location.hash == "") {
            $("#content").hide();
            $("#splash").show();
            $("#aje").hide();
            $("#aje-splash").show();
            $("#enter-site").show();
        }
        else {
            $("#splash").hide();
            $("#aje-splash").hide();
            $("#aje").show();
            $("#content").fadeIn("", function(){
            });
        };*/

        //$("#dynamic-content").children().hide();
      /*  $(".main").animate({
                "margin-top": "-500px"
            }, 200, function(){
                //$(hash).fadeIn(200);
            });*/
        

        return false;
    })
    $(window).hashchange();
});