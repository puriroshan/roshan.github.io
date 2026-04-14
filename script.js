const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const abstractToggleButtons = document.querySelectorAll(".abstract-toggle-inline");

abstractToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const rest = button.parentElement.querySelector(".abstract-rest");
    if (!rest) {
      return;
    }

    const isExpanded = button.getAttribute("aria-expanded") === "true";
    rest.hidden = isExpanded;
    button.setAttribute("aria-expanded", String(!isExpanded));
    button.textContent = isExpanded ? "Read More" : "Show Less";
  });
});
