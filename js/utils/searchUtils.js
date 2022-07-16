function checkTagsMatchUstensils(recipe, tags) {
  if (!tags.length) {
    return true;
  }

  const recipeUstensils = recipe.ustensils.map((ustensil) =>
    capitalizeFirstLetter(ustensil)
  );
  return tags.every((ustensil) => recipeUstensils.includes(ustensil));
}

function checkTagsMatchIngredients(recipe, tags) {
  if (!tags.length) {
    return true;
  }
  const recipeIngredients = recipe.ingredients.map((ingredient) =>
    capitalizeFirstLetter(ingredient.ingredient)
  );
  return tags.every((ingredient) => recipeIngredients.includes(ingredient));
}

function checkTagMatchAppliance(recipe, tag) {
  if (!tag) {
    return true;
  }
  return capitalizeFirstLetter(recipe.appliance) == tag;
}

function checkKeywordsMatchRecipeInfos(recipe, keywords) {
  keywords = formatKeywords(keywords);
  let recipeInfos = `${recipe.name} ${recipe.description}`;
  recipe.ingredients.map((ingredient) => {
    recipeInfos += ingredient + " ";
  });
  recipeInfos = replaceAccents(recipeInfos).toLowerCase();

  return recipeInfos.includes(keywords);
}

function searchRecipesByTags(recipes, tags) {
  let recipesResults = recipes.filter(
    (recipe) =>
      checkTagMatchAppliance(recipe, tags.appliance) &&
      checkTagsMatchIngredients(recipe, tags.ingredients) &&
      checkTagsMatchUstensils(recipe, tags.ustensils)
  );

  return recipesResults;
}

function searchRecipesByKeywords(recipes, keywords) {
  let recipesResults = recipes.filter((recipe) =>
    checkKeywordsMatchRecipeInfos(recipe, keywords)
  );

  return recipesResults;
}

function searchRecipes(keywords, tags) {
  let recipesResults = searchRecipesByTags(Api.getAllRecipes(), tags);
  recipesResults = searchRecipesByKeywords(recipesResults, keywords);

  return recipesResults;
}

function searchElementsByKeywords(keywords, dataset) {
  let keywordsFormatted = formatKeywords(keywords);

  return dataset.filter((element) =>
    replaceAccents(element).includes(keywordsFormatted)
  );
}
