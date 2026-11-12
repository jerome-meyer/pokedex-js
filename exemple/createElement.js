// Exemples simples de manipulation du DOM (pour vous aider).
// Ce fichier n'est pas utilisé par l'application, c'est juste un mémo.

// Récupérer un container pour y stocker nos éléments
const container = document.getElementById("msg-container");

// Créer une nouvelle balise <p>
const paragraph = document.createElement("p");

// Insérer du texte dans la balise <p>
paragraph.textContent = "Hello World!";

// Insérer la balise <p> dans le container
container.appendChild(paragraph);

// Vider le container de toutes ses balises enfant
container.innerHTML = "";
