const text = document.getElementById('text');
const container = document.getElementById('container');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.classList = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold!';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.classList = 'container shrink';
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);
