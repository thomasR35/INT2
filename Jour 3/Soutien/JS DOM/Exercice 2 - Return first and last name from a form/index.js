document.addEventListener("DOMContentLoaded", function () {
  let NameDOM = document.getElementById("firstNameField");
  let name = NameDOM.value;
  console.log(name);
  let SurnameDOM = document.getElementById("lastNameField");
  let surname = SurnameDOM.value;
  console.log(surname); // Afficher dans la console les valeurs des champs du formulaire #form1
});
