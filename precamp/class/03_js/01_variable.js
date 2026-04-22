// let 으로 변수 선언 -> 재할당 가능
let name;

console.log(name); // undefined : 할당되지 않음

name = "윤주희";

name = "김길동";

console.log(name);

// const로 변수 선언 -> 재할당 불가능
const constName = "윤주희";

console.log(constName);
