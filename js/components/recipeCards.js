function displayRecipes(recipes) {
  const recipesDOM = document.getElementById("recipes");
  recipesDOM.innerHTML = "";

  if (!recipes.length) {
    displayNoResults();
    return;
  }

  for (let recipe of recipes) {
    const recipeModel = recipeFactory(recipe);
    const recipeDOM = recipeModel.getRecipeDOM();
    recipesDOM.appendChild(recipeDOM);
  }
}

function displayNoResults() {
  const recipesDOM = document.getElementById("recipes");
  const title = document.createElement("h2");
  const message = document.createElement("p");
  const icon = document.createElement("i");

  let messageWrapper = document.createElement("div");
  messageWrapper.classList.add("no-results");

  icon.classList.add("fa", "fa-search", "fa-3x");
  title.textContent = "Aucun résultat";
  message.textContent =
    "Aucune recette n'a été trouvé, essayez d'enlever des tags ou de réduire vos mots clés";

  messageWrapper.appendChild(icon);
  messageWrapper.appendChild(title);
  messageWrapper.appendChild(message);

  recipesDOM.appendChild(messageWrapper);
}

function filterRecipes() {
  let tags = getTypeOrderedActiveTags();
  let keywords = getSearchBarValue();

  let filteredRecipes = Api.getRecipesByTagsAndKeywords(keywords, tags);
  console.log("RECIPES", filteredRecipes);
  displayRecipes(filteredRecipes);
}
