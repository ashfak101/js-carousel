console.log('hello from js')


const sliders =document.querySelector(".sliders");
const leftArrow = document.getElementById('arrow-l');
const  rightArrow= document.getElementById("arrow-r");
const slider = Array.from(document.getElementsByClassName("slider"))
 let sliderIndex = 0;
//  const arrNum =slider.length 
//  console.log(arrNum);

// const handleArrow=()=>{
//     console.log('clicked')
// } 
rightArrow.addEventListener("click", ()=> {
    sliderIndex = (sliderIndex < 5 )? sliderIndex + 1: 0;
     sliders.style.transform = 'translate(' +( sliderIndex)* -15 +'%)';
  });