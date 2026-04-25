const scrollWindow1 = () => {
  // 스크롤 맨 위로 올려줘!
  window.scrollTo({ top: 0 });
};

const scrollWindow2 = () => {
  // 스크롤 지금 위치에서 500만큼 올려줘.
  window.scrollBy({ top: -500 });
};

const scrollWindow3 = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
