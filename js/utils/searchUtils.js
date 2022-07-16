function checkTagsMatchUstensils(recipe, tags) {
  const recipeUstensils = recipe.ustensils.map((ustensil) =>
    capitalizeFirstLetter(ustensil)
  );
  return tags.every((ustensil) => recipeUstensils.includes(ustensil));
}

function checkTagsMatchIngredients(recipe, tags) {
  const recipeIngredients = recipe.ingredients.map((ingredient) =>
    capitalizeFirstLetter(ingredient.ingredient)
  );
  return tags.every((ingredient) => recipeIngredients.includes(ingredient));
}

function checkTagMatchAppliance(recipe, tag) {
  return capitalizeFirstLetter(recipe.appliance) == tag;
}
function searchRecipeByTags(tags) {
  let recipes = Api.getAllRecipes();

  recipesResults = recipes.filter((recipe) => tags.forEach());
}

// let recipe = {
//   id: 4,
//   name: "Salade de riz",
//   servings: 4,
//   ingredients: [
//     {
//       ingredient: "Riz blanc",
//       quantity: 500,
//       unit: "grammes",
//     },
//     {
//       ingredient: "Thon en miettes",
//       quantity: 200,
//       unit: "grammes",
//     },
//     {
//       ingredient: "Tomate",
//       quantity: 2,
//     },
//     {
//       ingredient: "Oeuf dur",
//       quantity: 2,
//     },
//     {
//       ingredient: "Maïs",
//       quantity: 300,
//       unit: "grammes",
//     },
//     {
//       ingredient: "Vinaigrette",
//       quantity: 5,
//       unit: "cl",
//     },
//   ],
//   time: 50,
//   description:
//     "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..",
//   appliance: "cuiseur de riz",
//   ustensils: ["saladier", "passoire", "Cuillère à soupe", "Verres"],
// };

// let ingredientsTags = ["Riz blanc", "Tomate"];
// let ustensilsTags = ["Cuillère à soupe", "Verres"];
// let applianceTag = "Cuiseur de riz";
