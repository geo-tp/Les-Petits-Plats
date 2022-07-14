function selectorsCloseEvent() {
  const body = document.querySelector("body");
  //   const ingredientInput = document.getElementById("ingredients-input");
  //   const ustensilInput = document.getElementById("ustensils-input");
  //   const applianceInput = document.getElementById("appareils-input");

  body.onclick = (e) => {
    if (e.target.classList[0] == "selector__elements__item") {
      return;
    }
    switch (e.target.id) {
      case IngredientSelector.getInputId():
        ApplianceSelector.closeList();
        UstensilSelector.closeList();
        break;
      case ApplianceSelector.getInputId():
        IngredientSelector.closeList();
        UstensilSelector.closeList();
        break;
      case UstensilSelector.getInputId():
        IngredientSelector.closeList();
        ApplianceSelector.closeList();
        break;
      default:
        ApplianceSelector.closeList();
        UstensilSelector.closeList();
        IngredientSelector.closeList();
    }
  };
}
