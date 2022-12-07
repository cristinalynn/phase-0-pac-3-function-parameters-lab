function introduction(name) {
    return(`Hi, my name is ${name}.`);
 }
introduction("Cristina");

function introductionWithLanguage(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguage("Cristina", "JavaScript");

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguage("Cristina", "JavaScript");