console.log("hello from js");

const sliders = document.querySelector(".sliders");
const leftArrow = document.getElementById("arrow-l");
const rightArrow = document.getElementById("arrow-r");
const dots = document.querySelectorAll(".dots a");
const bullets = document.querySelector(".dots");
const slider = Array.from(document.getElementsByClassName("slider"));
let sliderIndex = 0;
//  const arrNum =slider.length
//  console.log(arrNum);

// const handleArrow=()=>{
//     console.log('clicked')
// }
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderIndex = index;
    document.querySelector(".dots .active").classList.remove("active");
    dot.classList.add("active");

    sliders.style.transform = "translate(" + index * -23.2 + "%)";
  });
});
setInterval(() => {
  sliderIndex = sliderIndex < 4 ? sliderIndex + 1 : 0;
  document.querySelector(".dots .active").classList.remove("active");
  bullets.children[sliderIndex].classList.add("active");
  sliders.style.transform = "translate(" + sliderIndex * -23.2 + "%)";
}, 3000);

leftArrow.addEventListener("click", () => {
  sliderIndex = sliderIndex > 0 ? sliderIndex - 1 : 0;
  document.querySelector(".dots .active").classList.remove("active");
  bullets.children[sliderIndex].classList.add("active");
  sliders.style.transform = "translate(" + sliderIndex * -23.2 + "%)";
});

rightArrow.addEventListener("click", () => {
  sliderIndex = sliderIndex < 4 ? sliderIndex + 1 : 4;
  document.querySelector(".dots .active").classList.remove("active");
  bullets.children[sliderIndex].classList.add("active");
  sliders.style.transform = "translate(" + sliderIndex * -23.2 + "%)";
});
