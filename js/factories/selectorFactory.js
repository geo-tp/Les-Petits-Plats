// Create an element selector (example: Ingredient)
function selectorFactory(data) {
  const { name, placeholder, elements, colorId, onclickEvent } = data;

  function getSelectorDOM() {
    const selectorSearch = `
        <div class="selector__search">
            <input
                id="${name.toLowerCase()}-input"
                class="selector__search__input"
                type="button"
                value="${name}"
                placeholder="${placeholder}"
            />
            <i class="selector__search__icon fa fa-angle-down"></i>
        </div>`;

    const selectorElements = document.createElement("ul");
    selectorElements.classList.add(
      `selector__elements`,
      `background--color${colorId}`,
      "visibility--hidden"
    );
    selectorElements.id = "ingredients-list";

    for (let element of elements) {
      let li = document.createElement("li");
      li.classList.add("selector__elements__item");
      li.textContent = element;
      selectorElements.appendChild(li);
    }

    const selectorDOM = document.createElement("div");
    selectorDOM.classList.add("selector", `background--color${colorId}`);
    selectorDOM.onclick = () => onclickEvent();
    selectorDOM.id = `${name.toLowerCase()}-selector`;
    selectorDOM.innerHTML = selectorSearch;
    selectorDOM.appendChild(selectorElements);

    return selectorDOM;
  }
  return {
    name,
    placeholder,
    elements,
    colorId,
    onclickEvent,
    getSelectorDOM,
  };
}