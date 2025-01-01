// 섹션바꾸기
document.getElementById('container').addEventListener('wheel', (event) => {
  const container = event.currentTarget;
  const delta = event.deltaY;

  if (delta > 0) {
    container.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
  else {
    container.scrollBy({
      top: -window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
  event.preventDefault();
});

// 하이퍼링크 부드럽게
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 스킬바
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skills");
  const bars = document.querySelectorAll(".bar-fill");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          bars.forEach((bar) => {
            const fillWidth = bar.getAttribute("data-fill-width");
            bar.style.width = fillWidth;

            const value = bar.querySelector(".value");
            value.textContent = fillWidth; 
            value.style.left = fillWidth; 
          });
          observer.disconnect(); 
        }
      });
    },
    {
      threshold: 1, 
    }
  );

  observer.observe(skillsSection);
});

// 스킬 description
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");
  const descriptionBox = document.querySelector(".description-box");

  bars.forEach((bar) => {
    bar.addEventListener("click", () => {
      const description = bar.getAttribute("data-description");
      descriptionBox.innerHTML = description;
    });
  });
});
