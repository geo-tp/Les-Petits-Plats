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

function updateApplianceList() {
  console.log("APPIANCE LIST");
  const applianceList = document.getElementById("appareils-list");
  const applianceInput = document.getElementById("appareils-input");

  const filteredAppliances = getAppliancesByKeywords(applianceInput.value);

  updateSelectorList(applianceList, filteredAppliances);
}

function displayApplianceList() {
  const applianceList = document.getElementById("appareils-list");
  const applianceInput = document.getElementById("appareils-input");
  const applianceSelector = document.getElementById("appareils-selector");

  applianceInput.oninput = () => updateApplianceList();

  displaySelectorList(applianceList, applianceInput, applianceSelector);
}

function closeApplianceList() {
  const applianceList = document.getElementById("appareils-list");
  const applianceInput = document.getElementById("appareils-input");
  const applianceSelector = document.getElementById("appareils-selector");
  applianceInput.setAttribute("value", "Appareils");

  closeSelectorList(applianceList, applianceInput, applianceSelector);
}
