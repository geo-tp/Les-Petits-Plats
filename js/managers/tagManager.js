// Manage selected tags
class TagManager {
  constructor(tag) {
    this.name = tag.name;
    this.type = tag.type;
    this.tagDOM = null;
  }
  // Return Tag element DOM
  getTagDOM() {
    if (this.tagDOM) {
      return this.tagDOM;
    }

    const tagDOM = document.createElement("div");
    tagDOM.classList.add("selected-tag", `background--color${this.type}`);
    tagDOM.id = `${this.name}-tag`;
    const content = `
          <label class="selected-tag__label">${this.name}</label>
          <button class="selected-tag__button" onclick="TagsContainer.removeTag('${this.name}')" aria-label="Supprimer le filtre">
          <i class="fa fa-times-circle-o"></i>
          </button>
      `;

    tagDOM.innerHTML = content;
    this.tagDOM = tagDOM;
    return tagDOM;
  }
}
