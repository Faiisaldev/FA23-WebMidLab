document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("QnAForm");
  const faqContainer = document.querySelector(".faq-container");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const questionInput = document.getElementById("Question");
    const answerInput = document.getElementById("Answer");

    const newFaq = document.createElement("div");
    newFaq.className = "faq";
    newFaq.innerHTML = `
      <h3 class="faq-title">${questionInput.value}</h3>
      <p class="faq-text">${answerInput.value}</p>
      <button class="faq-toggle">
        <i class="fas fa-chevron-down"></i>
        <i class="fas fa-times"></i>
      </button>
    `;

    faqContainer.appendChild(newFaq);

    questionInput.value = "";
    answerInput.value = "";
  });

  faqContainer.addEventListener("click", function (event) {
    const toggleButton = event.target.closest(".faq-toggle");
    const deleteButton = event.target.closest(".faq-title .fa-times");
    if (toggleButton) {
      const faqElement = toggleButton.closest(".faq");
      faqElement.classList.toggle("active");
    } else if (deleteButton) {
      const faqElement = deleteButton.closest(".faq");
      faqContainer.removeChild(faqElement);
    }
  });
});
