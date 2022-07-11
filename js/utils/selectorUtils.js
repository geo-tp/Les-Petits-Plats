function selectorsCloseEvent() {
  const body = document.querySelector("body");
  const ingredientInput = document.getElementById("ingredients-input");
  const ustensilInput = document.getElementById("ustensils-input");
  const applianceInput = document.getElementById("appareils-input");

  body.onclick = (e) => {
    if (e.target.classList[0] == "selector__elements__item") {
      return;
    }
    switch (e.target.id) {
      case ingredientInput.id:
        closeApplianceList();
        closeUstensilList();
        break;
      case applianceInput.id:
        closeIngredientList();
        closeUstensilList();
        break;
      case ustensilInput.id:
        closeIngredientList();
        closeApplianceList();
        break;
      default:
        closeApplianceList();
        closeUstensilList();
        closeIngredientList();
    }

    console.log("CLICKED");
  };
}
