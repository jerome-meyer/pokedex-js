import { loadDatabase, queryAll } from "./lib/database.js";
import { createPokemonCard } from "./lib/template.js";

// Chargement de la base de données
await loadDatabase(); // ⚠️ Cette ligne ne doit pas être supprimée ni bougée. Votre code doit se produire en dessous !

// 👉 Votre code commence ici

const card_container = document.getElementById("cardsContainer");
const type_filter = document.getElementById("typeFilter");
const gen_filter = document.getElementById("generationFilter");
const legendary_filter = document.getElementById("legendaryFilter");
const clear_button = document.getElementById("clearFilters");

function getAllPokemon(){
    try {
        const results = queryAll("SELECT * FROM pokemon");
        return results;
    } catch (error) {
        console.error("Erreur listing", error);
        return [];
    }
}

function displayPokemon(pokemon) {

    for (let i = 0; i < pokemon.length; i++ ){
        const card = createPokemonCard(pokemon[i]);
        card_container.appendChild(card);
    }
}

function displayAll() {
    const allPokemon = getAllPokemon();
    displayPokemon(allPokemon);
}

function clear (){
    card_container.innerHTML = "";
}

function clearAll (){
    clear();
    type_filter.value = "";
    gen_filter.value = "";
    legendary_filter.value = "";
    displayAll();
}

function filterType(){
    clear();
    const type = type_filter.value;
    let pokemon;
    
    if (type != ""){
  
        pokemon = queryAll(`SELECT * FROM pokemon WHERE type1 = '${type}' OR type2 = '${type}'`);
    } else {
        pokemon = getAllPokemon();
    }
    

    displayPokemon(pokemon);
}


function filterGen(){
    clear();
    const gen = gen_filter.value;
    let pokemon;
    
    if (gen != ""){
  
        pokemon = queryAll(`SELECT * FROM pokemon WHERE generation = '${gen}'` );
    } else {
        pokemon = getAllPokemon();
    }
    

    displayPokemon(pokemon);
}

function filterLeg(){
    clear();
    const leg = legendary_filter.value;
    let pokemon;
    
    if (leg != ""){
  
        pokemon = queryAll(`SELECT * FROM pokemon WHERE legendary = '${leg}'` );
    } else {
        pokemon = getAllPokemon();
    }
    

    displayPokemon(pokemon);
}

function filter(){
    clear();
    let sql = "SELECT * FROM pokemon WHERE 1=1";

    const type = type_filter.value; 
    if (type != "") {
        sql += ` AND (type1='${type}' OR type2 = '${type}')`
    }

    const gen = gen_filter.value; 
    if (gen != "") {
        sql += ` AND generation='${gen}'`
    }


    const leg = legendary_filter.value; 
    if (leg != "") {
        sql += ` AND legendary='${leg}'`
    }

    const pokemon = queryAll(sql);
    displayPokemon(pokemon);
    
    
}
















// Lancement 
displayAll();
type_filter.addEventListener("change", filter);
gen_filter.addEventListener("change",filter );
legendary_filter.addEventListener("change",filter );
clear_button.addEventListener("click", clearAll);

