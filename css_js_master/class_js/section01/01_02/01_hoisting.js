// 밑에서 내가 만든 함수 위에서 실행하기
hoisting1(); // 함수 호이스팅의 경우 함수 자체가 끌어올려짐

function hoisting1() {
  console.log("함수를 실행합니다.");
}

// 밑에서 내가 만든 변수 위에서 실행하기
// (1) var
console.log(`밑에서 만든 변수 위에서 실행하기: ${variable1}`); // 선언만 처리

var variable1 = "철수"; // 선언과 할당

console.log(`위에서 만든 변수 밑에서 실행하기: ${variable1}`); // 할당까지 이루어짐

// (2) let / const
// console.log(`밑에서 만든 변수 위에서 실행하기2: ${variable2}`);
// => ReferenceError 발생! TDZ로 가기 떄문!!

let variable2 = "민수";

console.log(`위에서 만든 변수 위에서 실행하기2: ${variable2}`);
