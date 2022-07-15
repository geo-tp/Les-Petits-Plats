const UstensilSelector = new SelectorManager(
  "Ustensils",
  3,
  Api.getUstensilsFromRecipes,
  Api.getUstensilsByKeywords
);

const IngredientSelector = new SelectorManager(
  "Ingredients",
  1,
  Api.getIngredientsFromRecipes,
  Api.getIngredientsByKeywords
);

const ApplianceSelector = new SelectorManager(
  "Appareils",
  2,
  Api.getAppliancesFromRecipes,
  Api.getAppliancesByKeywords
);

RecipesContainer.displayRecipes(Api.getAllRecipes());
selectorsCloseEvent();
searchBarFilterEvent();
