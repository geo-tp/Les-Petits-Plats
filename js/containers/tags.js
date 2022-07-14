class Tags {
  static activeTags = [];

  static addTag(tag, type) {
    let tagModel = null;
    let tagDOM = null;
    console.log(this.activeTags);

    for (let i = 0; i < this.activeTags.length; i++) {
      if (this.activeTags[i].name == tag) {
        return;
      }
    }

    switch (type) {
      case 1:
        tagModel = tagFactory({ name: tag, typeId: 1 });
        tagDOM = tagModel.getTagDOM();
        break;
      case 2:
        tagModel = tagFactory({ name: tag, typeId: 2 });
        tagDOM = tagModel.getTagDOM();
        break;
      case 3:
        tagModel = tagFactory({ name: tag, typeId: 3 });
        tagDOM = tagModel.getTagDOM();
        break;
    }
    if (tagDOM) {
      const tags = document.querySelector(".tags");
      tags.appendChild(tagDOM);
      this.activeTags.push({ name: tag, type });
    }

    filterRecipes();
  }

  static removeTag(tagName) {
    let index = null;

    for (let i = 0; i < this.activeTags.length; i++) {
      console.log(this.activeTags[i].name);
      if (this.activeTags[i].name == tagName) {
        index = i;
        break;
      }
    }

    if (index != null) {
      this.activeTags.splice(index, 1);
      const tagsDOM = document.querySelectorAll(".selected-tag");

      for (let tagDOM of tagsDOM) {
        console.log(tagDOM.textContent, tagName);
        if (tagDOM.id == `${tagName}-tag`) {
          tagDOM.remove();
          filterRecipes();
          return;
        }
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
