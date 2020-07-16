/*const diceObjects = {
    id: Date.now(),
    dSide: '',
    dCount: 0,
    dRoll: 0,
    modifier: 0,
    dTotal: 0
}*/

let diceObjects = []
//function to loop through diceObjects to add together, add modifier and total


function rollDice() {
  whatDice();
  calcTotal();
    toggleRolled();
    document.getElementById('rollHistory').innerText = JSON.stringify(diceObjects);
}

function toggleRolled() {
    var showDisplay = document.getElementById("rolledValue");
    var screen = window.matchMedia("(max-width: 900px)")
    //toggle adds a class if it's not there or removes it if it is.
    if (screen.matches) {
      showDisplay.classList.toggle("show");
    }
}

function whatDice() {
  const dice = document.getElementsByClassName('diceInput');
    
  for (var i = 0; i < dice.length; i++) {
    if (dice[i].value > 0) {
      const diceObject = {
        id: Date.now(),
        dSide: dice[i].id,
        dCount: dice[i].value,
        dRoll: rolledValue(dice[i].id, dice[i].value)
      }
      diceObjects.push(diceObject);
    }
  }
}

function rolledValue(id, value) {
  let num = id.slice(1);
  let rollValue = 0;
  for (var i = 1; i <= value; i++) {
    rollValue += Math.floor(Math.random() * num) + 1;  
  }
  return rollValue;
}

function calcTotal() {
  let num = 0;
  const modifier = document.getElementById('modifier').value;

  for (var i = 0; i < diceObjects.length; i++) {
    num += diceObjects[i].dRoll;
  }

  let total = num + parseInt(modifier);
  document.getElementById('roll-info').innerHTML = `${num} + ${modifier} = ${total}`;
  document.getElementById('rolled').innerText = total;

  const extraObject = {
    rollMod: modifier,
    rollTotal: total
  }
  diceObjects.push(extraObject);
}


//const mod = document.getElementById('modifier').value;

//get the multiplier

//create object - half way

//show in the rolled screen

//add to local server

//show in the history screen (load objects from local server)

//reset all inputs to zero