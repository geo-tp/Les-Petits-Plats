function formatKeywords(keywords) {
  keywords = removeIneficientWords(keywords);
  keywords = removeUnusedChar(keywords);
  keywords = replaceAccents(keywords);

  return keywords;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function replaceAccents(string) {
  return string
    .toLowerCase()
    .replace(/[éèêë]/g, "e")
    .replace(/[àäâ]/g, "a")
    .replace(/[îï]/g, "i")
    .replace(/[ôö]/g, "o")
    .replace(/[ùûû]/g, "u")
    .replace(/[ç]/g, "c");
}

function removeUnusedChar(string) {
  let stringWithoutSpecialChar = string.replace(
    /[&\/\\#,+()$~%._'":*?<>{}]/g,
    ""
  );
  return stringWithoutSpecialChar.trim();
}

function removeIneficientWords(string) {
  const ineficientWords = [
    "alors",
    "au",
    "aucuns",
    "aussi",
    "autre",
    "avant",
    "avec",
    "avoir",
    "bon",
    "car",
    "ce",
    "cela",
    "ces",
    "ceux",
    "chaque",
    "ci",
    "comme",
    "comment",
    "dans",
    "de",
    "des",
    "du",
    "dedans",
    "dehors",
    "depuis",
    "devrait",
    "doit",
    "donc",
    "dos",
    "début",
    "elle",
    "elles",
    "en",
    "encore",
    "essai",
    "est",
    "et",
    "eu",
    "fait",
    "faites",
    "fois",
    "font",
    "hors",
    "ici",
    "il",
    "ils",
    "je",
    "juste",
    "la",
    "le",
    "les",
    "leur",
    "là",
    "ma",
    "maintenant",
    "mais",
    "mes",
    "mien",
    "moins",
    "mon",
    "mot",
    "même",
    "ni",
    "nommés",
    "notre",
    "nous",
    "ou",
    "où",
    "par",
    "parce",
    "pas",
    "peut",
    "peu",
    "plupart",
    "pour",
    "pourquoi",
    "quand",
    "que",
    "quel",
    "quelle",
    "quelles",
    "quels",
    "qui",
    "sa",
    "sans",
    "ses",
    "seulement",
    "si",
    "sien",
    "son",
    "sont",
    "sous",
    "soyez",
    "sujet",
    "sur",
    "ta",
    "tandis",
    "tellement",
    "tels",
    "tes",
    "ton",
    "tous",
    "tout",
    "trop",
    "très",
    "tu",
    "voient",
    "vont",
    "votre",
    "vous",
    "vu",
    "ça",
    "étaient",
    "était",
    "étions",
    "été",
    "être",
  ];

  let stringArray = string.split(" ");
  let filteredStringArray = [];
  for (let word of stringArray) {
    if (!ineficientWords.includes(word)) {
      filteredStringArray.push(word);
    }
  }

  return filteredStringArray.join(" ");
}
