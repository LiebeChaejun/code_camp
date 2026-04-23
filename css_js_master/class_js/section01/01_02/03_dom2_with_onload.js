// 아직 HTML 안 그려졌는데, 태그 찾아주려니까 못 찾음
// const myName = prompt("당신의 이름을 입력하세요.");

// document.getElementById("inputName").innerText = myName;

// 전부다 로드되고나서 실행해주니까 찾음
window.onload = () => {
  const myName = prompt("당신의 이름을 입력하세요.");

  document.getElementById("inputName").innerText = myName;
};
