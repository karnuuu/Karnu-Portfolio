document.addEventListener("DOMContentLoaded", () => {

  /* ============================================
     Section navigation with sliding indicator
  ============================================ */
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".content-section");
  const indicator = document.getElementById("navIndicator");
  const topnav = document.getElementById("topnav");

  function moveIndicator(link) {
    if (!link) return;
    indicator.style.width = link.offsetWidth + "px";
    indicator.style.transform = `translateX(${link.offsetLeft - 6}px)`;
  }

  function activateSection(id) {
    sections.forEach(sec => sec.classList.toggle("active-section", sec.id === id));
    navLinks.forEach(link => link.classList.toggle("active", link.dataset.section === id));
    const activeLink = document.querySelector(`.nav-link[data-section="${id}"]`);
    moveIndicator(activeLink);

    if (id === "skills") animateSkillBars();
    closeSidebar();
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      activateSection(link.dataset.section);
      history.replaceState(null, "", `#${link.dataset.section}`);
    });
  });

  // Initial section from hash, or default
  const initialId = window.location.hash ? window.location.hash.substring(1) : "about";
  const validIds = Array.from(sections).map(s => s.id);
  activateSection(validIds.includes(initialId) ? initialId : "about");

  window.addEventListener("resize", () => {
    const current = document.querySelector(".nav-link.active");
    moveIndicator(current);
  });

  /* ============================================
     Animated skill bars (run once)
  ============================================ */
  let skillsAnimated = false;
  function animateSkillBars() {
    if (skillsAnimated) return;
    skillsAnimated = true;
    document.querySelectorAll(".skill-fill").forEach(bar => {
      const target = bar.dataset.width;
      requestAnimationFrame(() => {
        bar.style.width = target + "%";
      });
    });
  }

  /* ============================================
     Portfolio filtering
  ============================================ */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");
  const emptyMsg = document.getElementById("emptyMsg");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      projectItems.forEach(item => {
        const show = filter === "all" || item.dataset.cat === filter;
        item.style.display = show ? "" : "none";
        if (show) visibleCount++;
      });

      emptyMsg.classList.toggle("d-none", visibleCount !== 0);
    });
  });

  /* ============================================
     Contact form validation (client-side only)
  ============================================ */
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("formSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    [fullName, email, message].forEach(field => field.classList.remove("is-invalid"));

    if (fullName.value.trim() === "") {
      fullName.classList.add("is-invalid");
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add("is-invalid");
      valid = false;
    }

    if (message.value.trim() === "") {
      message.classList.add("is-invalid");
      valid = false;
    }

    if (valid) {
      successMsg.classList.remove("d-none");
      form.reset();
      setTimeout(() => successMsg.classList.add("d-none"), 4000);
    } else {
      successMsg.classList.add("d-none");
    }
  });

  /* ============================================
     Mobile sidebar toggle
  ============================================ */
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuToggle = document.getElementById("menuToggle");

  function openSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("show");
  }
  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  }

  menuToggle.addEventListener("click", () => {
    sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
  });
  overlay.addEventListener("click", closeSidebar);

});
