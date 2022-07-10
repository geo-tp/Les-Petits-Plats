// Create an element selector (example: Ingredient)
function selectorFactory(data) {
  const { name, colorId } = data;

  function getTagDOM() {
    const tagDOM = document.createElement("div");
    tagDOM.classList.add("selected-tag", `selected-tag--color${colorId}`);

    const content = `
        <label class="selected-tag__label">${name}</label>
        <button class="selected-tag__button" aria-label="Supprimer le filtre">
        <i class="fa fa-times-circle-o"></i>
        </button>
    `;

    tagDOM.innerHTML = content;

    return tagDOM;
  }
  return {
    name,
    getTagDOM,
  };
}
