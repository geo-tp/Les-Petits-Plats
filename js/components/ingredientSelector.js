function initIngredientSelector() {
  const ingredientSelector = document.getElementById("ingredients-selector");
  const name = "Ingredients";
  const placeholder = "Rechercher un ingrédient";
  const ingredients = getIngredientsFromRecipes();

  const ingredientSelectorModel = selectorFactory({
    name,
    placeholder,
    elements: ingredients,
    typeId: 1,
    onclickEvent: displayIngredientList,
  });
  const ingredientSelectorDOM = ingredientSelectorModel.getSelectorDOM();

  ingredientSelector.parentNode.replaceChild(
    ingredientSelectorDOM,
    ingredientSelector
  );
}

function displayIngredientList() {
  const ingredientList = document.getElementById("ingredients-list");
  const ingredientInput = document.getElementById("ingredients-input");
  const ingredientSelector = document.getElementById("ingredients-selector");

  displaySelectorList(ingredientList, ingredientInput, ingredientSelector);
}

function closeIngredientList() {
  const ingredientList = document.getElementById("ingredients-list");
  const ingredientInput = document.getElementById("ingredients-input");
  const ingredientSelector = document.getElementById("ingredients-selector");

  closeSelectorList(ingredientList, ingredientInput, ingredientSelector);
}
