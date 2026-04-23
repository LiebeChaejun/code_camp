// let 과 const
let myName = "철수";
console.log(myName);

myName = "영희";
console.log(myName);

const friendName = "철수";
console.log(friendName);

// 재할당이 안됨
// friendName = "영희";

// 객체
const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
};

console.log(profile);
console.log(profile.name);

// 배열
const candyBox = ["grapeCandy", "StrawberryCandy"];

console.log(candyBox[0]);
console.log(candyBox[1]);
console.log(candyBox.length);
