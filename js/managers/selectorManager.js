// Manage elements selector (ingredients, ustensils, appliance)
class SelectorManager {
  constructor(name, typeId, getData, getDataByKeywords) {
    this.name = name;
    this.typeId = typeId;
    this.getData = getData;
    this.getDataByKeywords = getDataByKeywords;
    this.elementListDOM = document.getElementById(`${name.toLowerCase()}-list`);
    this.elementInputDOM = document.getElementById(
      `${name.toLowerCase()}-input`
    );
    this.elementSelectorDOM = document.getElementById(
      `${name.toLowerCase()}-selector`
    );

    this.elementSelectorAngleDOM = document.getElementById(
      `${name.toLowerCase()}-angle`
    );

    this.defaultElements = this.getData(null, 30);
    this.elements = this.defaultElements;

    this.elementInputDOM.oninput = () => this.filterList();
    this.elementSelectorDOM.onclick = () => this.displayList();

    this.closeList();
    this.updateList();
  }

  getPlaceholder = () => {
    let term = this.name.slice(0, this.name.length - 1).toLowerCase();
    return `Rechercher un ${term}`;
  };

  getInputId = () => {
    return this.elementInputDOM.id;
  };

  // Display elements list in DOM container
  displayList = () => {
    this.elementInputDOM.type = "text";
    this.elementInputDOM.value = "";
    this.elementInputDOM.focus();
    this.elementListDOM.classList.remove("visibility--hidden");
    this.elementSelectorDOM.style.flexBasis = "60%";
    this.elementSelectorAngleDOM.classList.add(
      "selector__search__icon--reverse"
    );

  };

  // filter elements list, update view and resize selector
  filterList = () => {
    let newList = this.getData(RecipesContainer.recipes, 30)
    if (this.elementInputDOM.value != this.name ) {
      newList = this.getDataByKeywords(this.elementInputDOM.value, newList);
    }
    this.elements = newList;
    this.updateList();
    this.resizeSelector()

    if (this.elementInputDOM.value == this.name) {
      this.closeList();
    }
  };

  closeList = () => {
    this.elementInputDOM.type = "button";
    this.elementInputDOM.value = this.name;
    this.elementListDOM.classList.add("visibility--hidden");
    this.elementSelectorDOM.style.flexBasis = "12%";
    this.elementSelectorAngleDOM.classList.remove(
      "selector__search__icon--reverse"
    );

    this.updateList();
  };

  resizeSelector = () => {
    switch (true) {
      case this.elements.length < 10:
        this.elementSelectorDOM.style.flexBasis = "17%";
        this.elementListDOM.style.height = "auto";
        break;

      case this.elements.length < 20:
        this.elementSelectorDOM.style.flexBasis = "40%";
        this.elementListDOM.style.height = "300px";
        break;

      default:
        this.elementSelectorDOM.style.flexBasis = "60%";
        this.elementListDOM.style.height = "300px";
    }
  };

  updateList = () => {
    this.elementListDOM.innerHTML = "";

    for (let element of this.elements) {
      let li = document.createElement("li");
      li.classList.add("selector__elements__item");
      li.textContent = element;
      li.onclick = () => TagsContainer.addTag(element, this.typeId);
      this.elementListDOM.appendChild(li);
    }
  };
}
