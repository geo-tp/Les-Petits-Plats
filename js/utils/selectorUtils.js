function displaySelectorList(
  elementListDOM,
  elementInputDOM,
  elementSelectorDOM
) {
  elementInputDOM.type = "text";
  elementInputDOM.setAttribute("value", "");
  elementInputDOM.focus();
  elementListDOM.classList.remove("visibility--hidden");
  elementSelectorDOM.style.flexBasis = "60%";
}

function updateSelectorList(elementListDOM, data) {
  elementListDOM.innerHTML = "";

  for (let element of data) {
    let li = document.createElement("li");
    li.classList.add("selector__elements__item");
    li.textContent = element;
    li.onclick = () => addElementTag(element, typeId);
    elementListDOM.appendChild(li);
  }
}

function closeSelectorList(
  elementListDOM,
  elementInputDOM,
  elementSelectorDOM
) {
  elementInputDOM.type = "button";
  elementListDOM.classList.add("visibility--hidden");
  elementSelectorDOM.style.flexBasis = "12%";
}

function selectorsCloseEvent() {
  const body = document.querySelector("body");
  const ingredientInput = document.getElementById("ingredients-input");
  const ustensilInput = document.getElementById("ustensils-input");
  const applianceInput = document.getElementById("appareils-input");

  body.onclick = (e) => {
    if (e.target.classList[0] == "selector__elements__item") {
      return;
    }
    switch (e.target.id) {
      case ingredientInput.id:
        closeApplianceList();
        closeUstensilList();
        break;
      case applianceInput.id:
        closeIngredientList();
        closeUstensilList();
        break;
      case ustensilInput.id:
        closeIngredientList();
        closeApplianceList();
        break;
      default:
        closeApplianceList();
        closeUstensilList();
        closeIngredientList();
    }
  };
}
