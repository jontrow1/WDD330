let diceObjects = []

window.addEventListener('load', () => {

  updateHistory();
});

function rollDice() {
  removeNaturals();
  whatDice();
  calcTotal();
  toggleRolled();
  updateHistory();
  resetForm();
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
  const viewport = document.getElementById('rolled');
    
  for (var i = 0; i < dice.length; i++) {
    if (dice[i].value > 0) {
      const diceObject = {
        id: Date.now(),
        dSide: dice[i].id,
        dCount: dice[i].value,
        dRoll: rolledValue(dice[i].id, dice[i].value)
      }
      diceObjects.push(diceObject);
      if (diceObject.dSide === 'd20' && diceObject.dRoll === 20) {
        viewport.classList.add('nat20');
      }
      if (diceObject.dSide === 'd20' && diceObject.dRoll === 1) {
        viewport.classList.add('nat1');
      }
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
  let text = '';
  const modifier = document.getElementById('modifier').value;

  for (var i = 0; i < diceObjects.length; i++) {
    num += diceObjects[i].dRoll;
    text = `${diceObjects[i].dCount}${diceObjects[i].dSide}(${diceObjects[i].dRoll}) + ${text}`
  }

  let total = num + parseInt(modifier);
  document.getElementById('roll-info').innerHTML = `${text} ${modifier} = ${total}`;
  document.getElementById('rolled').innerText = total;

  lsObject(text, modifier, total)
}

function lsObject(text, mod, total) {
  const saveObject = {
    id: Date.now(),
    rollInfo: text,
    rollMod: mod,
    rollTotal: total
  }

  const rollObjList = rollObjectList();

  rollObjList.push(saveObject);
  localStorage.setItem('rollObject', JSON.stringify(rollObjList));
}

function rollObjectList() {
  const rollListString = localStorage.getItem('rollObject');
  let rollList = [];

  if (rollListString) {
      rollList = JSON.parse(rollListString);
  }

  return rollList;
}

function updateHistory() {
  const history = rollObjectList();

  document.querySelector('#rollHistory').innerHTML = '';

  for (var i = history.length-1; i >= 0; i--) {
    const historyText = document.createElement('div');
    historyText.classList.add('history-content');
    historyText.innerHTML = `You rolled ${history[i].rollInfo} ${history[i].rollMod} and got a ${history[i].rollTotal}.`;
    
    document.querySelector('#rollHistory').appendChild(historyText);
  }
}

function resetForm() {
  diceObjects = [];
  const dice = document.getElementsByClassName('diceInput');
  const modifier = document.getElementById('modifier');
  

  for (var i = 0; i < dice.length; i++) {
    dice[i].value = 0;
  }
  modifier.value = 0;
}

function clearHistory() {
  localStorage.clear();
  window.location.reload(false);
}

function removeNaturals() {
  const viewport = document.getElementById('rolled');
  if (viewport.className === 'nat20') {
    viewport.classList.remove('nat20');
  }
  if (viewport.className === 'nat1') {
    viewport.classList.remove('nat1');
  }
}