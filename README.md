# Pokédex JS — Explorateur Pokémon Interactif

Application web interactive permettant d'explorer un catalogue de Pokémon avec filtres dynamiques et affichage en cartes détaillées.

## ✨ Fonctionnalités
- Affichage dynamique des cartes Pokémon (nom, types, statistiques, illustrations)
- Filtrage multi-critères : par type, par génération et par statut légendaire
- Réinitialisation instantanée des filtres
- Chargement des données depuis une base SQLite locale

## 🛠️ Technologies
- **JavaScript** (ES Modules, async/await)
- **SQLite** (`sql.js` via WebAssembly)
- **HTML5 & CSS3** (cartes responsives, thèmes colorés par type)

## 🚀 Lancement
Pour charger la base SQLite sans restriction CORS du navigateur, lancez un serveur local léger :
```bash
npx serve .
# ou avec Python
python3 -m http.server 8000
```
Puis accédez à `http://localhost:8000` dans votre navigateur.
