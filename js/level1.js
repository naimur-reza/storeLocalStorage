const p = document.getElementById("main");
const getValue = localStorage.getItem("count");
let count = getValue;
document.getElementById("btn").addEventListener("click", function () {
  count++;
  p.innerText = count;
  displayToLocal(count);
});

const displayToLocal = (count) => {
  const store = localStorage.setItem("count", count);
};
const setAgain = () => {
  const getValue = localStorage.getItem("count");
  p.innerText = getValue;
};
const clearAll = () => {
  localStorage.clear();
  p.innerText = '0';
  count = 0;
};
setAgain();
