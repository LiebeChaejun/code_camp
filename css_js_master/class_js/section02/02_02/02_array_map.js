const friends = ["john", "james", "jim"];

const classmates = friends.map((friend) => friend + "어린이");

console.log(classmates);

const classmates2 = friends.map(
  (friend, idx) => friend + "어린이는 " + idx + "번째에 있어요."
);

console.log(classmates2);
