// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Get the screen dimensions
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Calculate half of the screen dimensions
    var halfScreenWidth = screenWidth / 2;
    var halfScreenHeight = screenHeight / 2;

    // Apply the styles to the container
    var centeredContainer = document.querySelector('.bgVid');
    centeredContainer.style.left = 'calc(50% - ' + halfScreenWidth + 'px)';
    centeredContainer.style.top = 'calc(50% - ' + halfScreenHeight + 'px)';
});

