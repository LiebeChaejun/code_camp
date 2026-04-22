// 배열
// 배열에 있는 각 데이터의 위치 : index

// Point 1 배열의 다양한 기능
/**
 * 배열의 다양한 기능 - 초급
 * array.length : 배열의 길이 구하기
 * array[숫자(인덱스)] : 배열의 값 꺼내기
 * array.push() : 배열의 맨 뒤에 값 추가
 * array.pop() : 배열의 맨 마지막 값 삭제
 * array.sort() : 배열 요소 정렬
 * array.includes(값) : 배열 데이터 확인
 */

/**
 * 배열의 다양한 기능 - 중급
 * array.concat(array2) : 배열 2개 연결
 * array.join() : 배열을 문자로 만들기
 * array.slice() : 배열 분리
 * array.filter() : 배열에서 원하는 요소 뽑기
 * array.map() : 배열의 모든 요소 변경
 */

// 실습
let classmates = ["철수", "영희", "훈이"];
console.log(classmates);

console.log(classmates[0]);
console.log(classmates[1]);
console.log(classmates[2]);

console.log(classmates.includes("훈이"));
console.log(classmates.includes("맹구"));

console.log(classmates.length);

classmates.push("맹구");

console.log(classmates);

classmates.pop();

console.log(classmates.length);

console.log(classmates);

// Quiz
// developer라는 변수를 만들고, 자신이 원하는 개발자로의 성공 키워드가 5개 담겨있는 배열을 할당한 뒤 가장 중요하다고 생각하는 키워드를 index를 이용하여 콘솔에 표시해 보세요.
const developer = ["꾸준함", "성장", "성과", "동료", "목표"];

console.log(developer[4]);

// Quiz2
// dream이라는 변수에 ["커리어 점프", "성공", "할 수 있다"] 배열을 할당항 뒤 developer 배열과 하나로 합쳐 보세요.
const dream = ["커리어 점프", "성공", "할 수 있다"];

let result = developer.concat(dream);

console.log(result);

// Point2 : 문자열도 배열처럼 다룰 수 있다.
const email = "codecamp@gmail.com";
console.log(email[0]);
console.log(email[1]);

// 실습: 조회한 메일에 **** 표시하기
// 결과: 조회하신 이메일은 아래와 같습니다.
// code****@gmail.com
console.log(email.includes("@"));
console.log(email.split("@"));

let userMail = email.split("@")[0];
let company = email.split("@")[1];

let maskingMail = [];

maskingMail.push(userMail[0]);
maskingMail.push(userMail[1]);
maskingMail.push(userMail[2]);
maskingMail.push(userMail[3]);
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");

console.log(maskingMail.join("") + "@" + company);
