const range = document.getElementById("range");
if (range) {
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  range.addEventListener("input", (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;
    const labelText = label.querySelector("span");
    const rangeWidth = getComputedStyle(e.target).getPropertyValue("width");
    const labelWidth = getComputedStyle(label).getPropertyValue("width");

    const adminC = document.getElementById("adminC");
    if (adminC) {
      const adminCText = adminC.querySelector(".adminC__text");
      const adminCRow = adminC.querySelector(".adminC__row");
      if (value > 0) {
        adminCRow.classList.add("active");
        adminCText.classList.remove("active");
      } else {
        adminCRow.classList.remove("active");
        adminCText.classList.add("active");
      }
    }

    // remove px
    const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
    const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);
    const max = +e.target.max;
    const min = +e.target.min;
    const left =
      value * (numWidth / max) -
      numLabelWidth / 2 +
      scale(value, min, max, 10, -10);
    label.style.left = `${left}px`;
    labelText.innerHTML = value / 5;
    const rangePrice = document.getElementById("rangePrice");
    myPrice = (0.748 * value) / 5;
    rangePrice.innerHTML = myPrice.toFixed(2);
    const html = document.querySelector("html");
    const reflectPrice = document.getElementById("reflectPrice");
    reflectPrice.innerHTML = myPrice.toFixed(2);

    if (html.classList.contains("rf")) {
      range.style.background =
        "linear-gradient(to right, #4faf46 0%, #4faf46 " +
        value +
        "%, #CBD5E1 " +
        value +
        "%, #CBD5E1 100%)";
    } else if (html.classList.contains("cr")) {
      range.style.background =
        "linear-gradient(to right, #e42281 0%, #e42281 " +
        value +
        "%, #CBD5E1 " +
        value +
        "%, #CBD5E1 100%)";
    } else if (html.classList.contains("mh")) {
      range.style.background =
        "linear-gradient(to right, #45c9e6 0%, #45c9e6 " +
        value +
        "%, #CBD5E1 " +
        value +
        "%, #CBD5E1 100%)";
    } else {
      range.style.background =
        "linear-gradient(to right, #334155 0%, #334155 " +
        value +
        "%, #CBD5E1 " +
        value +
        "%, #CBD5E1 100%)";
    }
  });
}
