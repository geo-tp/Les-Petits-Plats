function displayRecipes(recipes) {
  const recipesDOM = document.getElementById("recipes");
  recipesDOM.innerHTML = "";

  for (let recipe of recipes) {
    const recipeModel = recipeFactory(recipe);
    const recipeDOM = recipeModel.getRecipeDOM();
    recipesDOM.appendChild(recipeDOM);
  }
}

function filterRecipes() {
  let tags = getTypeOrderedActiveTags();
  let keywords = getSearchBarValue();

  let filteredRecipes = searchRecipesByTags(tags, getAllRecipes());
  console.log("RECIPES", filteredRecipes);
  displayRecipes(filteredRecipes);
}
