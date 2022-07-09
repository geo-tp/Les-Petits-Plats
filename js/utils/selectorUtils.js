function getIngredientsFromRecipes(limit = 30) {
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

function getUstensilsFromRecipes(limit = 30) {
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

function getAppliancesFromRecipes(limit = 30) {
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
