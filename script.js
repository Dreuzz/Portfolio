document.addEventListener('DOMContentLoaded', function () {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    var halfScreenWidth = screenWidth / 2;
    var halfScreenHeight = screenHeight / 2;

    var centeredContainer = document.querySelector('.bgVid');
    centeredContainer.style.left = 'calc(50% - ' + halfScreenWidth + 'px)';
    centeredContainer.style.top = 'calc(50% - ' + halfScreenHeight + 'px)';
});


