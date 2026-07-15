let nextButton = (document.querySelector('button').onclick = buttonLogic)

function buttonLogic() {
  if (qNumber === 0 || answers[qNumber - 1] !== undefined) {
    if (qNumber < Object.keys(questions).length) {
      goToNext()
    } else {
      showResults()
    }
  }
}

let qNumber = 0
let questions = {
  q0: {
    q: {
      text: 'What do you want to use this mug for?',
      result: '',
    },
    a0: {
      text: 'Large volume coffee (drip/filter coffee or large latte)',
      result: 'a tall, narrow body to retain heat while maximizing volume',
    },
    a1: {
      text: 'Medium volume coffee (long black or small flat white)',
      result:
        'a medium wide body to retain heat but still allow for some latte art or to show off the crema. A classic rounded cappucino style body',
    },
    a2: {
      text: 'Low volume coffee (espresso)',
      result: 'a short, wide body for a concentrated pour',
    },
    a3: {
      text: 'Large volume tea (green, black, etc)',
      result: 'a wide-mouthed body for faster cooling',
    },
    a4: {
      text: 'low volume tea (matcha)',
      result: 'a wide, shallow bowl shape',
    },
  },
  q1: {
    q: {
      text: 'How do you like to hold your mug?',
      result: '',
    },
    a0: {
      text: 'Delicate grip (two fingers in the handle)',
      result: 'a slim, delicate handle',
    },
    a1: {
      text: 'Stable grip (three fingers in the handle)',
      result: 'a medium curved handle',
    },
    a2: {
      text: 'Strong grip (four finger in the handle)',
      result: 'a large, wide handle',
    },
  },
}

let answers = {}

function goToNext() {
  document.getElementById('intro').innerHTML = ''
  //display question
  let currentQuestion = questions['q' + qNumber]
  let questionText = (document.getElementById('question').innerHTML =
    currentQuestion.q.text)

  //delete old answers
  document.querySelectorAll('.answerButton').forEach((btn) => btn.remove())
  //display answer
  let numberOfAnswers = Object.keys(currentQuestion).length - 1
  for (i = 0; i < numberOfAnswers; i++) {
    const button = document.createElement('button')
    button.textContent = currentQuestion['a' + i].text
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
  let answerNumber = e.target.id
  answers[qNumber - 1] = questions['q' + (qNumber - 1)][answerNumber].result
  e.target.classList.add('selected')
}

function showResults() {
  document.querySelectorAll('.nextButton').forEach((btn) => btn.remove())
  document.getElementById('question').innerHTML = 'Quiz Complete!'
  document.getElementById('quiz-container').style.display = 'none'
  document.getElementById('results-container').style.display = 'block'
  document.getElementById('volume-result').textContent = answers[0]
  document.getElementById('handle-result').textContent = answers[1]
}
