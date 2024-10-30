window.onload = function() {
    var img = document.getElementById("popcat1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("speedbark2.mp3");

    img.addEventListener('mousedown', function (){
        increaseScore();
        img.src = 'speed2.jpg';
        audio.play();
    });

    img.addEventListener('mouseup', function (){
        increaseScore();
        img.src = 'speed1.jpg';
        audio.play();
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}    