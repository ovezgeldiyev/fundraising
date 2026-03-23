const radios = document.querySelectorAll(".n3o-setting__radio");
const setting = document.querySelector(".n3o-editGoal");
const cta_input = setting.querySelector(".n3o-cta__input");
const submitBtn = setting.querySelector(".submit1");

const editWrapper = document.getElementById("editWrapper");
const editGoalBody = document.querySelector("#editGoalBody");
const editGoalInner = editGoalBody.innerHTML;
const editGoalAdd = document.getElementById("editGoalAdd");

const selectFuncUniq = () => {
  const selects = document.querySelectorAll(".n3o-select");
  selects.forEach((select) => {
    const selected = select.querySelector(".n3o-select__selected");
    const selectOptions = select.querySelector(".n3o-select__options");
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
      };
    });
  });
  const eventHandler = () => {
    window.addEventListener("click", (e) => {
      selects.forEach((select) => {
        if (!select.contains(e.target)) {
          select.classList.remove("active");
        }
      });
    });
  };
};

const checkDFunc = () => {
  const setting__dates = document.querySelectorAll(".n3o-setting__date");
  setting__dates.forEach((setting__date) => {
    const checkbox = setting__date.querySelector("input[type=checkbox]");
    const dateInput = setting__date.querySelector(".n3o-setting__date-input");
    // console.log(checkbox);
    checkbox.onchange = () => {
      if (checkbox.checked && !checkbox?.classList?.contains("active")) {
        dateInput.classList.add("active");
        checkbox.classList.add("active");
        checkbox.checked = true;
      } else {
        dateInput.classList.remove("active");
        checkbox.classList.remove("active");
        checkbox.checked = false;
      }
    };
  });
};

editGoalAdd.onclick = () => {
  editWrapper.innerHTML += editGoalBody.outerHTML;
  selectFuncUniq();
  checkDFunc();
  deleteFunc();
};
const deleteFunc = () => {
  const editGoalRemoves = editWrapper.querySelectorAll(".n3o-editGoal__remove");
  editGoalRemoves.forEach((editGoalRemove) => {
    if (editGoalRemove) {
      editGoalRemove.onclick = () => {
        editGoalRemove.parentElement.remove();
      };
    }
  });
};
selectFuncUniq();
deleteFunc();
checkDFunc();
