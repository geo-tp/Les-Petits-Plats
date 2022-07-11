function initUstensilSelector() {
  console.log("init");
  const ustensilSelector = document.getElementById("ustensils-selector");
  const name = "Ustensils";
  const placeholder = "Rechercher un ingrédient";
  const ustensils = getUstensilsFromRecipes();

  const ustensilSelectorModel = selectorFactory({
    name,
    placeholder,
    elements: ustensils,
    typeId: 3,
    onclickEvent: displayUstensilList,
  });
  const ustensilSelectorDOM = ustensilSelectorModel.getSelectorDOM();

  ustensilSelector.parentNode.replaceChild(
    ustensilSelectorDOM,
    ustensilSelector
  );
}

function displayUstensilList() {
  const ustensilList = document.getElementById("ustensils-list");
  const ustensilInput = document.getElementById("ustensils-input");
  const ustensilSelector = document.getElementById("ustensils-selector");

  ustensilInput.type = "text";
  ustensilInput.setAttribute("value", "");
  ustensilInput.focus();
  // ustensilInput.addEventListener("focusout", closeUstensilList);
  ustensilList.classList.remove("visibility--hidden");
  ustensilSelector.style.flexBasis = "60%";
}

function closeUstensilList() {
  const ustensilList = document.getElementById("ustensils-list");
  const ustensilInput = document.getElementById("ustensils-input");
  const ustensilSelector = document.getElementById("ustensils-selector");

  ustensilInput.type = "button";
  ustensilInput.setAttribute("value", "Ingrédients");
  ustensilList.classList.add("visibility--hidden");
  ustensilSelector.style.flexBasis = "12%";
}
