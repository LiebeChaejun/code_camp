/**
 * 정리
 * 1. 옛날자바스크립트 호이스팅 문제 => 요즘 자바스크립트  + TDZ로 해결
 *
 * 2. 옛날자바스크립트 중복선언 문제 => 요즘 자바스크립트로 해결
 */

// 호이스팅 문제, 중복선언 문제를 해결하기 위해 요즘 자바스크립트를 쓰자.

// 1. let과 const를 통해 hoisting 문제를 해결

// 2. 함수선언식이 아닌, 함수 표현식, 화살표 함수를 사용할 것.

// 함수 선언식 => 중복 선언 가능
function myfunc1() {
  console.log("apple");
}

function myfunc1() {
  console.log("banana");
}

// 함수 표현식(중복 선언 불가)
const myfunc2 = function () {
  console.log("apple");
};

// const myfunc2 = function () {
//   console.log("banana");
// };

// 화살표 함수(중복 선언 불가)
const myfunc3 = () => {
  console.log("apple");
};

// const myfunc3 = () => {
//   console.log("banana");
// };

myfunc1(); // banana -> 중복 선언 문제 발생
