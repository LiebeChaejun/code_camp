const pushFruit = () => {
  const fruitsBasket = {
    apple: 3,
    banana: 2,
    strawberry: 10,
  };

  // 1. 객체를 그대로 저장할 경우: [object Object] 처럼 이상하게 저장됨
  // localStorage.setItem("fruitsbasket", fruitsBasket);

  // 2. 객체를 JSON 문자열로 변환해서 저장할 경우: 제대로 저장됨
  localStorage.setItem("fruitsbasket", JSON.stringify(fruitsBasket));
};

const popFruit = () => {
  const fruitsBasket = localStorage.getItem("fruitsbasket");
  const result = JSON.parse(fruitsBasket);
  console.log(result);
};
