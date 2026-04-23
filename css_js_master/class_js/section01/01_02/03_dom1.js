const findingFavoriteFruit = () => {
  const fruit = document.getElementById("fruit").innerText;

  alert(`My favorite Fruit is: ${fruit}`);
};

const registerProfile = () => {
  const profileName = document.getElementById("name").value;

  const sayHello = (document.getElementById(
    "sayHello"
  ).innerText = `${profileName}님 환영합니다.`);
};
