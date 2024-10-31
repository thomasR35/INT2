document.addEventListener("DOMContentLoaded", function () {
  let removeButton = document.querySelector(".js-remove-button");
  removeButton.addEventListener("click", function (event) {
    event.preventDefault();
    let colorSelector = document.querySelector(".js-color-selector");
    colorSelector.remove(colorSelector.selectedIndex);
  });
});

// Au clic sur le bouton ayant la classe js-remove-button
// Supprimer l'élément sélectionné dans la liste js-color-selector

// ASTUCE : Pour empêcher le rafraichissement de la page lors du clic sur le bouton,
// utiliser la fonction preventDefault sur l'événement click
