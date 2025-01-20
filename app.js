const scrollToTopBtn = document.querySelector(".to-Top");
const menu = document.querySelector(".header, .header-recipe");
// const menu = document.querySelector(".header .menu, .header-recipe .menu");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
    if (window.scrollY > menu.offsetHeight) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }

    const footerRect = footer.getBoundingClientRect();
    if (footerRect.top < window.innerHeight) {
        scrollToTopBtn.style.bottom = `${
            window.innerHeight - footerRect.top + 16
        }px`;
    } else {
        scrollToTopBtn.style.bottom = "20px";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

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
            entry.target.classList.add("reveal-visible");
        } else {
            entry.target.classList.remove("reveal-visible");
        }
    });
};

const observer = new IntersectionObserver(handleIntersection, options);
document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
});
