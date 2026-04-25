// 남자애들만 filtering
const friends = ["철수", "영희", "훈이"];

result = friends.filter((el) => el !== "영희");

console.log(result);

// filter가 실무에서 어떻게 쓰일까?
// 사과를 좋아하는 사람만 필터링
// select 에서 무엇을 선택했는지 아는 법.
// => event (행동)

// 1. input 변경 감지
const JS_input = (event) => {
  console.log(event.target); // 내가 입력한 태그 => <input />
  console.log(event.target.value); // 내가 입력한 input의 값
};

// 2. selectBox 변경 감지
const selectFruit = (event) => {
  console.log(event.target); // 내가 행동한 태그: <select>...
  console.log(event.target.value); // 태그에서 선택한 값 => apple

  const friend = [
    {
      name: "John",
      fruits: "apple",
    },
    {
      name: "Bob",
      fruits: "banana",
    },
    {
      name: "Cyan",
      fruits: "apple",
    },
  ];

  const selectedFruits = event.target.value;

  switch (selectedFruits) {
    case "apple": {
      const applePeople = friend.filter((el) => el.fruits === "apple");
      console.log(applePeople);
      break;
    }
    case "banana": {
      const bananaPeople = friend.filter((el) => el.fruits === "banana");
      console.log(bananaPeople);
      break;
    }
  }
};
