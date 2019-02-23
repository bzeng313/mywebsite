$(document).ready(
    function() {
        $("nav").load("navbar.html");
    }
    function() {
        switch($("title").text()) {
            case "Home":
                jQuery('#home').addClass('active');
                break;
            case "Projects":
                jQuery('#projects').addClass('active');
                break;
            case "Contact":
                jQuery('#contacts').addClass('active'); 
                break;
            case "About":
                jQuery('#about').addClass('active');
                break;
        }
    }
);

