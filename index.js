const questions = document.querySelectorAll(".main");
console.log(questions);

questions.forEach((question) => {
  const btn = question.querySelector(".btn");
  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");
  });
});
