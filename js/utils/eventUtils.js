// Event for closing active selector when user click on body or on another selector
function selectorsCloseEvent() {
  const body = document.querySelector("body");

  body.onclick = (e) => {
    if (e.target.classList[0] == "selector__elements__item") {
      return;
    }
    switch (e.target.id) {
      case IngredientSelector.getInputId():
        ApplianceSelector.closeList();
        UstensilSelector.closeList();
        break;
      case ApplianceSelector.getInputId():
        IngredientSelector.closeList();
        UstensilSelector.closeList();
        break;
      case UstensilSelector.getInputId():
        IngredientSelector.closeList();
        ApplianceSelector.closeList();
        break;
      default:
        ApplianceSelector.closeList();
        UstensilSelector.closeList();
        IngredientSelector.closeList();
    }
  };
}

// Trigger recipes filtering when user type chars in search bar
function searchBarFilterEvent() {
  const searchInput = SearchBarContainer.getSearchBarInputDOM();
  searchInput.oninput = () => {
    RecipesContainer.filterRecipes()
    ApplianceSelector.filterList()
    UstensilSelector.filterList()
    IngredientSelector.filterList()
  };
}
