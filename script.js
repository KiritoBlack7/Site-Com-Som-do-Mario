// script.js

document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio('sound/Its a me Mario.mp3');
  
    document.getElementById('playButton').addEventListener('click', function() {
      audio.play();
    });
  });
  