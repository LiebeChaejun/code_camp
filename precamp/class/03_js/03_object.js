// 객체
const profileArr = ["구로구", "남자", 50, "홍길동", 165, 55];

const profileObj = {
  name: "홍길동",
  age: 50,
  height: 165,
};

// 객체는 키와 값으로 구성되어 있다.
// 키는 비어있을 수 없지만, 값은 비어있을 수 있다.

// 객체에도 다양한 값을 넣어줄 수 있다.

// Point1. 객체에 담긴 값(Value)을 가져오는 방법
// 1. 변수명.KEY - dot notation
profileObj.name; // "홍길동"

// 2. 변수명["KEY"] - bracket notation
profileObj["name"]; // "홍길동"

// 실습1
let friend = {
  name: "철수",
  age: 13,
  camp: "코드캠프",
};

console.log(friend);

console.log(friend.name);
console.log(friend.age);
console.log(friend.camp);

console.log(friend.test); // undefined

// Point2. 배열에 담긴 객체
let students = [
  { name: "길동", pet: "cat", house: "구로구" },
  { name: "철수", pet: "dog", house: "구로구" },
  { name: "훈이", pet: "parrot", house: "구로구" },
];

console.log(students);

console.log(students[0].house);
console.log(students[2].pet);

// Quiz
// 과일 인기검색어
const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

const result = fruits.forEach((fruit) => {
  console.log(fruit.number + " " + fruit.title);
});

console.log(result);
