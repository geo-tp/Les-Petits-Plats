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
    this.elements = this.getData(30);
    console.log(this.elements);

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

  displayList = () => {
    console.log("DISPLAT");
    this.elementInputDOM.type = "text";
    this.elementInputDOM.value = "";
    this.elementInputDOM.focus();
    this.elementListDOM.classList.remove("visibility--hidden");
    this.elementSelectorDOM.style.flexBasis = "60%";
  };

  filterList = () => {
    let newList = null;

    if (this.elementInputDOM.value == "") {
      newList = this.getData(30);
    } else {
      newList = this.getDataByKeywords(this.elementInputDOM.value);
    }
    this.elements = newList;
    this.updateList();
    this.resizeSelector();
  };

  closeList = () => {
    this.elementInputDOM.type = "button";
    this.elementListDOM.classList.add("visibility--hidden");
    this.elementSelectorDOM.style.flexBasis = "12%";
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
      li.onclick = () => addElementTag(element, this.typeId);
      this.elementListDOM.appendChild(li);
    }
  };
}
