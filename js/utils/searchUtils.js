function searchElementsByKeywords(keywords, dataset) {
  keywordsFormatted = replaceAccents(removeIneficientWords(keywords));

  let elementsResults = [];

  for (let element of dataset) {
    if (replaceAccents(element).includes(keywords)) {
      elementsResults.push(element);
    }
  }

  return elementsResults;
}
