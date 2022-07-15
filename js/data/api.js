class Api {
  static getIngredientsFromRecipes(limit = null) {
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

  static getUstensilsFromRecipes(limit = null) {
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

  static getAppliancesFromRecipes(limit = null) {
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

  static getIngredientsByKeywords(keywords) {
    let ingredients = Api.getIngredientsFromRecipes();

    return searchElementsByKeywords(keywords, ingredients);
  }

  static getAppliancesByKeywords(keywords) {
    let appliances = Api.getAppliancesFromRecipes();

    return searchElementsByKeywords(keywords, appliances);
  }

  static getUstensilsByKeywords(keywords) {
    let ustensils = Api.getUstensilsFromRecipes();

    return searchElementsByKeywords(keywords, ustensils);
  }
}
