$(document).ready(function() {

      let $modalOverlay = $('.modalOverlay');
      let $modalImageContainer = $('.modalImageContainer');
      let $modalCloseButton = $('.modalCloseButton');
      let $modalNextButton = $('.modalNextButton');
      let $modalPrevButton = $('.modalPrevButton');
   
      let modalImgArray = $('.galleryImage img');
      let currIndex;    

      $('.galleryImage img').on('click', function(){
            $('#modalImage').attr('src', $(this).attr('src'));
            currIndex = $(this).index('.galleryImage img');
            $modalOverlay.css('visibility', 'visible');
            $modalImageContainer.css('visibility', 'visible');
            $('#modalImage').css('visibility', 'visibile');
            $modalCloseButton.css('visibility', 'visible');
            $modalNextButton.css('visibility', 'visible');
            $modalPrevButton.css('visibility', 'visible');
      });

      $('#nextButton').on('click', function() {
            // Calculate the new index, wrapping around to the beginning if at the end
            currIndex = (currIndex + 1) % modalImgArray.length;
            // Update the modal image source
            $('#modalImage').attr('src', modalImgArray.eq(currIndex).attr('src'));
      });

      $('#prevButton').on('click', function() {
            // Calculate the new index, wrapping around to the beginning if at the end
            currIndex = (currIndex - 1)  % modalImgArray.length;
            // Update the modal image source
            $('#modalImage').attr('src', modalImgArray.eq(currIndex).attr('src'));      
      });

      $modalCloseButton.on('click', function() {
            $modalOverlay.css('visibility', 'hidden');
            $modalImageContainer.css('visibility', 'hidden');
            $('#modalImage').css('visibility', 'hidden');
            $modalCloseButton.css('visibility', 'hidden');
            $modalNextButton.css('visibility', 'hidden');
            $modalPrevButton.css('visibility', 'hidden');
      });

});


// DYNAMICALLY ADD MODAL OVERLAY TO BODY
      // Get the source of the clicked image
      //const clickedImageSrc = $(this).attr('src');
/*
      // Main overlay div
      const $modalOverlay = $('<div>').addClass('modalOverlay');

      // Sytling structure for modalOverlay using row and columns
      const $modalRow = $('<div>').addClass('modalRow');
      const $modalCol1 = $('<div>').addClass('modalCol1');
      const $modalCol2 = $('<div>').addClass('modalCol2');
      const $modalCol3 = $('<div>').addClass('modalCol3');

      // New image element
      let $modalImage = $('<img>').addClass('modalImage').attr('src', clickedImageSrc);

      // Close button
      const $modalCloseButton = $('<button>').addClass('modalCloseButton').html('&times;');

      // Next and previous buttons
      const $modalNextButton =$('<button>').addClass('modalNextButton').html('&gt;');
      const $modalPrevButton =$('<button>').addClass('modalPrevButton').html('&lt;');

      // Append Next and Prev buttons to modalOverlay el
      $modalCol1.append($modalPrevButton);
      $modalCol3.append($modalNextButton);

      // Append image and button to the overlay element
      $modalOverlay.append($modalPrevButton).append($modalImage).append($modalCloseButton).append($modalNextButton);

      // Append overlay to the body
      $('body .container-fluid').append($modalOverlay);
*/

// HOW I INITIALLY CHECK + ACCESSED INDEX OF MODALIMGARRAY

      /*// Variables
      let nextImageSrc;
      let prevImageSrc;
      let newIndex;
      */  
      //NextButton
                  //Check if clicked image is the first in the gallery
            /*if (currIndex === 0){
                  newIndex = modalImgArray.length - 1;
                  prevImageSrc = modalImgArray.eq(newIndex).attr('src');
                  $modalImageContent.attr('src', prevImageSrc);
                  currIndex = newIndex;
            }
            else {
                  currIndex = currIndex - 1;
                  prevImageSrc = modalImgArray.eq(currIndex).attr('src');
                  $modalImageContent.attr('src', prevImageSrc);
            }   */  

      //PrevButton
                  //Check if clicked image is the last in the gallery
            /*if (currIndex === modalImgArray.length - 1){
                  newIndex = 0;
                  nextImageSrc = modalImgArray.eq(newIndex).attr('src');
                  $modalImageContent.attr('src', nextImageSrc);
                  currIndex = newIndex;
            }
            else {
                  currIndex = currIndex + 1;
                  nextImageSrc = modalImgArray.eq(currIndex).attr('src');
                  $modalImageContent.attr('src', nextImageSrc);
            }*/

