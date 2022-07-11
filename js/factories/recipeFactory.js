// Create a DOM element Recipe
function recipeFactory(data) {
  const {
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustentils,
  } = data;

  function getRecipeDOM() {
    const recipeCard = document.createElement("article");
    recipeCard.classList.add("recipe-card");
    const recipePicture = document.createElement("div");
    recipePicture.classList.add("recipe-card__picture");
    const recipeCardContent = document.createElement("div");
    recipeCardContent.classList.add("recipe-card__content");

    const recipeHeader = `            
    <div class="recipe-card__content__header">
        <h2 class="recipe-card__content__header__title">${name}</h2>
        <p class="recipe-card__content__header__time">
            <i class="far fa-clock"></i>
            ${time} min
        </p>
    </div>`;

    recipeCardContent.innerHTML = recipeHeader;

    const recipeBody = document.createElement("div");
    recipeBody.classList.add("recipe-card__content__body");
    const recipeIngredients = document.createElement("div");
    recipeIngredients.classList.add("recipe-card__content__body__ingredients");

    for (let ingredient of ingredients) {
      let item = document.createElement("div");
      item.classList.add("ingredient-item");
      item.innerHTML = `
            <span class="ingredient-item__name">${ingredient.ingredient}</span>
            <span class="ingredient-item__quantity"> ${ingredient.quantity} ${ingredient.unit}</span>
        `;
      recipeIngredients.appendChild(item);
    }

    const recipeDescription = document.createElement("p");
    recipeDescription.classList.add("recipe-card__content__body__instruction");
    recipeDescription.textContent = description;

    recipeBody.appendChild(recipeIngredients);
    recipeBody.appendChild(recipeDescription);
    recipeCardContent.appendChild(recipeBody);
    recipeCard.appendChild(recipePicture);
    recipeCard.appendChild(recipeCardContent);

    return recipeCard;
  }
  return {
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustentils,
    getRecipeDOM,
  };
}
