$(document).ready(function() {


   // Store references to the roundabout items and images
    let imgArray = $('.roundabout-image');
    let currIndex = 0;

    function changeImage() {
        // Remove active class from current image (starts fade out)
        imgArray.eq(currIndex).removeClass('active');
        
        // Calculate next index
        currIndex = (currIndex + 1) % imgArray.length;
        
        // Add active class to next image (starts fade in)
        imgArray.eq(currIndex).addClass('active');
    }

    // Auto-advance
    setInterval(changeImage, 5750);

    // Manual controls
    $("#next-button").on('click', function() {
        changeImage();
    });

    $("#prev-button").on('click', function() {
        imgArray.eq(currIndex).removeClass('active');
        currIndex = (currIndex - 1 + imgArray.length) % imgArray.length;
        imgArray.eq(currIndex).addClass('active');
    });
});