function initApplianceSelector() {
  console.log("init");
  const applianceSelector = document.getElementById("appareils-selector");
  const name = "Appareils";
  const placeholder = "Rechercher un appareil";
  const appliances = getAppliancesFromRecipes();

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

function displayApplianceList() {
  const applianceList = document.getElementById("appareils-list");
  const applianceInput = document.getElementById("appareils-input");
  const applianceSelector = document.getElementById("appareils-selector");

  applianceInput.type = "text";
  applianceInput.setAttribute("value", "");
  applianceInput.focus();
  // applianceInput.addEventListener("focusout", closeapplianceList);
  applianceList.classList.remove("visibility--hidden");
  applianceSelector.style.flexBasis = "60%";
}

function closeApplianceList() {
  const applianceList = document.getElementById("appliances-list");
  const applianceInput = document.getElementById("appliances-input");
  const applianceSelector = document.getElementById("appliances-selector");

  applianceInput.type = "button";
  applianceInput.setAttribute("value", "Ingrédients");
  applianceList.classList.add("visibility--hidden");
  applianceSelector.style.flexBasis = "12%";
}
