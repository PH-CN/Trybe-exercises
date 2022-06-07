"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const exercise2_1 = __importDefault(require("./exercise2"));
const exercise3_1 = __importDefault(require("./exercise3"));
function exec() {
    const monthsNames = Object.values(exercise2_1.default);
    const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano");
    // O método .keyInSelect mostra uma interface
    // de escolha para a pessoa usuária
    const seasonsSouth = {
        [exercise3_1.default.OUTONO]: [exercise2_1.default.MARCO, exercise2_1.default.ABRIL, exercise2_1.default.MAIO, exercise2_1.default.JUNHO],
        [exercise3_1.default.INVERNO]: [exercise2_1.default.JUNHO, exercise2_1.default.JULHO, exercise2_1.default.AGOSTO, exercise2_1.default.SETEMBRO],
        [exercise3_1.default.PRIMAVERA]: [exercise2_1.default.SETEMBRO, exercise2_1.default.OUTUBRO, exercise2_1.default.NOVEMBRO, exercise2_1.default.DEZEMBRO],
        [exercise3_1.default.VERAO]: [exercise2_1.default.DEZEMBRO, exercise2_1.default.JANEIRO, exercise2_1.default.FEVEREIRO, exercise2_1.default.MARCO],
    };
    // Criamos um objeto onde suas chaves são as estações
    // e seus valores são os meses. Note abaixo um segundo
    // objeto onde, sendo do hemisfério oposto, as estações
    // são opostas também
    const seasonsNorth = {
        [exercise3_1.default.PRIMAVERA]: seasonsSouth[exercise3_1.default.OUTONO],
        [exercise3_1.default.VERAO]: seasonsSouth[exercise3_1.default.INVERNO],
        [exercise3_1.default.OUTONO]: seasonsSouth[exercise3_1.default.PRIMAVERA],
        [exercise3_1.default.INVERNO]: seasonsSouth[exercise3_1.default.VERAO],
    };
    const hemispheres = {
        "Norte": seasonsNorth,
        "Sul": seasonsSouth
    };
    const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
    // O método .keyInSelect mostra uma interface
    // de escolha para a pessoa usuária
    const month = Object.values(exercise2_1.default)[choiceMonth];
    const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
    console.log(`Mês: \n${month}`);
    console.log(`Hemisfério: \n${hemisphere}`);
    console.log(`Estações:`);
    const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
    Object.entries(chosenHemisphereSeasons).map((entry) => {
        const seasons = entry[0];
        const months = entry[1];
        // São os meses de cada estação. Caso esteja
        // incluído em mais de uma estação, o console
        // abaixo irá adicionar
        if (months.includes(month))
            console.log(seasons);
    });
}
exec();
