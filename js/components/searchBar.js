function initSearchBar() {
  const searchBar = document.querySelector(".search-bar");
  const searchInput = document.querySelector(".search-bar__input");

  searchInput.oninput = () => filterRecipes();
}

function getSearchBarValue() {
  const searchInput = document.querySelector(".search-bar__input");

  return searchInput.value;
}
