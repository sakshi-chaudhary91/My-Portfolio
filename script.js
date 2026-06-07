// =========================
// Typing Animation
// =========================

const texts = [
  "AI / ML Engineer",
  "Generative AI Enthusiast",
  "Data Analytics Intern",
  "Future AI Innovator"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

  const currentText = texts[textIndex];

  if (!isDeleting) {

    typingElement.textContent =
      currentText.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentText.length) {

      isDeleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }

  } else {

    typingElement.textContent =
      currentText.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      isDeleting = false;

      textIndex++;

      if (textIndex >= texts.length) {
        textIndex = 0;
      }
    }
  }

  setTimeout(
    typeEffect,
    isDeleting ? 50 : 100
  );
}

typeEffect();


// =========================
// Scroll Reveal Animation
// =========================

const revealElements =
document.querySelectorAll(
  ".glass-card, .skill-card, .project-card, .timeline-card, .stat-card"
);

const observer =
new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{
threshold: 0.15
}

);

revealElements.forEach((el) => {
observer.observe(el);
});


// =========================
// Active Navbar
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach((section) => {

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.clientHeight;

if (
pageYOffset >= sectionTop
) {

current = section.getAttribute("id");

}

});

navLinks.forEach((link) => {

link.classList.remove("active");

if (
link.getAttribute("href")
=== "#" + current
) {

link.classList.add("active");

}

});

});


// =========================
// Smooth Scroll
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

document
.querySelector(
this.getAttribute("href")
)
.scrollIntoView({
behavior:"smooth"
});

}
);

});


// =========================
// Counter Animation
// =========================
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCounter = () => {

        if (count < target) {

            count++;
            counter.innerText = count;

            setTimeout(updateCounter, 200);

        } else {

            counter.innerText = target + "+";
        }
    };

    updateCounter();
});




// =========================
// Parallax Hero Image
// =========================

window.addEventListener(
"mousemove",
(e) => {

const image =
document.querySelector(
".hero-right img"
);

const x =
(window.innerWidth / 2 - e.pageX) / 40;

const y =
(window.innerHeight / 2 - e.pageY) / 40;

image.style.transform =
`translate(${x}px, ${y}px)`;

}
);