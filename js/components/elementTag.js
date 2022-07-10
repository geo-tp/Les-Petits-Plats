function addElementTag(tag, type) {
  let tagModel = null;
  let tagDOM = null;
  console.log(tag, type);
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
  console.log(tagDOM);
  if (tagDOM) {
    const tags = document.querySelector(".tags");
    tags.appendChild(tagDOM);
  }
}
