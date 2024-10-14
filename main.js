// Function to check if the device is desktop or tablet
    function isDesktopOrTablet() {
        return window.innerWidth > 768; // Adjust the breakpoint as needed
    }

    // Function to scroll to the target section smoothly
    function scrollToSection(target) {
        $('html, body').animate({
            scrollTop: $(target).offset().top // No additional offset
        }, 500); // Smooth and fast scroll duration
    }

    // Show indicators and scroll to first section on start button click
    $('#start-presentation').on('click', function () {
        // Hide the "Inizia la Presentazione" button
        $(this).fadeOut();

        // Open the collapse and ensure indicators are hidden during this time
        $('#presentation-sections').collapse('show');

        // Hide scroll indicators initially to prevent flickering
        $('.scroll-indicators').hide();

        // Force recalculate section height for desktop and tablet
        if (isDesktopOrTablet()) {
            setTimeout(function () {
                setSectionHeight(); // Ensure height is correct before scrolling
            }, 50);
        }
    });

    // Scroll to the first section once the collapse is fully shown
    $('#presentation-sections').on('shown.bs.collapse', function () {
        // Ensure scrolling happens only after collapse is complete
        setTimeout(function () {
            scrollToSection('#section1'); // Scroll smoothly to first section

            // Show scroll indicators after a delay of 1.3 seconds
            setTimeout(function () {
                $('.scroll-indicators').fadeIn();
            }, 1300); // Delay to ensure smooth transition
        }, 100); // Small delay to make sure collapse animation is fully completed
    });

    // Function to handle dot click and scrolling
    $('.dot').on('click', function () {
        $('.dot').removeClass('active');
        $(this).addClass('active');

        var target = $(this).data('target');
        scrollToSection(target); // Use the scroll function
    });

    // Handle "Next" button click to scroll to the next section
    $('.btn-next').on('click', function () {
        var target = $(this).data('target');
        scrollToSection(target); // Use the scroll function
    });

    // Function to highlight the current section dot on scroll and hide indicators when above presentation-sections
    $(window).on('scroll', function () {
        var scrollPosition = $(window).scrollTop();
        var sectionOffset = $('#presentation-sections').offset().top;

        // Hide scroll indicators if above "presentation-sections" container
        if (scrollPosition < sectionOffset - 50) {
            $('.scroll-indicators').fadeOut(); // Hide indicators when above the section
        } else {
            $('.scroll-indicators').fadeIn(); // Show indicators when within the section
        }

        // Highlight the current section dot on scroll
        $('.section').each(function () {
            var sectionOffset = $(this).offset().top;
            var sectionId = $(this).attr('id');

            if (scrollPosition >= sectionOffset - 50) {
                $('.dot').removeClass('active');
                $('.dot[data-target="#' + sectionId + '"]').addClass('active');
            }
        });
    });

    // Function to set the height of each section
    function setSectionHeight() {
        // Ensure correct height on desktop or tablet
        if (isDesktopOrTablet()) {
            $('.section').css('height', `${window.innerHeight}px`); // Full viewport height for desktop
        } else {
            var vh = window.innerHeight * 0.01; // Get the actual viewport height
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            $('.section').css('height', `calc(var(--vh, 1vh) * 100)`); // Use 100vh on mobile devices
        }
    }

    // Set height on page load
    setSectionHeight();

    // Update height on resize or orientation change
    $(window).on('resize orientationchange', function () {
        setSectionHeight();
    });
