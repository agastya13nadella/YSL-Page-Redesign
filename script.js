const cursorOutline = document.querySelector("[data-cursor-outline]");
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorArrow = document.querySelector("[data-cursor-arrow]")

const divs = document.querySelectorAll("a");

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorArrow.style.left = `${posX-10}px`;
    cursorArrow.style.top = `${posY-10}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`,
    }, { duration: 50, fill: "forwards"});
});

gallery = document.getElementById("gallery")

window.onmousemove = e => {
  const mouseX = e.clientX,
        mouseY = e.clientY;
  const Xdec = mouseX / window.innerWidth,
        Ydec = mouseY / window.innerHeight;
  const maxX = (gallery.offsetWidth - window.innerWidth)-4,
        maxY = (gallery.offsetHeight - window.innerHeight)+6;
  const panX = Xdec * maxX * -2,
        panY = Ydec * maxY * -2;
  gallery.animate ({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}

function cursorHover(div) {
      div.addEventListener("mouseover", () => {
            cursorOutline.animate({
                  height: '30px',
                  width: '30px',
                  border:' 4px solid rgb(255, 255, 255)'
            }, { duration: 200, fill: "forwards"});
            cursorArrow.animate({
                  opacity: '1'
            }, { duration: 200, fill: "forwards"});
            cursorDot.animate({
                  opacity: '0'
            }, { duration: 200, fill: "forwards"});
      })
      div.addEventListener("mouseleave", () => {
            cursorOutline.animate({
                  width: '15px',
                  height: '15px',
                  border:' 2px solid rgb(255, 255, 255)'
            }, { duration: 200, fill: "forwards"});
            cursorArrow.animate({
                  opacity: '0'
            }, { duration: 200, fill: "forwards"});
            cursorDot.animate({
                  opacity: '1'
            }, { duration: 200, fill: "forwards"});
      })
}

divs.forEach(cursorHover);

