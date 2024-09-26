// function shuffle ((((3))))
//  après le boutton générer c'est un + 
shuffle()
// 1ere etape onr ecupère l'element en question 
let btn = document.getElementById('btn');
// 2eme étape click du bouton , la fonction qui va se déclencher au click , la fonction juste en dessos qu'on avait déja crer
btn.addEventListener('click', shuffle)
// la ya un problème ya tjrs la carte d'avant qui reset , donc a chaque fois qu'on shuffle on reset tout 

function shuffle() {
    let allcards = document.getElementsByClassName("card-img");
    // on va mtn générer une carte au hasard
    let random = Math.floor(Math.random() * allcards.length)  // un nombre au hasard
    let card = allcards[random]
    // carte choisis au sort  , donc la yen a 3 des cartes noirs et yen a une qui va être piocher ensuite je modifie l'image pcq apr defaut elel sont toute noir par une carte rouge
   card.setAttribute('src', "images/D.png")
   allcards.array.forEach(element => {
    card.setAttribute('src', "images/versos.png")
   })
}
//  arès cela si j'inspecte l'élement dans ma console je ovois collection !
// il a changé card par front ici en haut jsp pq , il dit sinon ça va lodifier la propriété de base et ile st parti en html ajouter



function flip(event) {
    // Récupérer l'élément sur lequel on a cliqué dessus à savoir div.card !
    let element = event.currentTarget;
    
    // Vérifier si c'est bien la carte qui est cliquée
    if (element.className == "card") {
        // Si la carte est déjà à 180 degrés, la remettre à 0, sinon la tourner à 180
        if (element.style.transform === "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        } else {
            element.style.transform = "rotateY(180deg)";
        }
    }
}
