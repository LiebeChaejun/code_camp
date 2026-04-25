// 1. window
window.addEventListener("scroll", () => {
  const scrollMove = window.scrollY;
  console.log("window: ", scrollMove);

  if (scrollMove > 0) {
    document.getElementById("exImg1").style = "border: 20px solid red";
  } else {
    document.getElementById("exImg1").style = "none";
  }
});

// 2. element
const box = document.getElementById("box");

box.addEventListener("scroll", () => {
  const scrollMove = box.scrollTop;
  console.log("element: ", scrollMove);

  if (scrollMove > 0) {
    document.getElementById("exImg2").style = "border: 20px solid blue";
  } else {
    document.getElementById("exImg2").style = "none";
  }
});
