$(document).ready(() => {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-button').addClass('show');
        } else {
            $('.scroll-up-button').removeClass('show');
        }
    });

    // slide up Script
    $('.scroll-up-button').click(function () {
        $('html').animate({ scrollTop: 0 });
    });
    // toggle menu/navbar script
    $('.menu-btn').click(() => {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typeing animation effect
    var typed = new Typed(".typing", {
        strings: ["Youtuber", "Developer ", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Youtuber", "Developer ", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlcarousel({
        margin: 20,
        loop: true,
        autoPlayTimeOut: 2000,
        autoPlayHoverPause: true,
        resposive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            },
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitForm');
    const messageContainer = document.getElementById('messageContainer');

    submitButton.addEventListener('click', function() {
        // Build the Google Form URL with form data
        const googleFormUrl = "https://docs.google.com/spreadsheets/d/1rKLEK3-7rhgHTLVBwFkKnvMaTaUmgkiLi-r0gZxDLsA/edit?usp=sharing"; // Replace with your Google Form URL
        const formData = new FormData(document.getElementById('contactForm'));
        const formEntries = formData.entries();
        let googleFormSubmitUrl = googleFormUrl + "formResponse?";

        for (let entry of formEntries) {
            const key = encodeURIComponent(entry[0]);
            const value = encodeURIComponent(entry[1]);
            googleFormSubmitUrl += key + "=" + value + "&";
        }

        // Send data to Google Form using an image beacon
        const img = new Image();
        img.src = googleFormSubmitUrl;
        img.style.display = 'none';

        messageContainer.innerHTML = 'Message sent successfully!';
    });
});
