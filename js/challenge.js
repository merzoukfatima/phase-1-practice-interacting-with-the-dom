let counter = document.getElementById("counter");
let counterGo = () => counter.innerText++;
let startInterval = setInterval(counterGo, 1000);
let minus = document.getElementById("minus");
minus.addEventListener("click", () => counter.innerText--);
let plus = document.getElementById("plus");
plus.addEventListener("click", () => counter.innerText++);
let heart = document.getElementById("heart");
let likes = document.querySelector("ul");
let countLikes = 0;
heart.addEventListener("click", () => {
    let li;
    let count=counter.innerText;
  if (document.getElementById(count) == null) {
    li = document.createElement("li");
    li.setAttribute("id", count);
    countLikes = 1;
    li.innerText = `${count} has been liked ${countLikes} time`;
    likes.appendChild(li);
  } else {
    li = document.getElementById(count);
    countLikes++;
    li.innerText =
      `${count} has been liked ${countLikes} times`;
  }
});
let pause = document.getElementById("pause");
pause.addEventListener("click", () => {
  if (!minus.disabled) {
    clearInterval(startInterval);
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
    pause.innerText="resume"
  } else {
    startInterval = setInterval(counterGo, 1000);
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
    pause.innerText="pause"
  }
});
let list = document.getElementById("list");
let commentInput = document.getElementById("comment-input");
let submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  let p = document.createElement("p");
  p.innerText = commentInput.value;
  commentInput.value = "";
  list.appendChild(p);
});