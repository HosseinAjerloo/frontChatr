const hambergerElement = document.querySelector(".hambergerElement");
const closehambergerElement = document.querySelector(".closehambergerElement");
const duration = 500;

hambergerElement.addEventListener("click", function (e) {
  hamberGerAnimation(hambergerElement).then((result) => {
    console.log(result);
    
    handelResponsive();
  });
});
closehambergerElement.addEventListener("click", function (e) {
  hamberGerAnimation(closehambergerElement).then((result) => {
    console.log(result);
    
    handelResponsive(false);
  });
});

const aside = document.getElementsByTagName("aside")[0];
const section = document.getElementsByTagName("section")[0];

const handelResponsive = (state = true) => {
  const innerWidth = window.innerWidth;
  if (innerWidth < 1280 && state) {
    aside.classList.add("w-full");
    aside.classList.remove("w-[0px]", "xl:w-1/5");
    section.classList.add("opacity-0", "w-[0px]");
    section.classList.remove("w-full", "xl:w-4/5");
  } else {
    aside.classList.remove("w-full");
    aside.classList.add("xl:w-1/5", "w-[0px]");
    section.classList.add("w-full", "xl:w-4/5", "opacity-100");
  }
};

const hamberGerAnimation = async (elem) => {
    const allAnimation=[];
  [...elem.children].forEach((element, index) => {
    const animate=element.animate(
      [
        {
          offset: 0.2,
          opacity: 0,
          transform: "translateX(0)",
        },
        {
          offset: 0.5,
          opacity: 0,
          transform: "translateX(30px)",
        },
        {
          offset: 0.8,
          opacity: 1,
          transform: "translateX(-30px)",
        },
      ],
      {
        duration: duration,
        delay: Math.round(120 * (index + 1)),
        easing: "ease-in-out",
      }
    );
    
    allAnimation.push(animate.finished)
  });
  return Promise.all(allAnimation)
};
