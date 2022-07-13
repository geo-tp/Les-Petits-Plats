function init() {
  initIngredientSelector();
  initApplianceSelector();
  initUstensilSelector();
  displayRecipes(getAllRecipes());
  selectorsCloseEvent();
}

init();
