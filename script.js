window.onload = function() {loading()};

function loading() {
  document.getElementById("loading").style.display = "none";
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){ 
     document.getElementById("menu").style.background = 'black';
  }else {
    document.getElementById("menu").style.background = 'linear-gradient(180deg, black, transparent)';
  }
  
 }

function goHome() {
  var elmnt = document.getElementById("home");
  elmnt.scrollIntoView({ behavior: 'smooth'});
}

function goAbout() {
  var elmnt = document.getElementById("about");
  elmnt.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

function goIgredients() {
  var elmnt = document.getElementById("igredients");
  elmnt.scrollIntoView({ behavior: 'smooth'});
}

function goMenu() {
  var elmnt = document.getElementById("cardapio");
  elmnt.scrollIntoView({ behavior: 'smooth'});
}

function goReviews() {
  var elmnt = document.getElementById("reviews");
  elmnt.scrollIntoView({ behavior: 'smooth'});
}

function goReservation() {
  var elmnt = document.getElementById("reservation");
  elmnt.scrollIntoView({ behavior: 'smooth'});
}

function showBook() {
  var nome = document.forms["reservation"]["fname"].value;
  var email = document.forms["reservation"]["fmail"].value;
  var data = document.forms["reservation"]["fdate"].value;
  var partyNum = document.forms["reservation"]["lpartyNum"].value;

  alert("Reservation done!" + "\nName: " + nome + "\nEmail: " + email + "\nDate: " + data + 
        "\nParty Number: " + partyNum);
}