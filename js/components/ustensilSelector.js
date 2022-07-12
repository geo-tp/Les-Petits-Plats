function initUstensilSelector() {
  const ustensilSelector = document.getElementById("ustensils-selector");
  const name = "Ustensils";
  const placeholder = "Rechercher un ustensil";
  const ustensils = getUstensilsFromRecipes(30);

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

function updateUstensilList() {
  const ustensilList = document.getElementById("ustensils-list");
  const ustensilInput = document.getElementById("ustensils-input");
  const ustensilSelector = document.getElementById("ustensils-selector");

  const filteredUstensils = getUstensilsByKeywords(ustensilInput.value);

  updateSelectorList(ustensilList, 3, filteredUstensils);
  resizeSelector(ustensilSelector, ustensilList, filteredUstensils);
}

function displayUstensilList() {
  const ustensilList = document.getElementById("ustensils-list");
  const ustensilInput = document.getElementById("ustensils-input");
  const ustensilSelector = document.getElementById("ustensils-selector");

  ustensilInput.oninput = () => updateUstensilList();

  displaySelectorList(ustensilList, ustensilInput, ustensilSelector);
}

function closeUstensilList() {
  const ustensilList = document.getElementById("ustensils-list");
  const ustensilInput = document.getElementById("ustensils-input");
  const ustensilSelector = document.getElementById("ustensils-selector");
  ustensilInput.setAttribute("value", "Ustensils");

  closeSelectorList(ustensilList, ustensilInput, ustensilSelector);
}
