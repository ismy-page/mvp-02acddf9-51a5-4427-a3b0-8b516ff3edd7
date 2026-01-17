(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const btn = document.getElementById("ctaButton");
  const out = document.getElementById("ctaResult");
  if (btn && out) {
    btn.addEventListener("click", () => {
      const email = "hello@example.com";
      const subject = encodeURIComponent("Commission inquiry — Living Paintings");
      const body = encodeURIComponent(
        "Hi, I’d love to discuss a commission or collaboration.\n\nDetails:"
      );
      out.textContent = "Opening your email client…";
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }
})();

