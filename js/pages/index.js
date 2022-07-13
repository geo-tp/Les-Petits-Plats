function init() {
  initIngredientSelector();
  initApplianceSelector();
  initUstensilSelector();
  initSearchBar();
  displayRecipes(getAllRecipes());
  selectorsCloseEvent();
}

init();
