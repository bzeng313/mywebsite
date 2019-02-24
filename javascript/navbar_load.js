//TODO: find better way of detecting particular webpage
//when loaded to github, should remove ../
$(document).ready(
    function() {
        $("nav").load("navbar.html", function() {
                switch($("title").text()) {
                    case "Home":
                        jQuery('#home').addClass('active');
                        break;
                    case "Projects":
                        jQuery('#projects').addClass('active');
                        break;
                    case "Contact":
                        jQuery('#contact').addClass('active'); 
                        break;
                    case "About":
                        jQuery('#about').addClass('active');
                        break;
                }
        });
    }
);




