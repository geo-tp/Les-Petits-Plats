function searchElementsByKeywords(keywords, dataset) {
  keywordsFormatted = formatKeywords(keywords);

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

    for (ingredient of recipe.ingredients) {
      recipeIngredients.push(capitalizeFirstLetter(ingredient.ingredient));
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
    if (recipe.appliance == tag) {
      filteredRecipes.push(recipe);
    }
  }

  return filteredRecipes;
}

function searchRecipesByUstensilsTags(tags, dataset) {
  let recipeCheckSucceed = true;
  let filteredRecipes = [];

  for (let recipe of dataset) {
    recipeCheckSucceed = true;
    unstensilsCapitalized = [];

    for (let recipeUstensil of recipe.ustensils) {
      unstensilsCapitalized.push(capitalizeFirstLetter(recipeUstensil));
    }

    for (let ustensil of tags) {
      if (unstensilsCapitalized.indexOf(ustensil) == -1) {
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

  keywordsFormatted = formatKeywords(keywords);

  let recipesResults = [];

  for (let recipe of dataset) {
    let recipeInformations = `${recipe.name} ${
      recipe.description
    } ${recipe.ingredients.join(" ")} `;

    recipeInformations = replaceAccents(recipeInformations);

    if (recipeInformations.includes(keywordsFormatted)) {
      recipesResults.push(recipe);
    }
  }

  return recipesResults;
}

function searchRecipes(keywords, tags) {
  let recipesResults = searchRecipesByTags(tags, Api.getAllRecipes());
  recipesResults = searchRecipesByKeywords(keywords, recipesResults);

  return recipesResults;
}
