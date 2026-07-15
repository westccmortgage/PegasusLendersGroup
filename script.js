/* ============================================================
   Pegasus Lenders Group — progressive enhancement
   Mobile nav · scroll reveal · Netlify capital-interest form
   No backend, no accounts, no payment integration, no database.
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

  /* ---- Netlify capital-interest form ----
     Submits a URL-encoded AJAX POST to "/" (Netlify Forms). The static
     hidden form in index.html lets Netlify detect the form at deploy time.
     No backend, serverless function, CRM, payment, account, or database. */
  var form = document.getElementById("contact-form");

  if (form) {
    var submitBtn = document.getElementById("submit-btn");
    var errorBox = document.getElementById("form-error");
    var successBox = document.getElementById("form-success");
    var submitting = false;

    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var fields = [
      { id: "name", errId: "name-error", test: function (v) { return v.length > 0; } },
      { id: "email", errId: "email-error", test: function (v) { return EMAIL_RE.test(v); } },
      { id: "message", errId: "message-error", test: function (v) { return v.length > 0; } }
    ];

    var val = function (id) {
      var el = form.elements[id];
      return el ? el.value.trim() : "";
    };

    var showFieldError = function (f, show) {
      var input = document.getElementById(f.id);
      var err = document.getElementById(f.errId);
      if (err) err.hidden = !show;
      if (input) {
        input.setAttribute("aria-invalid", show ? "true" : "false");
        if (err) input.setAttribute("aria-describedby", show ? f.errId : "");
      }
    };

    var validate = function () {
      var firstInvalid = null;
      fields.forEach(function (f) {
        var ok = f.test(val(f.id));
        showFieldError(f, !ok);
        if (!ok && !firstInvalid) firstInvalid = document.getElementById(f.id);
      });
      return firstInvalid;
    };

    var setSubmitting = function (on) {
      submitting = on;
      if (!submitBtn) return;
      submitBtn.disabled = on;
      submitBtn.setAttribute("aria-busy", on ? "true" : "false");
      submitBtn.innerHTML = on
        ? "Sending…"
        : 'Speak with Pegasus <span class="btn-arrow">→</span>';
    };

    var encode = function (data) {
      // application/x-www-form-urlencoded via URLSearchParams
      var params = new URLSearchParams();
      Object.keys(data).forEach(function (k) {
        params.append(k, data[k]);
      });
      return params.toString();
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (submitting) return; // prevent duplicate submissions

      if (errorBox) errorBox.hidden = true;

      var firstInvalid = validate();
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      setSubmitting(true);

      var data = {
        "form-name": "capital-interest",
        name: val("name"),
        email: val("email"),
        phone: val("phone"),
        company: val("company"),
        capitalRange: val("capitalRange"),
        message: val("message"),
        "bot-field": form.elements["bot-field"] ? form.elements["bot-field"].value : ""
      };

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data)
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Bad status " + res.status);
          // Success: reveal confirmation, reset, move focus for a11y.
          form.reset();
          form.hidden = true;
          if (successBox) {
            successBox.hidden = false;
            successBox.focus();
          }
        })
        .catch(function () {
          setSubmitting(false);
          if (errorBox) errorBox.hidden = false;
        });
    });

    // Clear a field's error as the visitor corrects it.
    fields.forEach(function (f) {
      var input = document.getElementById(f.id);
      if (input) {
        input.addEventListener("input", function () {
          if (f.test(input.value.trim())) showFieldError(f, false);
        });
      }
    });
  }
})();
