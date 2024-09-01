const radios = document.querySelectorAll(".setting__radio");
const setting = document.querySelector(".setting");
const cta_input = setting.querySelector(".cta__input");
const submitBtn = setting.querySelector(".submit1");
const select = document.querySelector(".select");
const settingDate = document.getElementById("settingDate");
const checkD = document.getElementById("checkD");
let settingInput;
if (settingDate) {
  settingInput = settingDate.querySelector(".setting__date-input");
}

if (cta_input) {
  cta_input.querySelector("input").oninput = (e) => {
    if (
      e.target.value !== "" &&
      select.querySelector("input[type='hidden']").value !== "" &&
      setting.querySelector(".setting__radio.active") &&
      ((checkD.checked && settingInput.querySelector("input").value !== "") ||
        !checkD.checked)
    ) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", "true");
    }
  };
}
const selectFunc = () => {
  const selected = select.querySelector(".select__selected");
  const selectOptions = select.querySelector(".select__options");
  const listItems = selectOptions.querySelectorAll("li");
  const input = select.querySelector("input[type='hidden']");

  const formBtnWrapper = select.parentElement.parentElement;
  const formBtn = formBtnWrapper.querySelector("button");

  selected.onclick = () => {
    select.classList.toggle("active");
    eventHandler();
  };
  listItems.forEach((listItem) => {
    listItem.onclick = () => {
      selected.innerHTML = listItem.innerHTML;
      select.classList.remove("active");
      input.value = listItem.getAttribute("data-value");
      eventHandler();
      if (
        cta_input.querySelector("input").value !== "" &&
        select.querySelector("input[type='hidden']").value !== "" &&
        setting.querySelector(".setting__radio.active") &&
        ((checkD.checked && settingInput.querySelector("input").value !== "") ||
          !checkD.checked)
      ) {
        submitBtn.removeAttribute("disabled");
      } else {
        submitBtn.setAttribute("disabled", "true");
      }
    };
  });
  const eventHandler = () => {
    window.addEventListener("click", (e) => {
      if (!select.contains(e.target)) {
        select.classList.remove("active");
      }
    });
  };
};
selectFunc();

radios.forEach((radio) => {
  const checkbox = radio.querySelector("input");
  checkbox.onchange = (e) => {
    if (e.target.checked) {
      radio.classList.add("active");
      if (radio.classList.contains("custom")) {
        cta_input.classList.add("active");
        if (
          cta_input.querySelector("input").value !== "" &&
          select.querySelector("input[type='hidden']").value !== "" &&
          setting.querySelector(".setting__radio.active") &&
          ((checkD.checked &&
            settingInput.querySelector("input").value !== "") ||
            !checkD.checked)
        ) {
          submitBtn.removeAttribute("disabled");
        } else {
          submitBtn.setAttribute("disabled", "true");
        }
      } else {
        if (
          cta_input.querySelector("input").value !== "" &&
          select.querySelector("input[type='hidden']").value !== "" &&
          setting.querySelector(".setting__radio.active") &&
          ((checkD.checked &&
            settingInput.querySelector("input").value !== "") ||
            !checkD.checked)
        ) {
          submitBtn.removeAttribute("disabled");
        } else {
          submitBtn.setAttribute("disabled", "true");
        }

        if (cta_input.classList.contains("active")) {
          cta_input.classList.remove("active");
        }
      }
      radios.forEach((radio2) => {
        if (radio !== radio2) {
          const checkbox = radio2.querySelector("input");
          checkbox.checked = false;
          radio2.classList.remove("active");
        }
      });
    } else {
      if (cta_input.classList.contains("active")) {
        cta_input.classList.remove("active");
      }
      radio.classList.remove("active");
      if (
        cta_input.querySelector("input").value !== "" &&
        select.querySelector("input[type='hidden']").value !== "" &&
        setting.querySelector(".setting__radio.active") &&
        ((checkD.checked && settingInput.querySelector("input").value !== "") ||
          !checkD.checked)
      ) {
        submitBtn.removeAttribute("disabled");
      } else {
        submitBtn.setAttribute("disabled", "true");
      }
    }
  };
});
// date check start

if (settingDate) {
  checkD.onclick = () => {
    if (checkD.checked == true) {
      settingInput.classList.add("active");
      if (
        cta_input.querySelector("input").value !== "" &&
        select.querySelector("input[type='hidden']").value !== "" &&
        setting.querySelector(".setting__radio.active") &&
        ((checkD.checked && settingInput.querySelector("input").value !== "") ||
          !checkD.checked)
      ) {
        submitBtn.removeAttribute("disabled");
      } else {
        submitBtn.setAttribute("disabled", "true");
      }
    } else {
      settingInput.classList.remove("active");
      if (
        cta_input.querySelector("input").value !== "" &&
        select.querySelector("input[type='hidden']").value !== "" &&
        setting.querySelector(".setting__radio.active") &&
        ((checkD.checked && settingInput.querySelector("input").value !== "") ||
          !checkD.checked)
      ) {
        submitBtn.removeAttribute("disabled");
      } else {
        submitBtn.setAttribute("disabled", "true");
      }
    }
  };
}
if (settingInput) {
  settingInput.querySelector("input").onchange = () => {
    if (
      cta_input.querySelector("input").value !== "" &&
      select.querySelector("input[type='hidden']").value !== "" &&
      setting.querySelector(".setting__radio.active") &&
      ((checkD.checked && settingInput.querySelector("input").value !== "") ||
        !checkD.checked)
    ) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", "true");
    }
  };
}

// date check end
// url changer start
const urlChanger = document.getElementById("urlChanger");
if (urlChanger) {
  const urlEnd = document.getElementById("urlEnd");
  urlChanger.oninput = (e) => {
    urlEnd.innerText = e.target.value;
    if (e.target.value !== "") {
      urlChanger.parentElement.classList.remove("error");
      if (pageName.value !== "" && pageTitle.value !== "") {
        errorMessage2.classList.remove("active");
      }
    }
  };
}
// url changer end

const pageTitle = document.getElementById("pageTitle");
const pageName = document.getElementById("pageName");
const submit2 = document.querySelector(".submit2");
const errorMessage2 = document.getElementById("errorMessage2");
if (pageTitle) {
  pageTitle.oninput = (e) => {
    if (e.target.value !== "") {
      pageTitle.parentElement.classList.remove("error");
      if (
        (pageName.value !== "" && !urlChanger) ||
        (pageName.value !== "" && urlChanger && urlChanger.value !== "")
      ) {
        errorMessage2.classList.remove("active");
      }
    }
  };
}
if (pageName) {
  pageName.oninput = (e) => {
    if (e.target.value !== "") {
      pageName.parentElement.classList.remove("error");
      if (
        (pageTitle.value !== "" && !urlChanger) ||
        (pageTitle.value !== "" && urlChanger && urlChanger.value !== "")
      ) {
        errorMessage2.classList.remove("active");
      }
    }
  };
}
if (submit2) {
  submit2.onclick = () => {
    if (pageTitle.value === "") {
      pageTitle.parentElement.classList.add("error");
    } else {
      pageTitle.parentElement.classList.remove("error");
    }
    if (pageName.value === "") {
      pageName.parentElement.classList.add("error");
    } else {
      pageName.parentElement.classList.remove("error");
    }
    if (urlChanger) {
      if (urlChanger.value === "") {
        urlChanger.parentElement.classList.add("error");
      } else {
        urlChanger.parentElement.classList.remove("error");
      }
    }
    if (
      pageTitle.value === "" ||
      pageName.value === "" ||
      (urlChanger && urlChanger.value === "")
    ) {
      errorMessage2.classList.add("active");
    } else {
      errorMessage2.classList.remove("active");
    }
  };
}
