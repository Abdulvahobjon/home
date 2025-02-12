

function headerMenu() {
  let headerHamburgerBtm = document.querySelector('#headerHamburgerBtm')
  let rasponsiveMenu = document.querySelector('#rasponsiveMenu')
  let headerCloseBtn = document.querySelector('#headerCloseBtn')
  let overlay = document.querySelector('#overlay')

  headerCloseBtn.addEventListener('click', function () {
    rasponsiveMenu.classList.add('left-[-100%]')
    rasponsiveMenu.classList.remove('left-0')

    overlay.classList.add('left-[-100%]')
    overlay.classList.remove('left-0')

    document.body.classList.remove('overflow-hidden')
  })

  headerHamburgerBtm.addEventListener('click', function () {
    rasponsiveMenu.classList.remove('left-[-100%]')
    rasponsiveMenu.classList.add('left-0')

    overlay.classList.remove('left-[-100%]')
    overlay.classList.add('left-0')

    document.body.classList.add('overflow-hidden')
  })

  overlay.addEventListener('click', function () {
    rasponsiveMenu.classList.add('left-[-100%]')
    rasponsiveMenu.classList.remove('left-0')

    overlay.classList.add('left-[-100%]')
    overlay.classList.remove('left-0')

    document.body.classList.remove('overflow-hidden')
  })
}

function playVideo() {
  const video = document.getElementById("video");
  const playButton = document.getElementById("playButton");

  playButton.addEventListener("click", function () {
    video.setAttribute("controls", "");
    video.classList.remove("brightness-75");
    playButton.style.display = "none";
    video.play();
  });
}

document.querySelector('#headerHamburgerBtm') && headerMenu();
document.querySelector('#playButton') && playVideo();