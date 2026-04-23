// 1. 변수에 저장하기: 새로고침(지워짐), 껏다키면(지워짐)
let basket = 0;

const render = () => {
  document.getElementById("basket").innerText = basket;
};

render();

const pushApple = () => {
  basket += 1;
  render();
};

const popApple = () => {
  basket -= 1;
  render();
};

// 2. 세션스토리지에 저장하기: 새로고침(안 지워짐), 껏다키면(지워짐)
const getBasket = () => parseInt(sessionStorage.getItem("basket") ?? 0);

const session_render = () => {
  document.getElementById("session_basket").innerText = getBasket();
};

session_render();

const session_pushApple = () => {
  sessionStorage.setItem("basket", getBasket() + 1);
  session_render();
};

const session_popApple = () => {
  sessionStorage.setItem("basket", getBasket() - 1);
  session_render();
};

// 3. 로컬스토리지에 저장하기: 새로고침(안 지워짐), 껏다키면(안 지워짐)
const local_getBasket = () => parseInt(localStorage.getItem("basket") ?? 0);

const local_render = () => {
  document.getElementById("local_basket").innerText = local_getBasket();
};

local_render();

const local_pushApple = () => {
  localStorage.setItem("basket", local_getBasket() + 1);

  local_render();
};

const local_popApple = () => {
  localStorage.setItem("basket", local_getBasket() - 1);

  local_render();
};
