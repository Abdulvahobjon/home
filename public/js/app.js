function headerMenu() {
  let headerHamburgerBtm = document.querySelector('#headerHamburgerBtm');
  let burgerCheckbox = document.querySelector('#burger');
  let responsiveMenu = document.querySelector('#responsiveMenu');
  let overlay = document.querySelector('#overlay');
  const header = document.getElementById("navbar");

  if (!headerHamburgerBtm || !burgerCheckbox || !responsiveMenu || !overlay) {
    console.error("Elementlar topilmadi!");
    return;
  }

  // ✅ Menu ochib-yopish funksiyasi
  function toggleMenu() {
    let isOpen = burgerCheckbox.checked;

    responsiveMenu.classList.toggle('right-0', isOpen);
    responsiveMenu.classList.toggle('right-[-100%]', !isOpen);

    overlay.classList.toggle('right-0', isOpen);
    overlay.classList.toggle('right-[-100%]', !isOpen);

    document.body.classList.toggle('overflow-hidden', isOpen);
    header.classList.toggle("bg-black/90", isOpen);
    header.classList.toggle("shadow-lg", isOpen);
    header.classList.toggle("backdrop-blur", isOpen);
  }

  // ✅ `checkbox` holati o‘zgarganda ishlaydi
  burgerCheckbox.addEventListener('change', toggleMenu);

  // ✅ Overlay bosilganda menyuni yopish
  overlay.addEventListener('click', function () {
    burgerCheckbox.checked = false;
    toggleMenu();
  });
  responsiveDropdown.forEach((dropdown, index) => {
    dropdown.addEventListener("click", () => {
      dropdown.classList.toggle("max-h-[500px]")
      responsiveDropdownArrow[index].classList.toggle("rotate-180")
    })
  })
}

// ✅ Barcha elementlar yuklangandan keyin `headerMenu()` ni chaqiramiz
document.addEventListener("DOMContentLoaded", headerMenu);





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

function setNavbarBG() {
  const header = document.getElementById("navbar");
  if (window.scrollY > 50) {
    header.classList.add("bg-black/90", "shadow-lg", "backdrop-blur");
  } else {
    header.classList.remove("bg-black/90", "shadow-lg", "backdrop-blur");
  }
}

window.addEventListener("scroll", setNavbarBG);
window.addEventListener("load", setNavbarBG);

document.querySelector('#playButton') && playVideo();

let responsiveDropdown = document.querySelectorAll(".responsiveDropdown")
let responsiveDropdownArrow = document.querySelectorAll(".responsiveDropdownArrow")

