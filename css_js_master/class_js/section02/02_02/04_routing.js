const registerFriend = () => {
  const friend1 = {
    name: "John",
    age: 12,
  };
  const friend2 = {
    name: "Tom",
    age: 13,
  };

  const friendsList = [friend1, friend2];
  localStorage.setItem("friend-list", JSON.stringify(friendsList));
};

const drawList = () => {
  // 1. 친구목록 가져오기
  const friendsList = localStorage.getItem("friends-list");
  const arr = JSON.parse(friendsList === null ? "[]" : friendsList);

  // 2. 배열을 반복하여 태그 그리기
  const HTML_friendList = arr
    .map(
      (friend, idx) => `
  <div>
    <a href="./02_routing2_detail.html?number=${idx}">
      이름은 ${friend.name}이고, 나이는 ${friend.age}살 입니다.
    </a>
  </div>
  `
    )
    .join("");

  document.querySelector(".list").innerHTML = HTML_friendList;
};
