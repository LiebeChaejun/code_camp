const queryString = location.search;
const queryList = new URLSearchParams(queryString);
const number = queryList.get("number");

const friendsList = localStorage.getItem("friends-list");
JSON.parse(friendsList === null ? "[]" : friendsList);

alert(`${friendsList[number].name}의 페이지에 오신것을 환영합니다.`);
