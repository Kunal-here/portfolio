const hamburger = document.querySelector("#hamburger");
const ul = document.querySelector('ul')
const nav = document.querySelector('.nav')
const logo = document.querySelector(".logo")
const cursor = document.querySelector(".cursor")
const body = document.querySelector("body");



const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
//   "#ffb56b",
//   "#fdaf69",
//   "#f89d63",
//   "#f59761",
//   "#ef865e",
//   "#ec805d",
//   "#e36e5c",
//   "#df685c",
//   "#d5585c",
//   "#d1525c",
//   "#c5415d",
//   "#c03b5d",
//   "#b22c5e",
//   "#ac265e",
//   "#9c155f",
//   "#950f5f",
//   "#830060",
//   "#7c0060",
//   "#680060",
//   "#60005f",
//   "#48005f",
//   "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});



window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();



body.addEventListener("mousemove",(dets)=>{
    cursor.style.left = dets.x-10+"px"
    cursor.style.top = dets.y-10+"px"
})




hamburger.addEventListener("click", () => {
    ul.classList.toggle("visible");
  });
  
  let isBlack = false;
  
  hamburger.addEventListener("click", () => {
    if (!isBlack) {
      nav.style.backgroundColor = "black";
      logo.style.color = "white";
      isBlack = true;
    } else {
      nav.style.backgroundColor = "transparent";
      isBlack = false;
      logo.style.color = "black";
    }
  });


  gsap.from(".projectCards",{
    y:50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".projectCards",
        scroll: "body",
        start: "top 80%",
        end: "top 58%",
        scrub: 1,

    }
})

  gsap.from(".about_Container",{
    y:50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about_Container",
        scroll: "body",
        start: "top 80%",
        end: "top 58%",
        scrub: 1,

    }
})

gsap.timeline()
    .from(".img img",{
        y:-300,
        x:300,
        opacity:0,
        duration:2,
        ease: "back"
    })

gsap.timeline()
    .from(".intro h3",{
        y:0,
        x:300,
        opacity:0,
        duration:1,
        ease: "back"
    }).from(".intro h1",{
        y:0,
        x:300,
        opacity:0,
        duration:0.5,
        ease: "back"
    }).from(".intro h2",{
        y:0,
        x:300,
        opacity:0,
        duration:0.5,
        ease: "back"
    }).from(".btns",{
        y:300,
        x:0,
        opacity:0,
        duration:0.3,
        ease: "back"
    }).from(".link a",{
        y:300,
        x:0,
        opacity:0,
        duration:0.3,
        ease: "back"
    })



