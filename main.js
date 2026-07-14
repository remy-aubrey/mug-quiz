let nextButton = (document.querySelector('button').onclick = function () {
  goToNext()
})

let qNumber = 1
let questions = {
  q1: {
    q: 'What do you want to use this mug for?',
    a1: 'Large volume coffee (drip/filter coffee or large latte)',
    a2: 'Medium volume coffee (long black or small flat white)',
    a3: 'Low volume coffee (espresso)',
    a4: 'Large volume tea (green, black, etc)',
    a5: 'low volume tea (matcha)',
  },
  q2: {
    q: 'How do you like to hold your mug?',
    a1: 'Delicate grip (two fingers in the handle)',
    a2: 'Stable grip (three fingers in the handle)',
    a3: 'Strong grip (four finger in the handle)',
  },
}
function goToNext() {
  //display question
  let currentQuestion = questions['q' + qNumber]
  let questionText = (document.getElementById('question').innerHTML =
    currentQuestion.q)

  qNumber++

  //display answer
  let numberOfAnswers = Object.keys(currentQuestion).length - 1
  for (i = 1; i <= numberOfAnswers; i++) {
    const button = document.createElement('button')
    button.textContent = currentQuestion['a' + i]
    button.className = 'answerButton'
    document.querySelector('.container').appendChild(button)
  }

  //record answer
}
