document.addEventListener('DOMContentLoaded', function() {
    const train = document.getElementById('train');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    let animationId;
    let position = 0;

    function moveTrain() {
        position += 2;
        train.style.left = position + 'px';

        if (position > window.innerWidth) {
            position = -train.width;
        }

        animationId = requestAnimationFrame(moveTrain);
    }

    startButton.addEventListener('click', function() {
        if (!animationId) {
            moveTrain();
        }
    });

    stopButton.addEventListener('click', function() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    });
});
