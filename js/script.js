document.addEventListener("DOMContentLoaded", function () {
  const regardingRadios = document.querySelectorAll('input[name="regarding"]');
  const hourlyRateDiv = document.getElementById("hourly-rate-input");
  const hourlyRateInput = document.getElementById("hourly-rate");
  const messageLabel = document.getElementById("message-label"); // Get the "Message:" label
  const messageInput = document.getElementById("message"); // Add this line

  regardingRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.value === "Hiring") {
        hourlyRateDiv.style.display = "block";
        hourlyRateInput.required = true;
        messageLabel.style.display = "none"; // Hide the "Message:" label
        messageInput.style.display = "none";
      } else {
        hourlyRateDiv.style.display = "none";
        hourlyRateInput.required = false;
        messageLabel.style.display = "block"; // Show the "Message:" label
        messageInput.style.display = "block";
      }
    });
  });
});

const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});



// scrollToTop.js
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtns = document.querySelectorAll(".scroll-to-top-btn");

  scrollToTopBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Scroll to the top of the references section
      const referencesSection = document.querySelector(".references");
      if (referencesSection) {
        referencesSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
