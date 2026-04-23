function outer() {
  const banana = 10;
  console.log(banana); // 10

  function inner() {
    const banana = 50;
    console.log(banana);
  }

  inner(); // 50
  console.log(banana); // 10
}

outer();

// 스코프 체이닝
function outer2() {
  const banana = 10;
  console.log(banana); // 10

  function inner() {
    // const banana = 50;
    console.log("inner함수 안의 banana: " + banana);
  }

  inner(); // 50
  console.log(banana); // 10
}

outer2();

// 스코프체이닝2
const banana = 1;
function outer3() {
  // const banana = 10;
  console.log(banana); // 10

  function inner() {
    // const banana = 50;
    console.log("inner함수 안의 banana: " + banana);
  }

  inner(); // 50
  console.log(banana); // 10
}

outer3();
