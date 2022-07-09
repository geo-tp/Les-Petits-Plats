function initIngredientSelector() {
  console.log("init");
  const ingredientSelector = document.getElementById("ingredients-selector");
  const name = "Ingredients";
  const placeholder = "Rechercher un ingrédient";
  const ingredients = getIngredientsFromRecipes();

  const ingredientSelectorModel = selectorFactory({
    name,
    placeholder,
    elements: ingredients,
    colorId: 1,
    onclickEvent: openIngredientList,
  });
  const ingredientSelectorDOM = ingredientSelectorModel.getSelectorDOM();

  ingredientSelector.parentNode.replaceChild(
    ingredientSelectorDOM,
    ingredientSelector
  );
}

function openIngredientList() {
  const ingredientList = document.getElementById("ingredients-list");
  const ingredientInput = document.getElementById("ingredients-input");
  const ingredientSelector = document.getElementById("ingredients-selector");

  ingredientInput.type = "text";
  ingredientInput.setAttribute("value", "");
  ingredientList.classList.remove("visibility--hidden");
  ingredientSelector.style.flexBasis = "60%";
}
