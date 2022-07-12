function initIngredientSelector() {
  const ingredientSelector = document.getElementById("ingredients-selector");
  const name = "Ingredients";
  const placeholder = "Rechercher un ingrédient";
  const ingredients = getIngredientsFromRecipes(30);

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

function updateIngredientList() {
  const ingredientList = document.getElementById("ingredients-list");
  const ingredientInput = document.getElementById("ingredients-input");
  const ingredientSelector = document.getElementById("ingredients-selector");

  const filteredIngredients = getIngredientsByKeywords(ingredientInput.value);

  updateSelectorList(ingredientList, 1, filteredIngredients);
  resizeSelector(ingredientSelector, ingredientList, filteredIngredients);
}

function displayIngredientList() {
  const ingredientList = document.getElementById("ingredients-list");
  const ingredientInput = document.getElementById("ingredients-input");
  const ingredientSelector = document.getElementById("ingredients-selector");

  ingredientInput.oninput = () => updateIngredientList();

  displaySelectorList(ingredientList, ingredientInput, ingredientSelector);
}

function closeIngredientList() {
  const ingredientList = document.getElementById("ingredients-list");
  const ingredientInput = document.getElementById("ingredients-input");
  const ingredientSelector = document.getElementById("ingredients-selector");
  ingredientInput.setAttribute("value", "Ingrédients");

  closeSelectorList(ingredientList, ingredientInput, ingredientSelector);
}
