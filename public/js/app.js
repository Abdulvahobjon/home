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

    document.body.classList.toggle("overflow-hidden", isOpen);
    header.classList.toggle("bg-black/90", isOpen);
    header.classList.toggle("shadow-lg", isOpen);
    header.classList.toggle("backdrop-blur", isOpen);
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
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("bg-black/90", "shadow-lg", "backdrop-blur");
  } else {
    header.classList.remove("bg-black/90", "shadow-lg", "backdrop-blur",);
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

document.addEventListener("DOMContentLoaded", () => {
  // Elementlarni olish
  const consultationBtn = document.getElementById("consultationBtn");
  const leadFormContainer = document.getElementById("leadFormContainer");
  const overlay = document.getElementById("overlay");
  const closeForm = document.getElementById("closeForm");
  const leadForm = document.getElementById("leadForm");
  const dateField = document.getElementById("preferred_date");

  // Formani ochish
  const openForm = () => {
    leadFormContainer.classList.remove("scale-0", "opacity-0");
    overlay.classList.remove("hidden");
  };

  // Formani yopish
  const closeFormHandler = () => {
    leadFormContainer.classList.add("scale-0", "opacity-0");
    overlay.classList.add("hidden");
  };

  consultationBtn.addEventListener("click", openForm);
  closeForm.addEventListener("click", closeFormHandler);
  overlay.addEventListener("click", closeFormHandler);

  // Modal ichidagi formani bosganda modal yopilmasligi uchun
  leadFormContainer.addEventListener("click", (e) => {
    if (e.target === leadFormContainer) {
      closeFormHandler();
    }
  });

  // Formani yuborish
  if (leadForm && dateField) {
    leadForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Sahifani yangilanishini oldini olish

      // Sana formatini to‘g‘rilash
      if (dateField.value) {
        dateField.value = new Date(dateField.value).toISOString().split("T")[0]; // YYYY-MM-DD format
      }

      // Form ma’lumotlarini olish
      const formData = new FormData(leadForm);

      // Salesforce’ga so‘rov yuborish
      fetch(leadForm.action, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Salesforce'ga yuborishda CORS muammolarini oldini olish
      })
        .then(() => {
          alert("Your request has been submitted successfully!");
          closeFormHandler(); // Formani yopish
          leadForm.reset(); // Formani tozalash
        })
        .catch((error) => {
          console.error("Error submitting the form:", error);
        });
    });
  }
});


