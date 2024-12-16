// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
  const fadeInText = document.querySelectorAll(".fade-in-text");
  const buttons = document.querySelectorAll(".fade-in-button");

  // Animate text
  fadeInText.forEach((element, index) => {
    setTimeout(() => {
      element.style.animation = "fadeIn 1s ease-out forwards";
    }, index * 500); // Delay بين النصوص
  });

  // Animate buttons
  buttons.forEach((button, index) => {
    setTimeout(() => {
      button.style.animation = "fadeIn 1s ease-out forwards";
    }, 1000 + index * 500); // تأخير بعد النصوص
  });
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = "all 0.3s ease-in-out";
        console.log('Card hovered!');
    });
    card.addEventListener('mouseleave', () => {
        console.log('Card unhovered!');
    });
});