const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote"); // Sélectionner l'élément avec l'ID "quote"
const author = document.getElementById("author"); // Sélectionner l'élément avec l'ID "author"
const button = document.querySelector("button"); // Sélectionner le premier bouton
const insta = document.getElementById("insta"); // Sélectionner l'élément avec l'ID "insta"

button.addEventListener("click", function () {
  // Ajouter un écouteur d'événements pour le clic du bouton
  uneCitation(api_url); // Exécuter la fonction lors du clic
});

insta.addEventListener( "click", function() {
  instagram();
});

async function uneCitation(url) {
  const response = await fetch(url); // Attendre la réponse de l'API
  const data = await response.json(); // Convertir la réponse en JSON
  quote.innerHTML = data.content; // Remplacer le contenu de l'élément avec l'ID "quote" par la citation
  author.innerHTML = data.author; // Remplacer le contenu de l'élément avec l'ID "author" par l'auteur de la citation
}

uneCitation(api_url); // Appel initial

function instagram() {
  window.open("https://github.com/RondBallon");
}
