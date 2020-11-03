function Validation() {

    var a = document.getElementById("name1").value;
    var b = document.getElementById("name2").value;
    var c = document.getElementById("date").value;
    var d = document.getElementById("adresse").value;
    var e = document.getElementById("email").value;

    if (  (a && b && c && d && e !="" ) && (a.length>4) && (b.length<=20) && (c.length>4) && (d.length<=20)  && (e.length>4) && (d.length<=50) && (e.length>4) && (e.length<=30) ) {

        document.getElementById("error").classList.remove("display");
        document.getElementById("resultat").classList.add("display");
        document.getElementById("resultat").innerHTML = " Bienvenue " +  document.getElementById("name1").value ; 
    }

    else{

        document.getElementById("resultat").classList.remove("display");
        document.getElementById("error").classList.add("display");
        document.getElementById("error").innerHTML = "Les champs doivent contenir au moins 5 caractères, veuillez les remplir !";

    } 
}