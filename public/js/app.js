function headerMenu() {
  let burgerCheckbox = document.querySelector("#burger");
  let responsiveMenu = document.querySelector("#responsiveMenu");
  let overlay = document.querySelector("#overlay");
  let header = document.getElementById("navbar");
  let responsiveDropdown = document.querySelectorAll(".responsiveDropdown");
  let responsiveDropdownArrow = document.querySelectorAll(".responsiveDropdownArrow");

  if (!burgerCheckbox || !responsiveMenu || !overlay || !header) return;

  // ✅ Menu ochib-yopish funksiyasi
  function toggleMenu() {
    let isOpen = burgerCheckbox.checked;

    responsiveMenu.classList.toggle("right-0", isOpen);
    responsiveMenu.classList.toggle("right-[-100%]", !isOpen);

    overlay.classList.toggle("right-0", isOpen);
    overlay.classList.toggle("right-[-100%]", !isOpen);

    header.classList.toggle("bg-black/90", isOpen);
    header.classList.toggle("shadow-lg", isOpen);
    header.classList.toggle("backdrop-blur", isOpen);

    if (window.innerWidth <= 450) {
      console.log(isOpen);
      document.querySelector('html').style.overflow = isOpen ? 'hidden' : null;
    }
  }

  // ✅ `checkbox` holati o‘zgarganda ishlaydi
  burgerCheckbox.addEventListener("change", toggleMenu);

  // ✅ Overlay bosilganda menyuni yopish
  overlay.addEventListener("click", function () {
    burgerCheckbox.checked = false;
    toggleMenu();
  });

  // ✅ Dropdown menyularini ochish-yopish
  if (responsiveDropdown.length && responsiveDropdownArrow.length) {
    responsiveDropdown.forEach((dropdown, index) => {
      dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("max-h-[500px]");
        responsiveDropdownArrow[index]?.classList.toggle("rotate-180");
      });
    });
  }
}

// ✅ Navbar fonini o‘zgartirish funksiyasi
function setNavbarBG() {
  const header = document.getElementById("navbar");
  const consultationBtn = document.getElementById("consultationBtn");
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("bg-black/70", "shadow-lg", "backdrop-blur-sm");
  } else {
    header.classList.remove("bg-black/70", "shadow-lg", "backdrop-blur-sm",);
  }
}

// ✅ Video pleer funksiyasi
function playVideo() {
  const video = document.getElementById("video");
  const playButton = document.getElementById("playButton");

  if (!video || !playButton) return;

  playButton.addEventListener("click", function () {
    video.setAttribute("controls", "");
    video.classList.remove("brightness-75");
    playButton.style.display = "none";
    video.play();
  });
}

// ✅ Salesforce formasi uchun sana formatini to‘g‘rilash
function formatLeadFormDate() {
  let leadForm = document.getElementById("leadForm");
  let dateField = document.getElementById("preferred_date");

  if (!leadForm || !dateField) return;

  leadForm.addEventListener("submit", function () {
    if (dateField.value) {
      let formattedDate = new Date(dateField.value).toISOString().split("T")[0]; // YYYY-MM-DD format
      dateField.value = formattedDate;
    }
  });
}

// ✅ Sahifa yuklanganda funksiyalarni ishga tushiramiz
document.addEventListener("DOMContentLoaded", () => {
  headerMenu();
  setNavbarBG();
  formatLeadFormDate();
  document.querySelector("#playButton") && playVideo();
});

// ✅ Scroll bo‘lganda navbar fonini o‘zgartirishni qo‘shish
window.addEventListener("scroll", setNavbarBG);
window.addEventListener("load", setNavbarBG);

const fileInput = document.querySelector(".custom-file-input");

fileInput?.addEventListener("change", function () {
  if (this.files.length > 0) {
    this.classList.add("has-file");
  } else {
    this.classList.remove("has-file");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const consultationBtns = document.querySelectorAll("#consultationBtn");
  const leadFormContainer = document.getElementById("leadFormContainer");
  const overlay = document.getElementById("overlayForm");
  const closeForm = document.getElementById("closeForm");

  // Modalni ochish
  const openForm = () => {
    leadFormContainer.classList.remove("scale-0", "opacity-0");
    overlay.classList.remove("hidden");
  };

  // Modalni yopish
  const closeFormHandler = () => {
    leadFormContainer.classList.add("scale-0", "opacity-0");
    overlay.classList.add("hidden");
  };

  // Tugmalar bosilganda modalni ochish / yopish
  if (consultationBtns) {
    consultationBtns.forEach(consultationBtn => {
      consultationBtn.addEventListener("click", openForm);
    })
  }
  if (closeForm) {
    closeForm.addEventListener("click", closeFormHandler);
  }
  if (overlay) {
    overlay.addEventListener("click", closeFormHandler);
  }

  // Modalni tashqarisiga bosganda ham yopish
  leadFormContainer.addEventListener("click", (e) => {
    if (!e.target.closest(".relative")) {
      closeFormHandler();
    }
  });
});



