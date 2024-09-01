const formBtns = document.querySelectorAll(".paymentBtn");
const debit = document.getElementById("paymentInputs");
const paymentItems = document.querySelectorAll(".paymentItem");
const paymentMessage = document.getElementById("paymentMessage");

paymentItems.forEach((paymentItem) => {
  let radio = paymentItem.querySelector("input");
  radio.onchange = () => {
    if (radio.checked == true) {
      paymentItem.classList.add("active");
      paymentItems.forEach((item) => {
        if (item !== paymentItem) {
          item.classList.remove("active");
        }
      });
    }
    let id = radio.getAttribute("data-value");
    let currentFormBtn = document.querySelector(id);
    currentFormBtn.classList.add("active");
    if (id === "#paymentBtn4") {
      debit.classList.add("active");
    } else {
      paymentMessage.classList.remove("active");
      if (debit.classList.contains("active")) {
        debit.classList.remove("active");
      }
    }
    formBtns.forEach((formBtn) => {
      if (formBtn !== currentFormBtn) {
        if (formBtn.classList.contains("active")) {
          formBtn.classList.remove("active");
        }
      }
    });

    const inputs = debit.querySelectorAll("input");
    const paymentBtn4 = document.getElementById("paymentBtn4");
    paymentBtn4.onclick = () => {
      inputs.forEach((input) => {
        const inputWrapper = input.parentElement;
        if (input.value == "") {
          inputWrapper.classList.add("error");
          paymentMessage.classList.add("active");
        }
      });
    };
    inputs.forEach((input) => {
      const inputWrapper = input.parentElement;
      input.onchange = (e) => {
        if (e.target.value == "") {
          inputWrapper.classList.add("error");
        } else {
          inputWrapper.classList.remove("error");
        }
        const errors = document.querySelectorAll(".error");
        if (errors.length === 0) {
          paymentMessage.classList.remove("active");
        }
      };
    });
  };
});
