let nextButton = (document.querySelector('button').onclick = goToNext)

let qNumber = 0
let questions = {
  q0: {
    q: 'What do you want to use this mug for?',
    a0: 'Large volume coffee (drip/filter coffee or large latte)',
    a1: 'Medium volume coffee (long black or small flat white)',
    a2: 'Low volume coffee (espresso)',
    a3: 'Large volume tea (green, black, etc)',
    a4: 'low volume tea (matcha)',
  },
  q1: {
    q: 'How do you like to hold your mug?',
    a0: 'Delicate grip (two fingers in the handle)',
    a1: 'Stable grip (three fingers in the handle)',
    a2: 'Strong grip (four finger in the handle)',
  },
}

let answers = {}

function goToNext() {
  document.getElementById('intro').innerHTML = ''
  //display question
  let currentQuestion = questions['q' + qNumber]
  let questionText = (document.getElementById('question').innerHTML =
    currentQuestion.q)

  //delete old answers
  document.querySelectorAll('.answerButton').forEach((btn) => btn.remove())
  //display answer
  let numberOfAnswers = Object.keys(currentQuestion).length - 1
  for (i = 0; i < numberOfAnswers; i++) {
    const button = document.createElement('button')
    button.textContent = currentQuestion['a' + i]
    button.className = 'answerButton'
    button.id = 'a' + i
    document.querySelector('.container').appendChild(button)
    //save answers
    button.onclick = recordAnswer
  }

  qNumber++
}

//record answer
function recordAnswer(e) {
  document
    .querySelectorAll('.answerButton.selected')
    .forEach((btn) => btn.classList.remove('selected'))
  answers[qNumber] = e.target.id
  e.target.classList.add('selected')
}
