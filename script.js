/* ============================================================
   Pegasus Lenders Group — progressive enhancement
   Mobile nav · scroll reveal · human-led contact form (mailto)
   No tracking, no accounts, no automated pipeline.
   ============================================================ */

(function () {
  "use strict";

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---- Contact form: human-led, composes a direct email ----
     Intentionally not wired to any automated pipeline. It opens
     the visitor's mail client addressed to Pegasus. To route
     through a form service instead, replace the body of this
     handler — no markup change is required. */
  var CONTACT_EMAIL = "contact@pegasuslendersgroup.com";
  var form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var get = function (id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : "";
      };

      var name = get("name");
      var email = get("email");

      if (!name || !email) {
        var firstEmpty = document.getElementById(!name ? "name" : "email");
        if (firstEmpty) firstEmpty.focus();
        return;
      }

      var lines = [
        "Name: " + name,
        "Email: " + email,
        "Phone: " + (get("phone") || "—"),
        "Company: " + (get("company") || "—"),
        "Estimated Capital Range: " + get("capital"),
        "",
        "Message:",
        get("message") || "—"
      ];

      var subject = "Capital participation inquiry — " + (name || "Pegasus");
      var href =
        "mailto:" +
        CONTACT_EMAIL +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(lines.join("\n"));

      window.location.href = href;
    });
  }
})();
