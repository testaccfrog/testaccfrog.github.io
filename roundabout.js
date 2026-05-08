$(document).ready(function() {

   // Store references to the roundabout items and images
    let imgArray = $('.roundabout-image'); // storing all imgs w/ class .roundabout-image in imgArray
    let currIndex = 0; // initiating variable used as index to zero
    let lastActivity = Date.now(); // variable for inactivity responsiveness
    let IDLE_LIMIT = 6000; 

    function changeImage() {
        // Remove active class from current image (starts fade out)
        imgArray.eq(currIndex).removeClass('active');
        
        // Calculate next index
        currIndex = (currIndex + 1) % imgArray.length;
        
        // Add active class to next image (starts fade in)
        imgArray.eq(currIndex).addClass('active');

        lastActivity = Date.now();
    }

    function checkStatus() { // Checking for inactivity to trigger an auto rotate 
    let currentTime = Date.now();
    if (currentTime - lastActivity > IDLE_LIMIT) {
            changeImage();
    }
    }

    setInterval(checkStatus, 500); // Checking every 500ms to ensure responsiveness

    // Manual controls
    $("#next-button").on('click', function() {
        changeImage(); // call changeImage() function
    });

    // Can't use changeImage() due to incrementing/decrementing incompatability
    $("#prev-button").on('click', function() { 
        imgArray.eq(currIndex).removeClass('active');
        currIndex = (currIndex - 1 + imgArray.length) % imgArray.length;
        imgArray.eq(currIndex).addClass('active');
        lastActivity = Date.now();
    });
});

// Can i use a flag to see if input is (left or right) in changeImage() for
//  cleaner code?

/* 
        // Checking which arrow was clicked
        if flag == 0
            set left true
        if flag == 1
            set right true
        else
            exit function

        // Remove active class from current image (starts fade out)
        imgArray.eq(currIndex).removeClass('active');
        
        // Calculate next index
        If (left flag == true)
            currIndex = (currIndex + 1) % imgArray.length;
        else if (right flag == true)
            currIndex = (currIndex - 1) % imgArray.length;
        else
            currIndex = currIndex

        // Add active class to next image (starts fade in)
        imgArray.eq(currIndex).addClass('active');

*/

