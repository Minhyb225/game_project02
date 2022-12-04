document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'white',
      img: 'images/white.png'
    },
    {
      name: 'tree',
      img: 'images/tree.png'
    },
    {
      name: 'tree',
      img: 'images/tree.png'
    },
    {
      name: 'tree',
      img: 'images/tree.png'
    },
    {
      name: 'tree',
      img: 'images/tree.png'
    },
    {
      name: 'tree',
      img: 'images/tree.png'
    },
    {
      name: 'tree',
      img: 'images/tree.png'
    },
    {
      name: 'white',
      img: 'images/white.png'
    },
    {
      name: 'tree',
      img: 'images/tree.png'
    },
    {
      name: 'white',
      img: 'images/white.png'
    },
    {
      name: 'white',
      img: 'images/white.png'
    },
    {
      name: 'white',
      img: 'images/white.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())
  console.log(cardArray[1].name)
  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#results')
  let cardsChosen = []
  let cardsCompair = []
  let lengthStop = 0

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', cardArray[i].img)
      card.setAttribute('id', i)
      if (cardArray[i].name === "white")
        {cardsCompair.push(i)
        }
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
    setTimeout(hide, 4000)
  }
  //check for matches
  function checkForMatch() {
    if (String(cardsChosen)==String(cardsCompair)) {
      const cardss = document.querySelectorAll('img')
      for (let i = 0; i < cardArray.length; i++) {
      if (cardArray[i].name === "tree")
        {cardss[i].setAttribute('src', 'images/tree.png')
        }
    }
     alert('You found a match')
    }
    else {
      //cards[optionOneId].setAttribute('src', 'images/blank.png')
      //cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    resultDisplay.textContent = 'Congratulations! You found them all!'
    cardsChosen = []
    //resultDisplay.textContent = cardsWon.length
  }
  convertChosen = []
  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('id')
    cardsChosen.push(cardId)
    this.setAttribute('src', 'images/tree.png')
    this.removeEventListener('click', flipCard)
    if (cardsChosen.length === cardsCompair.length) {
      cardsChosen.sort(function(a, b){return a - b})
      setTimeout(checkForMatch, 500)
    }
  }

  //create hide function
  function hide() {
    const cards = document.querySelectorAll('img')
    for (let i = 0; i < cardArray.length; i++) {
     if (cardArray[i].name === "tree")
        {cards[i].setAttribute('src', 'images/white.png')
        }
    }
  }

  createBoard()
})
