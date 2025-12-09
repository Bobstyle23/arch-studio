const myForm = document.querySelector("form");
const formSubmitBtn = document.querySelector(".connect__btn");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const fields = myForm.querySelectorAll("input, textarea");
  let hasError = false;

  function setErrorMessage(wrapper, message = `"Can't be empty"`) {
    wrapper.classList.add("error");
    wrapper.style.setProperty("--error-message", message);
  }

  function checkField(wrapper, field) {
    if (field.value.trim() === "") {
      setErrorMessage(wrapper);
      hasError = true;
    }

    if (field.type === "email" && field.value.trim() !== "") {
      if (!emailRegex.test(field.value.trim())) {
        setErrorMessage(wrapper, `"Invalid email"`);
        hasError = true;
      }
    }
  }

  fields.forEach((field) => {
    const wrapper = field.closest("div");

    field.addEventListener("input", function () {
      wrapper.classList.remove("error");

      checkField(wrapper, field);
    });

    checkField(wrapper, field);
  });

  if (!hasError) {
    myForm.submit();
  }
});
