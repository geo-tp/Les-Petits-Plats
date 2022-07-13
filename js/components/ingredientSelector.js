function initIngredientSelector() {
  const ingredientSelector = document.getElementById("ingredients-selector");
  const name = "Ingredients";
  const placeholder = "Rechercher un ingrédient";
  const ingredients = Api.getIngredientsFromRecipes(30);

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

function filterIngredientList() {
  const ingredientList = document.getElementById("ingredients-list");
  const ingredientInput = document.getElementById("ingredients-input");
  const ingredientSelector = document.getElementById("ingredients-selector");

  let newIngredientsList = null;

  if (ingredientInput.value == "") {
    newIngredientsList = Api.getIngredientsFromRecipes(30);
  } else {
    newIngredientsList = Api.getIngredientsByKeywords(ingredientInput.value);
  }

  filterSelectorList(ingredientList, 1, newIngredientsList);
  resizeSelector(ingredientSelector, ingredientList, newIngredientsList);
}

function displayIngredientList() {
  const ingredientList = document.getElementById("ingredients-list");
  const ingredientInput = document.getElementById("ingredients-input");
  const ingredientSelector = document.getElementById("ingredients-selector");

  ingredientInput.oninput = () => filterIngredientList();

  displaySelectorList(ingredientList, ingredientInput, ingredientSelector);
}

function closeIngredientList() {
  const ingredientList = document.getElementById("ingredients-list");
  const ingredientInput = document.getElementById("ingredients-input");
  const ingredientSelector = document.getElementById("ingredients-selector");
  ingredientInput.setAttribute("value", "Ingrédients");

  closeSelectorList(ingredientList, ingredientInput, ingredientSelector);
}
