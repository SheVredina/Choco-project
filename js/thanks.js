(() => {
    const refs = {
      openThanksBtn: document.querySelector("[data-thanks-open]"),
      closeThanskBtn: document.querySelector("[data-thanks-close]"),
      thanks: document.querySelector("[data-thanks]"),
    };
  
    refs.openThanksBtn.addEventListener("click", toggleThanks);
    refs.closeThanskBtn.addEventListener("click", toggleThanks);

    function toggleThanks() {
      refs.thanks.classList.toggle("is-hidden");
    }
  })(); 