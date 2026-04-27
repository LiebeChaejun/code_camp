// 친구 등록
// 1. 친구 목록 초기화
// 1-1. 친구 목록
let friendsList = [];

// 1-2. initFriendsList 함수 작성
const initFriendsList = () => {
  const list = localStorage.getItem("friends-list");

  console.log("localStorage: ", list);

  if (list === null) {
    localStorage.setItem("friends-list", JSON.stringify(friendsList));
  } else {
    friendsList = JSON.parse(list);
  }

  console.log("friendsList: ", list);
};

initFriendsList();

// 1-3. input에 넣어진 값 등록 함수
const registerFriend = () => {
  const inputName = document.getElementById("inputName");
  const name = inputName.value;
  const result = document.getElementById("result");

  friendsList.push(name);
  localStorage.setItem("friends-list", JSON.stringify(friendsList));

  result.innerText = `${name}님을 친구목록에 추가하는데 성공했습니다.`;
  inputName.value = "";
};

// 2. 친구목록 그려내기
const drawList = () => {
  // 2-1. 필요한 태그 DOM으로 가져오기.
  const list = document.querySelector(".list");

  // 2-2. 사용할 친구 목록 localStorage에서 가져오기(friends-list)
  // object로 파싱해서 가져오기
  const friendsArr = JSON.parse(localStorage.getItem("friends-list"));
  // 문자열로 그대로 가져오기
  // const friendsList = localStorage.getItem("friends-list");

  const friends = friendsArr
    .map(
      (friend, idx) =>
        `<li><a href="./06_localStorage_routing.html?number=${idx}">${idx}번째 친구 ${friend}</a></li>`
    )
    .join("");

  list.innerHTML = friends;
};
