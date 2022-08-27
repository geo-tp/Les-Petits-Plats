// Used to simulate API behaviour for recipes.js content
class Api {
  static getIngredientsFromRecipes(recipes, limit = null) {

    if (!recipes) {
      recipes = Api.getAllRecipes()
    }

    let ingredients = [];
    let ingredientsWithoutAccents = [];

    for (let recipe of recipes) {
      for (let ingredient of recipe.ingredients) {
        let ing = capitalizeFirstLetter(replaceAccents(ingredient.ingredient));
        if (!ingredientsWithoutAccents.includes(ing)) {
          // ingredient is an object {ingredient:... , quantity:..., unit:...}
          ingredients.push(capitalizeFirstLetter(ingredient.ingredient));
          ingredientsWithoutAccents.push(ing);

          if (ingredients.length == limit) {
            return ingredients;
          }
        }
      }
    }

    return ingredients;
  }

  static getUstensilsFromRecipes(recipes, limit = null) {

    if (!recipes) {
      recipes = Api.getAllRecipes()
    }

    let ustensils = [];

    for (let recipe of recipes) {
      for (let ustensil of recipe.ustensils) {
        let ustensilCapitalized = capitalizeFirstLetter(ustensil);
        if (!ustensils.includes(ustensilCapitalized)) {
          ustensils.push(ustensilCapitalized);

          if (ustensils.length == limit) {
            return ustensils;
          }
        }
      }
    }

    return ustensils;
  }

  static getAppliancesFromRecipes(recipes, limit = null) {

    if (!recipes) {
      recipes = Api.getAllRecipes()
    }

    let appliances = [];

    for (let recipe of recipes) {
      let appliance = capitalizeFirstLetter(recipe.appliance);
      if (!appliances.includes(appliance)) {
        appliances.push(appliance);

        if (appliances.length == limit) {
          return appliances;
        }
      }
    }

    return appliances;
  }

  static getAllRecipes() {
    return recipes;
  }

  static getRecipesByTagsAndKeywords(keywords, tags) {
    return searchRecipes(keywords, tags);
  }

  static getRecipesByTags(tags) {
    return searchRecipesByTags(tags);
  }

  static getRecipesByKeywords(keywords) {
    return searchRecipesByKeywords(keywords);
  }

  static getIngredientsByKeywords(keywords, ingredients) {
    return searchElementsByKeywords(keywords, ingredients);
  }

  static getAppliancesByKeywords(keywords, appliances) {
    return searchElementsByKeywords(keywords, appliances);
  }

  static getUstensilsByKeywords(keywords, ustensils) {
    return searchElementsByKeywords(keywords, ustensils);
  }
}
