function toggleHistory() {
    var slideHistory = document.getElementById("rollHistory");
    var tabText = document.getElementById("menu-icon");
    //toggle adds a class if it's not there or removes it if it is.
    slideHistory.classList.toggle("slide");

    if (tabText.innerHTML === "Roll History") {
        tabText.innerHTML = "Dice Roller";
    } else {
        tabText.innerHTML = "Roll History";
    }
  }