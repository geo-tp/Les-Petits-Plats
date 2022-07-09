// Create an element selector (example: Ingredient)
function selectorFactory(data) {
  const { title, placeholder, elements } = data;

  function getSelectorDOM() {
    return selectorDOM;
  }
  return {
    title,
    placeholder,
    elements,
    getSelectorDOM,
  };
}
