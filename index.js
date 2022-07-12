// console.log("hello");
const stars = document.querySelector("#stars");
const moon = document.querySelector("#moon");
const mountains_behind = document.querySelector("#mountains_behind");
const mountains_front = document.querySelector("#mountains_front");
const text = document.querySelector("#text");
const btn = document.querySelector("#btn");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    // console.log(value);
    stars.style.left = `${value * 0.25}px`;
    moon.style.top = `${value * 1.05}px`;
    mountains_behind.style.top = `${value * 0.5}px`;
    mountains_front.style.top = `${value * 0}px`;
    text.style.marginRight = `${value * 4}px`;
    text.style.marginTop = `${value * 1.5}px`;
    btn.style.marginTop = `${value * 1.5}px`;
    header.style.top = `${value * 0.5}px`;
});
