function initApplianceSelector() {
  const applianceSelector = document.getElementById("appareils-selector");

  const name = "Appareils";
  const placeholder = "Rechercher un appareil";
  const appliances = getAppliancesFromRecipes(30);

  const applianceSelectorModel = selectorFactory({
    name,
    placeholder,
    elements: appliances,
    typeId: 2,
    onclickEvent: displayApplianceList,
  });
  const applianceSelectorDOM = applianceSelectorModel.getSelectorDOM();

  applianceSelector.parentNode.replaceChild(
    applianceSelectorDOM,
    applianceSelector
  );
}

function filterApplianceList() {
  const applianceList = document.getElementById("appareils-list");
  const applianceInput = document.getElementById("appareils-input");
  const applianceSelector = document.getElementById("appareils-selector");

  let newAppliancesList = null;

  if (applianceInput.value == "") {
    newAppliancesList = getAppliancesFromRecipes(30);
  } else {
    newAppliancesList = getAppliancesByKeywords(applianceInput.value);
  }

  filterSelectorList(applianceList, 2, newAppliancesList);
  resizeSelector(applianceSelector, applianceList, newAppliancesList);
}

function displayApplianceList() {
  const applianceList = document.getElementById("appareils-list");
  const applianceInput = document.getElementById("appareils-input");
  const applianceSelector = document.getElementById("appareils-selector");

  applianceInput.oninput = () => filterApplianceList();

  displaySelectorList(applianceList, applianceInput, applianceSelector);
}

function closeApplianceList() {
  const applianceList = document.getElementById("appareils-list");
  const applianceInput = document.getElementById("appareils-input");
  const applianceSelector = document.getElementById("appareils-selector");
  applianceInput.value = "Appareils";

  closeSelectorList(applianceList, applianceInput, applianceSelector);
}
