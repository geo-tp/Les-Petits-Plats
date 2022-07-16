class Api {
  static getIngredientsFromRecipes(limit = null) {
    let ingredients = [];
    let ingredientsWithoutAccents = [];

    for (let recipe of recipes) {
      for (let ingredient of recipe.ingredients) {
        let ing = capitalizeFirstLetter(replaceAccents(ingredient.ingredient));
        if (!ingredientsWithoutAccents.includes(ing)) {
          // ingredient is an object with quantity
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

  static getUstensilsFromRecipes(limit = null) {
    let ustensils = [];

    for (let recipe of recipes) {
      for (let ustensil of recipe.ustensils) {
        let ustensilCapitalized = capitalizeFirstLetter(ustensil);
        console.log(ustensilCapitalized);
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

  static getAppliancesFromRecipes(limit = null) {
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
