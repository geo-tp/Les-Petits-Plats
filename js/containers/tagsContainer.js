class TagsContainer {
  static activeTags = [];

  static addTag(name, type) {
    for (let i = 0; i < this.activeTags.length; i++) {
      if (this.activeTags[i].name == name) {
        return;
      }

      if (this.activeTags[i].type == 2 && type == 2) {
        this.activeTags[i].getTagDOM().remove();
        this.activeTags.splice(i, 1);
      }
    }

    let tagModel = new TagManager({ name, type });
    let tagDOM = tagModel.getTagDOM();

    if (tagDOM) {
      const tags = document.querySelector(".tags");
      tags.appendChild(tagDOM);
      this.activeTags.push(tagModel);
    }

    RecipesContainer.filterRecipes();
  }

  static removeTag(tagName) {
    for (let i = 0; i < this.activeTags.length; i++) {
      console.log(this.activeTags[i].name);
      if (this.activeTags[i].name == tagName) {
        this.activeTags[i].getTagDOM().remove();
        this.activeTags.splice(i, 1);
        RecipesContainer.filterRecipes();
        break;
      }
    }
  }

  static getTypeOrderedActiveTags() {
    let ustensils = [];
    let ingredients = [];
    let appliance = "";

    for (let tag of this.activeTags) {
      switch (true) {
        case tag.type == 1:
          ingredients.push(tag.name);
          break;
        case tag.type == 2:
          appliance = tag.name;
          break;
        case tag.type == 3:
          ustensils.push(tag.name);
      }
    }

    return { ustensils, ingredients, appliance };
  }
}
