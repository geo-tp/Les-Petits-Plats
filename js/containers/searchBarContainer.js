class SearchBarContainer {
  static searchBar = document.querySelector(".search-bar");
  static searchInput = document.querySelector(".search-bar__input");

  static getSearchBarInputDOM() {
    return this.searchInput;
  }

  static getSearchBarValue() {
    return this.searchInput.value;
  }
}
