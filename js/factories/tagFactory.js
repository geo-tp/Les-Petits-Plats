// Create an element selector (example: Ingredient)
function tagFactory(data) {
  const { name, typeId } = data;

  function getTagDOM() {
    const tagDOM = document.createElement("div");
    tagDOM.classList.add("selected-tag", `background--color${typeId}`);
    tagDOM.id = `${name}-tag`;
    console.log(name);
    const content = `
        <label class="selected-tag__label">${name}</label>
        <button class="selected-tag__button" onclick="removeElementTag('${name}')" aria-label="Supprimer le filtre">
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
