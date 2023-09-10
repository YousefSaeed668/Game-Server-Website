let loginBtn = document.querySelector(".login-btn");
let dropLogin = document.querySelector(".drop-login");

loginBtn.onclick = function () {
  dropLogin.classList.toggle("drop-login-open");
};

let menu = document.querySelector(".menu-icon");
let navBar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("move");
  navBar.classList.toggle("open-menu");
};
window.onscroll = ()=>{
    menu.classList.remove("move");
    navBar.classList.remove("open-menu");
}

let header = document.querySelector("header") 

window.addEventListener("scroll",()=>{
  header.classList.toggle("shadow", window.scrollY > 0);
})


var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((item) => {
  let accordionHeader = item.querySelector(".accordion-header");

  accordionHeader.addEventListener("click", () => {
    let openItem = document.querySelector(".accordion-open");
    toggleItem(item);
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

let toggleItem = (item) => {
  let accordionContent = item.querySelector(".accordion-content");
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

