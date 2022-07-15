class RecipesContainer {
  static recipesDOM = document.getElementById("recipes");
  static recipes = [];

  static displayRecipes(recipes) {
    this.recipesDOM.innerHTML = "";

    if (!recipes.length) {
      this.displayNoResults();
      return;
    }

    for (let recipe of recipes) {
      this.addRecipe(recipe);
    }
  }

  static filterRecipes() {
    console.log("WE FILTER");
    let tags = TagsContainer.getTypeOrderedActiveTags();
    let keywords = SearchBarContainer.getSearchBarValue();
    let filteredRecipes = Api.getRecipesByTagsAndKeywords(keywords, tags);
    console.log(filteredRecipes);
    this.displayRecipes(filteredRecipes);
  }

  static addRecipe(recipe) {
    const recipeModel = new RecipeManager(recipe);
    this.recipesDOM.appendChild(recipeModel.getRecipeDOM());
    this.recipes.push(recipes);
  }

  static displayNoResults() {
    const title = document.createElement("h2");
    const message = document.createElement("p");
    const icon = document.createElement("i");

    let messageWrapper = document.createElement("div");
    messageWrapper.classList.add("no-results");

    icon.classList.add("fa", "fa-search");
    title.textContent = "Aucun résultat";
    message.textContent =
      "Aucune recette n'a été trouvée, essayez d'enlever des tags ou de réduire vos mots clés";

    messageWrapper.appendChild(icon);
    messageWrapper.appendChild(title);
    messageWrapper.appendChild(message);

    this.recipesDOM.appendChild(messageWrapper);
  }
}
