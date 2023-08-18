document.addEventListener("DOMContentLoaded", function () {
  // Select all radio buttons with the name "regarding".
  const regardingRadios = document.querySelectorAll('input[name="regarding"]');
  // Get the element with the ID "hourly-rate-input".
  const hourlyRateDiv = document.getElementById("hourly-rate-input");
  // Get the input element with the ID "hourly-rate".
  const hourlyRateInput = document.getElementById("hourly-rate");
  // Get the element with the ID "message-label".
  const messageLabel = document.getElementById("message-label");
  // Get the input element with the ID "message"
  const messageInput = document.getElementById("message");

  // Loop through each radio button
  regardingRadios.forEach((radio) => {
    // Add a change event listener to each radio button.
    radio.addEventListener("change", () => {
      // Check the value of the selected radio button.
      if (radio.value === "Hiring") {
        // If "Hiring" is selected, display the hourly rate input
        hourlyRateDiv.style.display = "block";
        // Make the hourly rate input required.
        hourlyRateInput.required = true;
        // Hide the "Message:" label and input
        messageLabel.style.display = "none";
        messageInput.style.display = "none";
      } else {
        // If not "Hiring", hide the hourly rate input.
        hourlyRateDiv.style.display = "none";
        hourlyRateInput.required = false;
        // Show the "Message:" label and input.
        messageLabel.style.display = "block";
        messageInput.style.display = "block";
      }
    });
  });
});

// Select all anchor links with href attributes starting with "#".
const scrollLinks = document.querySelectorAll('a[href^="#"]');
// Loop through each anchor link.
scrollLinks.forEach((link) => {
  // Add a click event listener to each anchor link.
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // Get the target element based on the link's href attribute
    const target = document.querySelector(link.getAttribute("href"));
    // Scroll to the target element with smooth behavior.
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// scrollToTop
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class "scroll-to-top-btn".
  const scrollToTopBtns = document.querySelectorAll(".scroll-to-top-btn");
  // Loop through each scroll-to-top button.
  scrollToTopBtns.forEach((btn) => {
    // Add a click event listener to each scroll-to-top button.
    btn.addEventListener("click", () => {
      // Scroll to the top of the references section with smooth behavior
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
