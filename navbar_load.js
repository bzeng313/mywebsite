$(document).ready(
    function() {
        $("#navbar").load("navbar.html");
    }
    function() {
        switch(jQuery(this).attr('title')) {
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

