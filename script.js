let crsr = document.querySelector(".cursor");
let crsrBg = document.querySelector(".cursor-bg-blur");

let crsrBgX = 0;
let crsrBgY = 0;
let speed = 0.06; // Adjust the speed factor as needed

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = `${dets.x - 5}px`;
    crsr.style.top = `${dets.y - 5}px`;

    let targetX = dets.x - 150;
    let targetY = dets.y - 150;

    crsrBgX += (targetX - crsrBgX) * speed;
    crsrBgY += (targetY - crsrBgY) * speed;

    crsrBg.style.left = `${crsrBgX}px`;
    crsrBg.style.top = `${crsrBgY}px`;
});





gsap.to(".navbar", {
    backgroundColor: "#000",
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".navbar",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

let h4s = document.querySelectorAll(".navbar");
h4s.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
        crsr.style.transform = "scale(3)";
        crsr.style.border = "0.1px solid white";
        crsr.style.backgroundColor = "transparent";
        crsr.style.zIndex = 10
    });

    elem.addEventListener("mouseleave", function () {
        crsr.style.transform = "scale(1)";
        crsr.style.border = " 1px solid white"; /* Optional: Reset the border if needed */
        crsr.style.backgroundColor = "transparent"; /* Optional: Reset the background color */
        crsr.style.zIndex = 10

    });
});




gsap.to(".main-section", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main-section",
        scroller: "body",
        // markers:true,
        start: "top -30%",
        end: "top -70%",
        scrub: 2

    }
})

gsap.from(".about-us img,.about-text", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 60%",
        scrub: 3
    }
})
gsap.from(".bar", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".bar",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 70%",
        scrub: 3
    }
})
gsap.from(".text-quote",{
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".text-quote",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 80%",
        scrub: 3
    }
})






gsap.from("#start-quote",{
    y: -80,
    x: -80,
    scrollTrigger: {
        trigger: "#start-quote",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 3
    }
})
gsap.from("#end-quote",{
    y: 80,
    x: 80,
    scrollTrigger: {
        trigger: "#start-quote",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 3
    }
})
gsap.to(".p4-h4s",{
    y:10,
    scrollTrigger: {
        trigger: ".p4-h4s",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
})
let icons = document.querySelectorAll(".social-icons");
icons.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
        crsr.style.transform = "scale(3)";
        crsr.style.border = "0.1px solid white";
        crsr.style.backgroundColor = "transparent";
        crsr.style.zIndex = 10
    });

    elem.addEventListener("mouseleave", function () {
        crsr.style.transform = "scale(1)";
        crsr.style.border = " 1px solid white"; /* Optional: Reset the border if needed */
        crsr.style.backgroundColor = "transparent"; /* Optional: Reset the background color */
        crsr.style.zIndex = 10

    });
});

    