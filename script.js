const hamburger = document.querySelector("#hamburger");
const ul = document.querySelector('ul')
const nav = document.querySelector('.nav')
const logo = document.querySelector(".logo")

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
        y:300,
        x:-300,
        opacity:0,
        duration:1,
        ease: "back"
    })

gsap.timeline()
    .from(".intro h3",{
        y:300,
        x:300,
        opacity:0,
        duration:0.2,
        ease: "back"
    }).from(".intro h1",{
        y:300,
        x:300,
        opacity:0,
        duration:0.2,
        ease: "back"
    }).from(".intro h2",{
        y:300,
        x:300,
        opacity:0,
        duration:0.2,
        ease: "back"
    }).from(".btns",{
        y:300,
        x:0,
        opacity:0,
        duration:0.2,
        ease: "back"
    }).from(".link a",{
        y:300,
        x:0,
        opacity:0,
        duration:0.3,
        ease: "back"
    })



