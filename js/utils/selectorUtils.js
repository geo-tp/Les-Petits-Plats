function getIngredientsFromRecipes() {
  let ingredients = [];
  recipes.map((recipe) => {
    console.log(recipe);
    recipe.ingredients.map((ingredient) => {
      if (!ingredients.includes(ingredient)) {
        // ingredient is an object with quantity
        ingredients.push(ingredient.ingredient);
      }
    });
  });

  return ingredients;
}

function getUstensilsFromRecipes() {
  let ustensils = [];
  recipes.map((recipe) => {
    recipe.ustensils.map((ustensil) => {
      if (!ustensils.includes(ustensil)) {
        ustensils.push(ustensil);
      }
    });
  });

  return ustensils;
}

function getAppliancesFromRecipes() {
  let appliances = [];
  recipes.map((recipe) => {
    if (!appliances.includes(recipe.appliance)) {
      appliances.push(recipe.appliance);
    }
  });

  return appliances;
}
