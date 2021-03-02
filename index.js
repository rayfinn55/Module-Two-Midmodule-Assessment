// S.M.A.R.T. goal: by noon I will have the 1st and 2nd cypress test completed. 
// I will be able to see the dice value displayed after the submit button is clicked.
// I will be able to see a dice string of user inputs.
document.addEventListener('DOMContentLoaded', () => {
    diceRoller()
    historySum()
})

const diceList = [
    { dice: "&#9856", value: 1 },
    { dice: "&#9857", value: 2 },
    { dice: "&#9858", value: 3 },
    { dice: "&#9859", value: 4 },
    { dice: "&#9860", value: 5 },
    { dice: "&#9861", value: 6 },
  ]

function diceRoller() {
    document.addEventListener("DOMContentLoaded", () => {
        let form = document.querySelector("form")
        form.addEventListener("submit", (event) => {
          event.preventDefault()
          console.log("You have submitted your form")
        })
      })

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
 function historySum() {

 }