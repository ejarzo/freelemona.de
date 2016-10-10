var last_tab;
function reset_bandcampemb(div) {
    $(div).each(function(i,t){
        var src_back = t.src;
        t.src = "random_blank.html";
        t.src = src_back;
    });
}
$(document).ready(function(){

    $(window).hashchange( function(){
        var hash = location.hash + "_hash"

        if (location.hash == "") {
            var section = $('.section');

            console.log(section);
            console.log(last_tab);

            if (last_tab === "#release1_hash" ||
                last_tab === "#release2_hash" ||
                last_tab === "#release3_hash") {
                reset_bandcampemb(".bandcampemb");
            }

            section.animate({
                "top": "100vh",
                "opacity": 0
            }, 200, function(){
                section.addClass("visuallyhidden");                
            });

            $(".spin").animate({
                "width": "280px"
            }, 200, function() {
                $(".menu").fadeIn(200, function (){
                   $("#release1_hash").css({
                        "left": 0,
                        "opacity": 0
                    })
                    $("#release2_hash").css({
                        "left": "100vw",
                        "opacity": 0
                    })
                });
            });

        } 
        else {

            if (location.hash === "#release2") {

                $("#release1_hash").animate({
                    "left": "-100vw",
                    "opacity": 0
                }, 300)
                $("#release2_hash").animate({
                    "left": "0vw",
                    "opacity": 1
                }, 300, function(){
                    reset_bandcampemb(".bandcamp1");
                    $("#release1").addClass("visuallyhidden");
                });
            }

            else if (location.hash === "#release1") {
                
                if (last_tab === "#release2_hash") {
                    console.log("asdasds");
                    $("#release1_hash").animate({
                        "left": 0,
                        "opacity": 1
                    }, 300)
                }

                $("#release2_hash").animate({
                    "left": "100vw",
                    "opacity": 0
                }, 300, function(){
                    reset_bandcampemb(".bandcamp2");
                    $("#release2").addClass("visuallyhidden");
                })

                $("#release2_hash").animate({
                    "top": "120px",
                    "opacity": 1
                }, 200);
                
                $("#release1_hash").animate({
                    "top": "120px",
                    "opacity": 1
                }, 200);

            }
            else {
                $(hash).animate({
                    "top": "120px",
                    "opacity": 1
                }, 200);
            }

            $(hash).removeClass("visuallyhidden");
            
            $(".spin").animate({
                "width": "50px"
            }, 200);

            $(".menu").fadeOut(200);
        }
        last_tab = hash;
        return false;
    })
    $(window).hashchange();
});