// ⚠️ Ne pas modifier ce fichier !

/**
 * Construit une carte HTML (div) pour afficher un Pokemon.
 * @param {Object} pokemon - Un objet Pokemon (voir database.js)
 * @returns {HTMLDivElement} La carte prête à être insérée dans le DOM
 */
export function createPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.className = "pokemon-card";

  card.innerHTML = `
    <div class="pokemon-name">${pokemon.name} ${
    pokemon.legendary ? '<span class="legendary-badge">Legendary</span>' : ""
  }</div>
    <div class="pokemon-types">
      <span class="type type-${pokemon.type1.toLowerCase()}">${pokemon.type1}</span>
      ${
        pokemon.type2
          ? `<span class="type type-${pokemon.type2.toLowerCase()}">${pokemon.type2}</span>`
          : ""
      }
    </div>

    <div class="card-image">
      <img src="images/${pokemon.id}.png" alt="${pokemon.name}">
    </div>

    <div class="card-stats">
      <div class="stat">
        <span class="stat-label">ATK</span>
        <span class="stat-value">${pokemon.attack}</span>
      </div>
      <div class="stat">
        <span class="stat-label">ATK SP</span>
        <span class="stat-value">${pokemon.spe_attack}</span>
      </div>
      <div class="stat">
        <span class="stat-label">DEF</span>
        <span class="stat-value">${pokemon.defense}</span>
      </div>
      <div class="stat">
        <span class="stat-label">DEF SP</span>
        <span class="stat-value">${pokemon.spe_defense}</span>
      </div>
    </div>
  `;

  return card;
}
