const UstensilSelector = new SelectorManager(
  "Ustensils",
  3,
  Api.getUstensilsFromRecipes,
  Api.getUstensilsByKeywords
);

// function initUstensilSelector() {
//   const ustensilSelector = document.getElementById("ustensils-selector");
//   const name = "Ustensils";
//   const placeholder = "Rechercher un ustensil";
//   const ustensils = Api.getUstensilsFromRecipes(30);

//   const ustensilSelectorModel = selectorFactory({
//     name,
//     placeholder,
//     elements: ustensils,
//     typeId: 3,
//     onclickEvent: displayUstensilList,
//   });
//   const ustensilSelectorDOM = ustensilSelectorModel.getSelectorDOM();

//   ustensilSelector.parentNode.replaceChild(
//     ustensilSelectorDOM,
//     ustensilSelector
//   );
// }

// function filterUstensilList() {
//   const ustensilList = document.getElementById("ustensils-list");
//   const ustensilInput = document.getElementById("ustensils-input");
//   const ustensilSelector = document.getElementById("ustensils-selector");

//   let newUstensilsList = null;

//   if (ustensilInput.value == "") {
//     newUstensilsList = Api.getUstensilsFromRecipes(30);
//   } else {
//     newUstensilsList = Api.getUstensilsByKeywords(ustensilInput.value);
//   }

//   filterSelectorList(ustensilList, 3, newUstensilsList);
//   resizeSelector(ustensilSelector, ustensilList, newUstensilsList);
// }

// function displayUstensilList() {
//   const ustensilList = document.getElementById("ustensils-list");
//   const ustensilInput = document.getElementById("ustensils-input");
//   const ustensilSelector = document.getElementById("ustensils-selector");

//   ustensilInput.oninput = () => filterUstensilList();

//   displaySelectorList(ustensilList, ustensilInput, ustensilSelector);
// }

// function closeUstensilList() {
//   const ustensilList = document.getElementById("ustensils-list");
//   const ustensilInput = document.getElementById("ustensils-input");
//   const ustensilSelector = document.getElementById("ustensils-selector");

//   ustensilInput.setAttribute("value", "Ustensils");

//   closeSelectorList(ustensilList, ustensilInput, ustensilSelector);
// }
