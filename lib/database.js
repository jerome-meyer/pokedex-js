// ⚠️ Ne pas modifier ce fichier !

let db;

/**
 * Charge la base de données SQLite (pokedex.db) dans le navigateur.
 * À appeler une seule fois, avant toute requête.
 */
export async function loadDatabase() {
  const SQL = await initSqlJs({
    locateFile: (file) => `https://sql.js.org/dist/${file}`,
  });

  const response = await fetch("./pokedex.db");
  const arrayBuffer = await response.arrayBuffer();
  db = new SQL.Database(new Uint8Array(arrayBuffer));

  return db;
}

/**
 * Exécute une requête SQL et retourne le résultat sous forme
 * d'un tableau d'objets Pokemon.
 *
 * Un objet Pokemon a la forme suivante :
 * {
 *   id, name, type1, type2, hp, attack, spe_attack,
 *   defense, spe_defense, speed, total_stats, generation, legendary
 * }
 *
 * @param {string} sql - La requête SQL à exécuter
 * @returns {Array} Un tableau de Pokemon
 */
export function queryAll(sql) {
  const stmt = db.prepare(sql);
  const rows = [];

  while (stmt.step()) {
    rows.push(stmt.getAsObject());
  }
  stmt.free();

  const results = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    if (Number(row.id) > 0) {
      const pokemon = {
        id: row.id,
        name: row.name,
        type1: row.type1,
        type2: row.type2,
        hp: row.hp,
        attack: row.attack,
        defense: row.defense,
        spe_attack: row.spe_attack,
        spe_defense: row.spe_defense,
        speed: row.speed,
        total_stats: row.total,
        generation: row.generation,
        legendary: row.legendary == "True",
      };

      results.push(pokemon);
    }
  }

  return results;
}
