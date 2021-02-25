const diceList = [
    { dice: "&#9856", value: 1 },
    { dice: "&#9857", value: 2 },
    { dice: "&#9858", value: 3 },
    { dice: "&#9859", value: 4 },
    { dice: "&#9860", value: 5 },
    { dice: "&#9861", value: 6 },
  ];

function diceRoller() {
    const roll = document.getElementById('dice-input')
    const rollInput = roll.value 
    output = document.getElementById('sum-para')
    for(i=1; i< rollInput.length; i++) {
        roll += sum
        const historyList = document.createElement('li')
        historyList.textContent += rollInput
        output.appendChild(historyList)
    }


}


}