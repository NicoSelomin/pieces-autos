//Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

const article = pieces[0];

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

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imgElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);