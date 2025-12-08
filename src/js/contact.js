const nameField = document.querySelector("input[name=name]");
const emailField = document.querySelector("input[type=email]");
const messageField = document.querySelector("textarea");
const formSubmitBtn = document.querySelector(".connect__btn");
const inputWrappers = document.querySelectorAll(".connect__form div");

const myForm = document.querySelector("form");
var emptyFields = [];

for (let i = 0; i < myForm.elements.length - 1; i++) {
  const element = myForm.elements[i];
  if (element.value.trim() == "") {
    emptyFields.push(element);
  }
}

formSubmitBtn.addEventListener("click", function submitForm(event) {
  event.preventDefault();

  if (emptyFields.length) {
    emptyFields.forEach((field) => {
      field.closest("div").classList.add("error");
    });
  }
});
