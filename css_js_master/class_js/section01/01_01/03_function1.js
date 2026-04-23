// 1. 함수 만들고 실행하기
function addNumbers() {
  const result = 1 + 2;
  return result;
}

const getResult = addNumbers(); // 함수 실행하기

console.log(getResult);

// 2. 함수의 값 전달하기
function addNumbers2(num1, num2) {
  const result = num1 + num2;
  return result;
}

const getResult2 = addNumbers2(100, 200);

console.log(getResult2);
