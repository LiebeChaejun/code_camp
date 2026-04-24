const queryString = location.search;

const fruits = new URLSearchParams(queryString);

const banana = fruits.get("banana");
const apple = fruits.get("apple");

alert(`banana: ${banana}, apple: ${apple}`);
