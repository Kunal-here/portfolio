const hamburger = document.querySelector("#hamburger");
const ul = document.querySelector('ul')
const nav = document.querySelector('.nav')
const logo = document.querySelector(".logo")
const cursor = document.querySelector(".cursor")
const body = document.querySelector("body");
const main = document.querySelector(".main");


hamburger.addEventListener("click", () => {
    ul.classList.toggle("visible");
  });
  
  let isBlack = false;
  
  hamburger.addEventListener("click", () => {
    if (!isBlack) {
      nav.style.backgroundColor = "black";
      logo.style.color = "white";
      isBlack = true;
      hamburger.classList.replace("fa-bars", "fa-x");
    } else {
      nav.style.backgroundColor = "transparent";
      isBlack = false;
      logo.style.color = "black";
      hamburger.classList.replace("fa-x", "fa-bars");
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
        ease: "back",
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


// 





