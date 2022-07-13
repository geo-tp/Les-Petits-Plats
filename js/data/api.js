function getIngredientsFromRecipes(limit = null) {
  let ingredients = [];

  for (let recipe of recipes) {
    for (let ingredient of recipe.ingredients) {
      let ing = ingredient.ingredient.toLowerCase();
      if (!ingredients.includes(ing)) {
        // ingredient is an object with quantity
        ingredients.push(ing);

        if (ingredients.length == limit) {
          return ingredients;
        }
      }
    }
  }

  return ingredients;
}

function getUstensilsFromRecipes(limit = null) {
  let ustensils = [];

  for (let recipe of recipes) {
    for (let ustensil of recipe.ustensils) {
      if (!ustensils.includes(ustensil)) {
        // ingredient is an object with quantity
        ustensils.push(ustensil);

        if (ustensils.length == limit) {
          return ustensils;
        }
      }
    }
  }

  return ustensils;
}

function getAppliancesFromRecipes(limit = null) {
  let appliances = [];

  for (let recipe of recipes) {
    if (!appliances.includes(recipe.appliance.toLowerCase())) {
      appliances.push(recipe.appliance.toLowerCase());

      if (appliances.length == limit) {
        return appliances;
      }
    }
  }

  return appliances;
}

function getAllRecipes() {
  return recipes;
}

function getRecipesByTags(tags) {}

function getRecipesByKeywords(keywords) {}

function getIngredientsByKeywords(keywords) {
  let ingredients = getIngredientsFromRecipes();

  return searchElementsByKeywords(keywords, ingredients);
}

function getAppliancesByKeywords(keywords) {
  let appliances = getAppliancesFromRecipes();

  return searchElementsByKeywords(keywords, appliances);
}

function getUstensilsByKeywords(keywords) {
  let ustensils = getUstensilsFromRecipes();

  return searchElementsByKeywords(keywords, ustensils);
}
