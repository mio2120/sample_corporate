(() => {
  "use strict";

  // Mobile navigation toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // FAQ category filter (faq.html only)
  const filterButtons = document.querySelectorAll(".faq-filter [data-filter]");
  const faqItems = document.querySelectorAll("[data-category]");

  if (filterButtons.length && faqItems.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");
        const target = btn.dataset.filter;

        faqItems.forEach((item) => {
          const match = target === "all" || item.dataset.category === target;
          item.hidden = !match;
        });
      });
    });
  }
})();
