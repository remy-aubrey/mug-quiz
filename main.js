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
    q: 'What do you want to use this mug for?',
    a0: {
      text: 'Large volume coffee (drip/filter coffee or large latte)',
      result: 'a tall, narrow body to retain heat while maximizing volume',
      image: 'images/largvolume.jpg',
    },
    a1: {
      text: 'Medium volume coffee (long black or small flat white)',
      result:
        'a medium wide body to retain heat but still allow for some latte art or to show off the crema. A classic cappucino style body',
      image: 'images/medvolume.jpg',
    },
    a2: {
      text: 'Low volume coffee (espresso)',
      result:
        'a short, narrow body to retain heat, hold a double shot, and allow some room for a comfortable handle',
      image: 'images/smlvolume.jpg',
    },
    a3: {
      text: 'Large volume tea (green, black, etc)',
      result:
        'a wide-mouthed body for faster cooling and maximum volume, with a stable base to prevent tipping',
      image: 'images/lrgwide.jpg',
    },
    a4: {
      text: 'low volume tea (matcha)',
      result:
        'a small but wide, shallow bowl shape to allow the aroma to permeate',
      image: 'images/bowl.jpg',
    },
  },
  q1: {
    q: 'How would you describe your mental health?',
    a0: {
      text: 'No problemos, I am free as a butterfly',
      result:
        "a carefree grip handle. A handle that fits only one finger, letting the remaining fingers act as support (which you dont need). This is also commonly called the psychopath handle. It is neither stable nor comfortable, but you dont care. You live life easy breezy and hold your cups with one finger. If it makes other people worried you are going to spill, well that's a bonus.",
      image: 'images/1finger.jpg',
    },
    a1: {
      text: 'Some days are good, some days I stare into the void and question all my life choices',
      result:
        "a delicate grip handle. A handle that fits 2 fingers, allowing for decent stability but still let's you look relaxed even when you aren't. This handle simultaneously screams 'I am hanging on by a thread' and 'I am hashtag blessed'. ",
      image: 'images/2finger.jpg',
    },
    a2: {
      text: 'My therapist says I over intellectualize my feelings',
      result:
        "a stable grip handle. A handle that fits three fingers, allowing for maximum stability while minimizing effort: the pinky finger is there to counterbalance and prevent rotation. This is an engineers handle. It is supremely functional, if not very in touch with it's feelings",
      image: 'images/3finger.jpg',
    },
    a3: {
      text: 'I am always on the verge of having an aneurysm',
      result:
        'a strong grip handle. A handle that fits four fingers will allow you to squeeze the absolute shit out of that mug. It wont reduce your anxiety or anger issues, but it will make it less likely that you drop it. Imagine taking a full fisted swig of black coffee while telling Susan that you needed those reports yesterday.',
      image: 'images/4finger.jpg',
    },
  },
  q2: {
    q: 'What sort of birthday cake do you want?',
    a0: {
      text: 'A classic modern look. Just some basic 2 layer cake without too much frosting',
      result:
        'Blue Grotto. This glaze is a crowd pleaser. Everybody likes blue. How could you go wrong? It has an inoffensive color, not too bright, not too shiny. This is a glaze that has subtle beauty without drawing too much attention.',
      image: 'images/grotto.jpg',
    },
    a1: {
      text: 'Ice cream cake of course!',
      result:
        'Opal Lustre. This glaze is drippy and has lovely movement and changing colors. It is non-traditional while still looking classy.',
      image: 'images/opal.jpg',
    },
    a2: {
      text: 'Fuck me up with sprinkles and frosting bro. I want it to look like a unicorn made this in a lolly factory',
      result:
        'Coral Speckle. You are fun and you deserve a fun glaze. This glaze is a party and is for people who are bold and love life. Dont forget to put it on your whimsical cat butt coasters next to your leggo flower arrangement',
      image: 'images/coral.jpg',
    },
    a3: {
      text: "I like a nice organic carrot cake. But made with no sugar or processed ingredients. And it's actually just carrots",
      result:
        "Beetlewing. This glaze has lovely earth tones and vibrant greens. Perfect for someone who loves nature. It's a glaze for someone who composts. It's a notoriously difficult glaze to work with, about as difficult as cooking for your gluten free vegan potluck.",
      image: 'images/beetle.jpg',
    },
    a4: {
      text: "As long as every element is made of chocolate, I don't care",
      result:
        'Iron. Rich and dark. This is a beautiful glaze for those who appreciate the little things in life',
      image: 'images/iron.jpg',
    },
  },
}

let answers = {}

function goToNext() {
  document.querySelector('.nextButton').innerHTML = 'Next'
  document.getElementById('intro1').innerHTML = ''
  document.getElementById('intro2').innerHTML = ''
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
  answers[qNumber - 1] = {
    result: questions['q' + (qNumber - 1)][answerNumber].result,
    image: questions['q' + (qNumber - 1)][answerNumber].image,
  }
  e.target.classList.add('selected')
}

let volumeImages = ['']

function showResults() {
  document.querySelectorAll('.nextButton').forEach((btn) => btn.remove())
  document.getElementById('question').innerHTML = 'Quiz Complete!'
  document.getElementById('quiz-container').style.display = 'none'
  document.getElementById('results-container').style.display = 'block'
  document.getElementById('volume-result').textContent = answers[0].result
  document.getElementById('volume-img').src = answers[0].image
  document.getElementById('handle-result').textContent = answers[1].result
  document.getElementById('handle-img').src = answers[1].image
  document.getElementById('glaze-result').textContent = answers[2].result
  document.getElementById('glaze-img').src = answers[2].image
}
