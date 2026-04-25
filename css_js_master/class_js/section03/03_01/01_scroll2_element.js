const box = document.getElementById("box");

const scrollTag1 = () => {
  box.scrollTo({ top: 0 });
};
const scrollTag2 = () => {
  box.scrollBy({ top: -500 });
};
const scrollTag3 = () => {
  box.scrollTo({ top: 0, behavior: "smooth" });
};
