"use strict";

const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/xbdndjar";
const CONTACT_FORM_ENDPOINT_PLACEHOLDER = "PASTE_YOUR_FORMSPREE_ENDPOINT_HERE";

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#siteNavbar");
  const navLinks = Array.from(document.querySelectorAll(".site-navbar .nav-link[href^='#']"));
  const scrollToggle = document.querySelector(".page-scroll-toggle");
  const currentYear = document.querySelector("#currentYear");
  const navbarCollapse = document.querySelector("#primaryNavbar");
  const contactForm = document.querySelector("#contactForm");
  const contactStatus = document.querySelector("#contactStatus");
  const motionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  const prefersReducedMotion = motionQuery ? motionQuery.matches : false;

  const getHeaderOffset = () => (navbar ? navbar.offsetHeight + 10 : 0);

  const getMaxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

  const updateScrollToggle = () => {
    if (!scrollToggle) {
      return;
    }

    const maxScroll = getMaxScroll();
    const goUp = maxScroll > 0 && window.scrollY >= maxScroll / 2;
    const label = goUp ? "Back to top" : "Go to bottom";
    const icon = scrollToggle.querySelector("i");

    scrollToggle.hidden = maxScroll === 0;
    scrollToggle.dataset.direction = goUp ? "up" : "down";
    scrollToggle.setAttribute("aria-label", label);
    scrollToggle.setAttribute("title", label);
    if (icon) {
      icon.classList.toggle("bi-arrow-up", goUp);
      icon.classList.toggle("bi-arrow-down", !goUp);
    }
  };

  const updateNavbarShadow = () => {
    if (!navbar) {
      return;
    }

    navbar.classList.toggle("has-shadow", window.scrollY > 12);
  };

  const setActiveLink = () => {
    if (!navLinks.length) {
      return;
    }

    const offset = getHeaderOffset() + 28;
    let currentId = "home";

    navLinks.forEach((link) => {
      const sectionId = link.getAttribute("href");
      if (!sectionId || sectionId === "#") {
        return;
      }

      const section = document.querySelector(sectionId);
      if (section && section.offsetTop - offset <= window.scrollY) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const scrollToTarget = (target) => {
    const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  };

  const setStatus = (message, type = "") => {
    if (!contactStatus) {
      return;
    }

    contactStatus.textContent = message;
    contactStatus.classList.toggle("is-error", type === "error");
    contactStatus.classList.toggle("is-success", type === "success");
  };

  const openMailtoFallback = (fields) => {
    const subject = encodeURIComponent(fields.subject.value.trim());
    const body = encodeURIComponent(
      `Sender Name: ${fields.name.value.trim()}\n` +
      `Sender Email: ${fields.email.value.trim()}\n\n` +
      `${fields.message.value.trim()}`
    );

    window.location.href = `mailto:mdwoalinur@gmail.com?subject=${subject}&body=${body}`;
  };

  const hasConfiguredContactEndpoint = () => (
    CONTACT_FORM_ENDPOINT &&
    CONTACT_FORM_ENDPOINT !== CONTACT_FORM_ENDPOINT_PLACEHOLDER &&
    CONTACT_FORM_ENDPOINT.startsWith("https://formspree.io/")
  );

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    if (!contactForm) {
      return;
    }

    const fields = {
      name: contactForm.elements.name,
      email: contactForm.elements.email,
      subject: contactForm.elements.subject,
      message: contactForm.elements.message
    };

    if (!fields.name || !fields.email || !fields.subject || !fields.message) {
      setStatus("The contact form is missing a required field.", "error");
      return;
    }

    Object.values(fields).forEach((field) => {
      if (field) {
        field.classList.remove("is-invalid");
      }
    });

    const missingFields = Object.values(fields).filter((field) => field && !field.value.trim());
    if (missingFields.length) {
      missingFields.forEach((field) => field.classList.add("is-invalid"));
      missingFields[0].focus();
      setStatus("Please complete all required fields before sending.", "error");
      return;
    }

    if (fields.email && !fields.email.checkValidity()) {
      fields.email.classList.add("is-invalid");
      fields.email.focus();
      setStatus("Please enter a valid email address.", "error");
      return;
    }

    const submitButton = contactForm.querySelector("button[type='submit']");

    if (!hasConfiguredContactEndpoint()) {
      setStatus("Contact form endpoint is not configured yet. Opening your email client as a backup.", "error");
      openMailtoFallback(fields);
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
    }

    setStatus("Sending your message...", "success");

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: fields.name.value.trim(),
          email: fields.email.value.trim(),
          subject: fields.subject.value.trim(),
          message: fields.message.value.trim()
        })
      });

      if (!response.ok) {
        throw new Error("Contact form request failed.");
      }

      contactForm.reset();
      setStatus("Thank you. Your message has been sent successfully.", "success");
    } catch (error) {
      setStatus("The form could not send online. Opening your email client as a backup.", "error");
      openMailtoFallback(fields);
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      const target = href ? document.querySelector(href) : null;

      if (!target) {
        return;
      }

      event.preventDefault();
      scrollToTarget(target);

      if (navbarCollapse && navbarCollapse.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
      }
    });
  });

  if (scrollToggle) {
    scrollToggle.addEventListener("click", () => {
      window.scrollTo({
        top: scrollToggle.dataset.direction === "up" ? 0 : getMaxScroll(),
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
  }

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  updateNavbarShadow();
  setActiveLink();
  updateScrollToggle();
  window.addEventListener("scroll", updateNavbarShadow, { passive: true });
  window.addEventListener("scroll", setActiveLink, { passive: true });
  window.addEventListener("resize", setActiveLink);
  window.addEventListener("scroll", updateScrollToggle, { passive: true });
  window.addEventListener("resize", updateScrollToggle);
  window.addEventListener("load", updateScrollToggle);

  console.info("Md. Woalinur Portfolio initialized - Phase 5");
});
