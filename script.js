const col = document.getElementsByClassName("collapsible");
const box = document.getElementById("box");

for (let i = 0; i < col.length; i++) {
  col[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
  col[i].addEventListener("mouseover", function () {
    box.classList.add("goleft");
  });
  col[i].addEventListener("mouseout", function () {
    box.classList.remove("goleft");
  });
}

const illust = document.getElementById("illust");
const shadow = document.getElementById("shadow");

function handleResize() {
  if (window.innerWidth >= 1024) {
    illust.src = "./images/illustration-woman-online-desktop.svg";
    shadow.src = "./images/bg-pattern-desktop.svg";
  } else if (window.innerWidth < 1024) {
    illust.src = "./images/illustration-woman-online-mobile.svg";
    shadow.src = "./images/bg-pattern-mobile.svg";
  }
}

handleResize();

window.addEventListener("resize", handleResize);
