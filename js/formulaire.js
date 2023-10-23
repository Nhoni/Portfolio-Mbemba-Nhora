document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupérer les données du formulaire
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;


    // Envoi des données au serveur
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "votre_script_de_traitement.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText); 
        }
    };

    var data = "name=" + name + "&email=" + email + "&message=" + message;
    xhr.send(data);
});