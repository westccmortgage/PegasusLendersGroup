/* Pegasus Lenders Group — progressive enhancement only. */
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
      if (event.key === "Escape") {
        closeMenu();
        toggle.focus();
      }
    });
  }

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -32px 0px" });
    reveals.forEach(function (element) { observer.observe(element); });
  } else {
    reveals.forEach(function (element) { element.classList.add("is-visible"); });
  }

  var form = document.querySelector(".js-contact-form");
  if (!form) return;

  var submitButton = form.querySelector('[type="submit"]');
  var errorBox = form.querySelector(".form-status--error");
  var successBox = document.getElementById("form-success");
  var submitting = false;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var requiredFields = [
    { name: "name", test: function (value) { return value.length > 0; } },
    { name: "email", test: function (value) { return emailPattern.test(value); } },
    { name: "message", test: function (value) { return value.length > 0; } }
  ];

  function fieldValue(name) {
    return form.elements[name] ? form.elements[name].value.trim() : "";
  }

  function setFieldError(field, show) {
    var input = form.elements[field.name];
    var error = document.getElementById(field.name + "-error");
    if (error) error.hidden = !show;
    if (input) {
      input.setAttribute("aria-invalid", show ? "true" : "false");
      if (show && error) input.setAttribute("aria-describedby", error.id);
      else input.removeAttribute("aria-describedby");
    }
  }

  function validate() {
    var firstInvalid = null;
    requiredFields.forEach(function (field) {
      var valid = field.test(fieldValue(field.name));
      setFieldError(field, !valid);
      if (!valid && !firstInvalid) firstInvalid = form.elements[field.name];
    });
    return firstInvalid;
  }

  function setIntent(intent) {
    var type = form.elements.inquiryType;
    var message = form.elements.message;
    if (intent === "materials") {
      if (type) type.value = "Confidential Materials Request — Vista Del Mar";
      if (message && !message.value.trim()) message.value = "I would like to review the confidential materials for the Vista Del Mar opportunity.";
      if (submitButton) submitButton.innerHTML = 'Request Confidential Materials <span class="btn-arrow" aria-hidden="true">→</span>';
    } else {
      if (type) type.value = window.location.pathname.indexOf("opportunity") !== -1 ? "Capital Participation Discussion — Vista Del Mar" : "Capital Participation Discussion";
      if (message && !message.value.trim()) message.value = "I would like to discuss capital participation with Pegasus Lenders Group.";
      if (submitButton) submitButton.innerHTML = 'Discuss Capital Participation <span class="btn-arrow" aria-hidden="true">→</span>';
    }
    if (message) setFieldError({ name: "message" }, false);
  }

  document.querySelectorAll("[data-contact-intent]").forEach(function (control) {
    control.addEventListener("click", function () {
      setIntent(control.getAttribute("data-contact-intent"));
    });
  });

  requiredFields.forEach(function (field) {
    var input = form.elements[field.name];
    if (input) input.addEventListener("input", function () {
      if (field.test(input.value.trim())) setFieldError(field, false);
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (submitting) return;
    if (errorBox) errorBox.hidden = true;
    var firstInvalid = validate();
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    submitting = true;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.setAttribute("aria-busy", "true");
      submitButton.textContent = "Sending…";
    }

    var parameters = new URLSearchParams();
    new FormData(form).forEach(function (value, key) { parameters.append(key, value); });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: parameters.toString()
    }).then(function (response) {
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      form.hidden = true;
      if (successBox) {
        successBox.hidden = false;
        successBox.focus();
      }
    }).catch(function () {
      submitting = false;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.removeAttribute("aria-busy");
        submitButton.innerHTML = 'Discuss Capital Participation <span class="btn-arrow" aria-hidden="true">→</span>';
      }
      if (errorBox) errorBox.hidden = false;
    });
  });
})();
