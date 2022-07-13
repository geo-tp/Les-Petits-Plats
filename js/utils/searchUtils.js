function searchElementsByKeywords(keywords, dataset) {
  keywordsFormatted = replaceAccents(
    removeIneficientWords(removeUnusedChar(keywords))
  );

  let elementsResults = [];

  for (let element of dataset) {
    if (replaceAccents(element).includes(keywordsFormatted)) {
      elementsResults.push(element);
    }
  }

  return elementsResults;
}

function searchRecipesByIngredientsTags(tags, dataset) {
  let filteredRecipes = [];

  for (let recipe of dataset) {
    let recipeCheckSucceed = true;
    let recipeIngredients = [];
    console.log(recipe);
    for (ingredient of recipe.ingredients) {
      console.log(ingredient.ingredient);
      recipeIngredients.push(ingredient.ingredient.toLowerCase());
    }

    for (let ingredient of tags) {
      if (recipeIngredients.indexOf(ingredient) == -1) {
        recipeCheckSucceed = false;
        break;
      }
    }

    if (recipeCheckSucceed) {
      filteredRecipes.push(recipe);
    }
  }

  return filteredRecipes;
}

function searchRecipesByApplianceTag(tag, dataset) {
  let filteredRecipes = [];
  for (let recipe of dataset) {
    if (recipe.appliance.toLowerCase() == tag) {
      filteredRecipes.push(recipe);
    }
  }

  return filteredRecipes;
}

function searchRecipesByUstensilsTags(tags, dataset) {
  let recipeCheckSucceed = true;
  let filteredRecipes = [];

  for (let recipe of dataset) {
    for (let ustensil of tags) {
      if (recipe.ustensils.indexOf(ustensil) == -1) {
        recipeCheckSucceed = false;
        break;
      }
    }

    if (recipeCheckSucceed) {
      filteredRecipes.push(recipe);
    }
  }

  return filteredRecipes;
}

function searchRecipesByTags(tags, dataset) {
  let recipesResults = dataset;

  if (tags.appliance) {
    recipesResults = searchRecipesByApplianceTag(
      tags.appliance,
      recipesResults
    );
  }

  if (tags.ustensils.length) {
    recipesResults = searchRecipesByUstensilsTags(
      tags.ustensils,
      recipesResults
    );
  }

  if (tags.ingredients.length) {
    recipesResults = searchRecipesByIngredientsTags(
      tags.ingredients,
      recipesResults
    );
  }

  return recipesResults;
}

function searchRecipesByKeywords(keywords, dataset) {
  if (!keywords) {
    return dataset;
  }

  keywordsFormatted = replaceAccents(
    removeIneficientWords(removeUnusedChar(keywords))
  );

  let recipesResults = [];

  for (let recipe of dataset) {
    if (
      replaceAccents(recipe.name + " " + recipe.description).includes(
        keywordsFormatted
      )
    ) {
      recipesResults.push(recipe);
    }
  }

  return recipesResults;
}

function searchRecipes(keywords, tags) {
  let recipesResults = searchRecipesByTags(tags, getAllRecipes());
  recipesResults = searchRecipesByKeywords(keywords, recipesResults);

  return recipesResults;
}
