function displayRecipes() {
  const recipesDOM = document.getElementById("recipes");

  for (let recipe of getAllRecipes()) {
    const recipeModel = recipeFactory(recipe);
    const recipeDOM = recipeModel.getRecipeDOM();
    recipesDOM.appendChild(recipeDOM);
  }
}
