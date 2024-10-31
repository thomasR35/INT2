document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".js-submit-button")
    .addEventListener("click", function (ButtonClick) {
      let resultVolume =
        (4 / 3) *
        Math.PI *
        Math.pow(document.getElementById("radius").value, 3);
      document.getElementById("volume").value = resultVolume;
      ButtonClick.preventDefault();
      // Lorsque l'utilisateur saisi le rayon dans le champ radius
      // Puis clique sur le bouton "Calculate"
      // Calculer le volume d'une sphère et mettre le résultat dans le champ volume
      // ASTUCE : volume sphère = (4/3) * PI * (rayon puissance 3)
    });
});
