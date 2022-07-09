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

  ingredientInput.type = "text";
  ingredientInput.setAttribute("value", "");
  ingredientInput.focus();
  ingredientInput.addEventListener("focusout", closeIngredientList);
  ingredientList.classList.remove("visibility--hidden");
  ingredientSelector.style.flexBasis = "60%";
}

function closeIngredientList() {
  const ingredientList = document.getElementById("ingredients-list");
  const ingredientInput = document.getElementById("ingredients-input");
  const ingredientSelector = document.getElementById("ingredients-selector");

  ingredientInput.type = "button";
  ingredientInput.setAttribute("value", "Ingrédients");
  ingredientList.classList.add("visibility--hidden");
  ingredientSelector.style.flexBasis = "12%";
}
