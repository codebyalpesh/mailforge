/* =========================
   APP INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
  initRevealOnScroll();
  initScrollTopButton();
});


/* =========================
   SCROLL REVEAL SYSTEM
========================= */
function initRevealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  if (!reveals.length) return;

  const revealPoint = 150;

  function handleReveal() {
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", handleReveal, { passive: true });
  handleReveal(); // initial trigger
}


/* =========================
   SCROLL TOP BUTTON
========================= */
function initScrollTopButton() {
  const topBtn = createScrollTopButton();

  handleScrollVisibility(topBtn);
  handleScrollClick(topBtn);
}


/* ---------- Create Button ---------- */
function createScrollTopButton() {
  const btn = document.createElement("button");
  btn.className = "scroll-top";
  btn.setAttribute("aria-label", "Scroll to top");

  btn.innerHTML = `<i class="fas fa-arrow-up"></i>`;

  document.body.appendChild(btn);

  return btn;
}


/* ---------- Show / Hide ---------- */
function handleScrollVisibility(btn) {
  window.addEventListener(
    "scroll",
    () => {
      const shouldShow = window.scrollY > 500;
      btn.classList.toggle("show", shouldShow);
    },
    { passive: true }
  );
}


/* ---------- Click Action ---------- */
function handleScrollClick(btn) {
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}