//Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();



for (let i = 0; i < pieces.length; i++) {

const sectionFiches = document.querySelector(".fiches"); 

const article = pieces[i];

// Création d’une balise dédiée à une pièce automobile
const pieceElement = document.createElement("article");

const imgElement = document.createElement("img");
imgElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerHTML = article.nom;

const descriptionElement = document.createElement("p");
descriptionElement.innerHTML = article.description;

const prixElement = document.createElement("p");
prixElement.innerHTML = `Prix : ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

const categorieElement = document.createElement("p");
categorieElement.innerHTML = article.categorie ?? "(aucune catégorie)";

sectionFiches.appendChild(pieceElement);
pieceElement.appendChild(imgElement);
pieceElement.appendChild(nomElement);
pieceElement.appendChild(prixElement);
pieceElement.appendChild(categorieElement);
}