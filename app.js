// window.addEventListener("domcontentloaded", () => {
//     const scrollToTopBtn = document.querySelector(".to-Top");
//     const menu = document.querySelector(".header, .header-recipe");
//     const footer = document.querySelector("footer");

//     const observer = new IntersectionObserver(handleIntersection, options);
//     document.querySelectorAll(".reveal").forEach((el) => {
//         observer.observe(el);
//     });
// });

const scrollToTopBtn = document.querySelector(".to-Top");
const header = document.querySelector(".header, .header-recipe");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
    if (window.scrollY > header.offsetHeight) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }

    const footerRect = footer.getBoundingClientRect();
    if (footerRect.top < window.innerHeight) {
        scrollToTopBtn.style.bottom = `${
            window.innerHeight - footerRect.top + 8}px`;
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
// }

const ratio = 0.1;
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
};

const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > ratio) {
            observer.unobserve(entry.target);
            entry.target.classList.remove("reveal");
        }
    });
};

document.documentElement.classList.add("reveal-loaded");

const observer = new IntersectionObserver(handleIntersection, options);
document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
});
