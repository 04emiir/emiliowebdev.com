$(document).ready(function () {

    // Variables for typewritterEffect();
    var current_phrase = "web developer.";
    var word_by_word = "";
    var aux = 0;
    var index = 0;
    var speed = 120;

    // Variable for $-href.click();
    var topValue = null;
    var body = $("html, body");

    // Variable for stickyNavbar();
    var sticky_nav = $("nav").offset().top;

    //Variable for project-sorting functions
    var projects_tags = $(".sort-projects").children();


    // For reuse
    function typewriterEffect() {
        // Adds letter by letter 
        word_by_word = current_phrase.slice(0, ++index);

        //Modify the content
        $("#typewriter").html(word_by_word);

        //Check if the word amalgam is the same as the phrase
        if (current_phrase.length === word_by_word.length)
            //Ends
            return 0;
        else
            // Call again
            setTimeout(typewriterEffect, speed);

    }

    function stickyNavbar() {
        // Navbar becomes sticky when crossing a certain point
        if ($(window).scrollTop() >= sticky_nav) {
            $("nav").addClass("sticky-nav");
        } else {
            $("nav").removeClass("sticky-nav");
        }
    }

    function toggleMenu() {
        // Add class to display the nav anchors
        if ($(".menu").hasClass("show"))
            $(".menu").removeClass("show");
        else
            $(".menu").addClass("show");
    }

    function resetPulseAnimation(element) {
        $("#modal-circles").children().addClass("off");
        $("#modal-circles").width();
        element.removeClass("off");
        element.prevAll().removeClass("off");
    }

    function clearModal() {
        var string = `
        <strong>Basic level:</strong> I have a basic understanding of the languague or tool, but I'm not fond of it.
        `
        $(".skill-description").children().html(string);
        $("#modal-circles").children().addClass("off");
        $("#modal-circles .circle:first-child").removeClass("off");
        $("#skills-modal").css("display", "none");
    }

    function sortProject(sort_class) {
        let show_ele = $(".project-gallery").children(sort_class);
        let hide_ele = $(".project-gallery").children().not(sort_class);

        hide_ele.stop().hide();
        show_ele.stop().show();
    }

    function addAnchors(array, location) {
        setTimeout(() => { 
            location.append(array)
        }, 20);
    }


    // HERO-IMAGE FUNCTIONS
    $(".button-projects").hover(function () {
        // Change the HTML slightly
        $(".button-projects").html("See projects ↓")
    }, function () {
        $(".button-projects").html("See projects →")
    });

    $(".button-projects").click(function (e) {
        //Scroll to projects section
        e.preventDefault();
        topValue = $("#projects").position().top;
        body.stop().animate({
            scrollTop: topValue
        }, 300, 'swing');
    });



    // SCROLL FUNCTIONS
    $(".home-href").click(function (e) {
        // Scroll to beggining
        e.preventDefault();
        body.stop().animate({
            scrollTop: 0
        }, 300, 'swing');
        toggleMenu();
    });

    $(".about-href").click(function (e) {
        // Scroll to ABOUT 
        e.preventDefault();
        topValue = $("#about").position().top;
        body.stop().animate({
            scrollTop: topValue
        }, 300, 'swing');
        toggleMenu();
    });

    $(".projects-href").click(function (e) {
        // Scroll to PROJECTS
        e.preventDefault();
        topValue = $("#projects").position().top;
        body.stop().animate({
            scrollTop: topValue
        }, 300, 'swing');
        toggleMenu();
    });

    $(".contact-href").click(function (e) {
        // Scrollto CONTACT
        e.preventDefault();
        topValue = $("#contact").position().top;
        body.stop().animate({
            scrollTop: topValue
        }, 300, 'swing');
        toggleMenu();
    });

    $(".contact-me").click(function (e) {
        // Scroll to CONTACT
        e.preventDefault();
        topValue = $("#contact").position().top;
        body.stop().animate({
            scrollTop: topValue
        }, 300, 'swing');

        if ($(".menu").hasClass("show"))
            $(".menu").removeClass("show");
    });


    // NAVBAR FUNCTION
    $(".toggle").on("click", function () {
        toggleMenu();
    });



    // MODAL FUNCTIONS
    $("#open-modal").click(function () {
        // When the user clicks on the button, open the modal
        $("#skills-modal").css("display", "block");
    });

    $("#close-modal").click(function () {
        // When the user clicks on the X (cross), close the modal. Clean the text and the circles
        clearModal();
    });

    $(document).click(function (event) {
        // When the user clicks anywhere outside of the modal, close it. Clean the text and the circles
        if ($(event.target).is("#skills-modal")) {
            clearModal();
        }
    });

    $(".circle.novice").click(function () {
        var string = `
        <strong>Novice level:</strong> Basic understanding of the languague/tool. Used it a couple of times but I am not fond of it.
        `

        $(".skill-description").children().html(string);
        resetPulseAnimation($(this));
    });

    $(".circle.basic").click(function () {
        var string = `
        <strong>Basic level:</strong> Good grasp of the principles of the languague/tool and a few complex functionalities.
        `

        $(".skill-description").children().html(string);
        resetPulseAnimation($(this));
    });

    $(".circle.medium").click(function () {
        var string = `
        <strong>Medium level:</strong> Fair working knowledge of the languague/tool. I like using it most of the times.
        `

        $(".skill-description").children().html(string);
        resetPulseAnimation($(this));
    });

    $(".circle.high").click(function () {
        var string = `
        <strong>High level:</strong> Excellent working knowledge of the languague/tool. I love coding with it.
        `

        $(".skill-description").children().html(string);
        resetPulseAnimation($(this));
    });

    //PROJECT-SORTING FUNCTIONS
    $("#sort-all").click(function () {
        if (!$(this).hasClass("current")) {
            projects_tags.removeClass("current");
            $(this).addClass("current");
            sortProject(".project-item");
        }
    });

    $("#sort-games").click(function () {
        if (!$(this).hasClass("current")) {
            projects_tags.removeClass("current");
            $(this).addClass("current");
            sortProject(".game");
        }
    });

    $("#sort-web").click(function () {
        if (!$(this).hasClass("current")) {
            projects_tags.removeClass("current");
            $(this).addClass("current");
            sortProject(".web");
        }
    });

    // ITEM HIDDEN DIV
    $(".project-item").hover(function () {
        var anchors = $(this).children(".project-hidden").children("a");
        var div_location = $(this).children(".project-hidden");

        $(this).children(".project-hidden").css('display', 'flex');
        $(this).children(".project-hidden").children("a").remove();

        addAnchors(anchors, div_location);

    }, function () {
        $(this).children(".project-hidden").fadeOut("fast");
    });


    //  Executed functions
    setTimeout(typewriterEffect, 800);

    $(window).scroll(function () {
        stickyNavbar();
    });

});