let activeTags = [];

function addElementTag(tag, type) {
  let tagModel = null;
  let tagDOM = null;

  if (activeTags.includes(tag)) {
    return;
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
    activeTags.push({ name: tag, type });
  }
}

function removeElementTag(tagName) {
  let index = null;

  for (let i = 0; i < activeTags.length; i++) {
    console.log(activeTags[i].name);
    if (activeTags[i].name == tagName) {
      index = i;
      break;
    }
  }

  if (index != null) {
    activeTags.splice(index, 1);
    const tagsDOM = document.querySelectorAll(".selected-tag");

    for (let tagDOM of tagsDOM) {
      console.log(tagDOM.textContent, tagName);
      if (tagDOM.id == `${tagName}-tag`) {
        tagDOM.remove();
        return;
      }
    }
  }
}
