// 1-1) if문 연습
if (1 + 1 === 2) {
  console.log("정답입니다~");
}

// 1-2) if-else문 연습
if (1 + 1 === 3) {
  console.log("정답입니다.");
} else {
  console.log("틀렸습니다.");
}

// 1-3) if-else if- else문 연습
if (1 + 1 === 3) {
  console.log("정답입니다!");
} else if ("철수" === "영희") {
  console.log("철수와 영희는 같습니다!");
} else {
  console.log("모두 틀렸습니다!");
}

// 2. 삼항 연산자 연습
const score = 50;

const scoreList = score >= 90 ? "과학 합격입니다." : "과학 공부가 부족해요";

console.log(scoreList);

// 3. switch 문
const candy = "strawberry";

switch (candy) {
  case "grape": {
    console.log("포도 맛을 선택하셨습니다!");
    break;
  }
  case "strawberry": {
    console.log("딸기 맛을 선택하셨습니다!");
    break;
  }
  case "mint": {
    console.log("박하 맛을 선택하셨습니다!");
    break;
  }

  default: {
    console.log("잘 못 선택하셨습니다!");
  }
}
