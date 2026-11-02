/* Pegasus Lenders Group — navigation, attribution, and Netlify Forms. */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  function closeMenu() {
    if (!toggle || !nav) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
    reveals.forEach(function (element) { observer.observe(element); });
  } else {
    reveals.forEach(function (element) { element.classList.add("is-visible"); });
  }

  var query = new URLSearchParams(window.location.search);
  var attribution = {
    utmSource: query.get("utm_source") || "",
    utmMedium: query.get("utm_medium") || "",
    utmCampaign: query.get("utm_campaign") || "",
    landingPage: window.location.pathname + window.location.search,
    referrer: document.referrer || ""
  };

  document.querySelectorAll(".js-track-form").forEach(function (form) {
    Object.keys(attribution).forEach(function (name) {
      if (form.elements[name]) form.elements[name].value = attribution[name];
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;

      var submit = form.querySelector('[type="submit"]');
      var original = submit ? submit.innerHTML : "";
      if (submit) {
        submit.disabled = true;
        submit.setAttribute("aria-busy", "true");
        submit.textContent = "Submitting…";
      }

      var data = new URLSearchParams();
      new FormData(form).forEach(function (value, key) { data.append(key, value); });

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString()
      }).then(function (response) {
        if (!response.ok) throw new Error("Submission failed");
        window.location.assign("/thank-you");
      }).catch(function () {
        if (submit) {
          submit.disabled = false;
          submit.removeAttribute("aria-busy");
          submit.innerHTML = original;
        }
        var status = form.querySelector(".form-status");
        if (!status) {
          status = document.createElement("p");
          status.className = "form-status";
          status.setAttribute("role", "alert");
          status.setAttribute("tabindex", "-1");
          form.appendChild(status);
        }
        status.textContent = "The form could not be submitted. Please try again or email contact@pegasuslendersgroup.com.";
        status.focus();
      });
    });
  });
})();
