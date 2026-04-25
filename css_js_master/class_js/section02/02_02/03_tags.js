const makeTag = () => {
  document.getElementById("append1").innerHTML = "<h1>Apple</h1>";
};

const makeTags = () => {
  const fruits = ["Apple", "Pineapple", "Melon"];

  // 1. fruits 들을 태그로 바꾸기
  const repeatFruits = fruits.map(
    (fruit, idx) => `<h1>${fruit}은 ${idx + 1}번째 과일`
  );

  // 2. 반복문으로 만든 HTML을 렌더링하기(.join("")
  document.getElementById("append2").innerHTML = repeatFruits.join("");
};
