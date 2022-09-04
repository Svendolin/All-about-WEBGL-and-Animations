const soundBtn = document.querySelector('.buttonToStart');
    let myAudio = document.querySelector('.audioplayer');
    soundBtn.addEventListener('click', e => {
      myAudio.play();
    });