/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif de cet exercice est de réaliser une galerie photo
avec deux flèches gauche et droite pour naviguer entre les photos.
Le code doit être compréhensible et simple (utiliser des fonctions pour se faire).

Exemple d'algorithme (pour t'aider) :
- Create the HTML Element for one photo
- Create the HTML Element for left button
- Create the HTML Element for right button
- Manage the photo visibility :
 - Will hide all photos
 - And show the selected one
- Select the photo to display : called when the user clic on left / right buttons
- Create the gallery with the photos and the buttons
- Launch the gallery (display the first photo)

*/
/**************************************************************/

/*                            Data                            */

/**************************************************************/

let photoDataList = [
  {
    src: "https://www.w3schools.com/w3images/fjords.jpg",
    alt: "Fjords",
    width: "600",
    height: "400",
  },
  {
    src: "https://www.w3schools.com/w3images/lights.jpg",
    alt: "Northern Lights",
    width: "600",
    height: "400",
  },
  {
    src: "https://www.w3schools.com/w3images/mountains.jpg",
    alt: "Mountains",
    width: "600",
    height: "400",
  },
  {
    src: "https://www.w3schools.com/w3images/forest.jpg",
    alt: "Forest",
    width: "600",
    height: "400",
  },
];
let slideIndex = 1;
/**************************************************************/
/*                         Functions                          */
/**************************************************************/
// Les fonctions seront implémentées ici...
function createPhotoHTMLElement(photoData) {
  let photoItem = document.createElement("img");

  photoItem.src = photoData.src;
  photoItem.alt = photoData.alt;
  photoItem.width = photoData.width;
  photoItem.height = photoData.height;
  photoItem.className = "gallery-item";

  return photoItem;
}

function createLeftButton() {
  let leftButton = document.createElement("button");
  leftButton.innerHTML = "&#10094;";
  leftButton.className = "gallery-button button-left";
  leftButton.addEventListener("click", function () {
    switchItem(-1);
  });
  return leftButton;
}

function createRightButton() {
  let rightButton = document.createElement("button");
  rightButton.innerHTML = "&#10095;";
  rightButton.className = "gallery-button button-right";
  rightButton.addEventListener("click", function () {
    switchItem(1);
  });
  return rightButton;
}

function createGallery(photoDataList) {
  let gallery = document.createElement("div");
  gallery.className = "gallery";
  document.body.appendChild(gallery);

  for (let i = 0; i < photoDataList.length; i++) {
    let photoItem = createPhotoHTMLElement(photoDataList[i]);
    gallery.appendChild(photoItem);
  }
  let leftButton = createLeftButton();
  let rightButton = createRightButton();
  gallery.appendChild(leftButton);
  gallery.appendChild(rightButton);
}

function showItem(n) {
  let items = document.getElementsByClassName("gallery-item");

  if (n > items.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = items.length;
  }

  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }
  items[slideIndex - 1].style.display = "block";
}

function switchItem(n) {
  showItem((slideIndex += n));
}
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
document.addEventListener("DOMContentLoaded", function () {
  createGallery(photoDataList);
  showItem(slideIndex);
});

// La galerie sera lancée ici (en affichant la première photo)...
