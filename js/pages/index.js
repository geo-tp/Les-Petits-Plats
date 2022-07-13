function init() {
  initIngredientSelector();
  initApplianceSelector();
  initUstensilSelector();
  initSearchBar();
  displayRecipes(Api.getAllRecipes());
  selectorsCloseEvent();
}

init();
