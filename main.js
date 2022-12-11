function runMinigame() {
//document.addEventListener('DOMContentLoaded', () => {
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
      let card = document.createElement('img')
      card.setAttribute('src', cardArray[i].img)
      card.setAttribute('id', i)
      if (cardArray[i].name === "white")
        {cardsCompair.push(i)
        }
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
    setTimeout(hide, 3000)
  }
  //check for matches
  function checkForMatch() {
    if (String(cardsChosen)==String(cardsCompair)) {
      let cardss = document.querySelectorAll('img')
      for (let i = 0; i < cardArray.length; i++) {
        if (cardArray[i].name === "tree") {
            cardss[i].setAttribute('src', 'images/tree.png');
            alert('You found a match')
            break
        }

      }
    }
    resultDisplay.textContent = 'Sorry, try next time'
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
    let cards = document.querySelectorAll('img')
    for (let i = 0; i < cardArray.length; i++) {
     if (cardArray[i].name === "tree")
        {cards[i].setAttribute('src', 'images/white.png')
        }
    }
  }

  createBoard()
//})
};
/////////


async function getData(cityId){
    try {
        var response = await fetch('http://127.0.0.1:5001/'+cityId);
        var data = await response.json();
        return data
    } catch (error) {
        console.log(error.message);
    } finally {
    }

};




function weatherData(a) {
  //console.log(a); // "Some User token"
  let temp = JSON.parse(JSON.stringify(a));
  let city = temp['name'];
  //var description = temp['weather'][0]['description'];
  //var icon = "http://openweathermap.org/img/wn/" + temp['weather'][0]['icon'] + ".png";
  var temper = Math.round(temp['main']['temp'] - 273.15);  // in F
  //var humid = temp['main']['humidity'];
  //var windSpeed = temp['wind']['speed'];
  //console.log(temp['weather'][0]['icon']);
  //document.getElementById(b).innerHTML += "<img src="+icon+" alt=''></img> <br>";
  //document.getElementById(b).innerHTML += city+"<br>";
  //document.getElementById(b).innerHTML += description+"<br>";
  //document.querySelector('.temps').innerHTML += "Hello World!" = "T: " + temper + "°C";
  document.getElementById("nextAirport Name").innerHTML = city;
  document.getElementById("nextAirport temp").innerHTML = temper;
  //document.getElementById(b).innerHTML += "H: "+humid+ "%";
  //alert(temper)
}



///////////////

/*
let co2Consumed = 0
let disConsumed = 0
function maingame() {
  let points = Math.floor(Math.random() * 6) + 3);
    for (let i = 0; i < points; i++) {
      alert('Choose another airport')
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
*/

async function getAirportPosition(icao) {
    try {
        const response = await fetch('http://127.0.0.1:5001/airport/' + icao);    // starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function// create position array for leaflet library
        console.log(jsonData.ICAO, jsonData.Name, jsonData.Lat, jsonData.Long);     // log the result to the console

    } catch (error) {
        console.log(error.message);
    } finally {                                         // finally = this is executed anyway, whether the execution was successful or not
        return jsonData.Lat, jsonData.Long;
    }
};

async function getAirportDistance(icao_start, icao_end) {
    let jsonData;
    try {
        const response = await fetch('http://127.0.0.1:5001/airportdistance/' + icao_start + '/' + icao_end);    // starting data download, fetch returns a promise which contains an object of type 'response'
        jsonData = await response.json();          // http://127.0.0.1:5001/airportdistance/EFHA/EFKT  g the data retrieved from the response object using the json() function// log the result to the console
        let x = jsonData.dist;
    } catch (error) {
        console.log(error.message);
    } finally {                                         // finally = this is executed anyway, whether the execution was successful or not
        return document.getElementById("distance").innerHTML = jsonData.dist;
    }
    console.log(x);
};
function checkDistance() {
    if (list1.length == 2) {
        getAirportDistance(list1[0], list1[1]);
        list1 = []
    }
    else {
       alert('Choose another airport')
    }

}


let icao = "";
list1 = [];
/*
function myFunction_Helsinki {
    var city = getData(658225)
    city.then((value) => weatherData(value));
    icao = 'EFHK';
    list1.push(icao);
    checkDistance()
};
*/
function myFunction_Mariehamn() {
    var city = getData(3041732)
    city.then((value) => weatherData(value));
    icao = 'EFMA';
    list1.push(icao);
    checkDistance()
};
function myFunction_Turku() {
    var city = getData(633679)
    city.then((value) => weatherData(value));
    icao = 'EFTU';
    list1.push(icao);
    checkDistance()
};
function myFunction_Utti() {
    var city = getData(633259)
    city.then((value) => weatherData(value));
    icao = 'EFUT';
    list1.push(icao);
    checkDistance()
};
function myFunction_Pori() {
    var city = getData(640999)
    city.then((value) => weatherData(value));
    icao = 'EFPO';
    list1.push(icao);
    checkDistance()
};
function myFunction_Tampere() {
    city = getData(634963)
    city.then((value) => weatherData(value));
    icao = 'EFTP';
    list1.push(icao);
    checkDistance()
};

function myFunction_Savonlvarinna() {
    var city = getData(637292)
    city.then((value) => weatherData(value));
    icao = 'EFSA';
    list1.push(icao);
    checkDistance()
};

function myFunction_Halli() {
    var city = getData(650182)
    city.then((value) => weatherData(value));
    icao = 'EFHA';
    list1.push(icao);
    checkDistance()
};
function myFunction_Jyväskylä() {
    var city = getData(655194)
    city.then((value) => weatherData(value));
    icao = 'EFJY';
    list1.push(icao);
    checkDistance()
};
function myFunction_Vaasa() {
    var city = getData(632978)
    city.then((value) => weatherData(value));
    icao = 'EFVA';
    list1.push(icao);
    checkDistance()
};
function myFunction_Kuopio() {
    var city = getData(650224)
    city.then((value) => weatherData(value));
    icao = 'EFKU';
    list1.push(icao);
    checkDistance()
};
function myFunction_Joensuu() {
    var city = getData(655808)
    city.then((value) => weatherData(value));
    icao = 'EFJO';
    list1.push(icao);
    checkDistance()
};
function myFunction_Kokkola() {
    var city = getData(651943)
        city.then((value) => weatherData(value));
        icao = 'EFKK';
        list1.push(icao);
        checkDistance()
};

function myFunction_Kajaani() {
    var city = getData(654899)
    city.then((value) => weatherData(value));
    icao = 'EFKI';
    list1.push(icao);
    checkDistance()
};
function myFunction_Oulu() {
    var city = getData(643492)
    city.then((value) => weatherData(value));
    icao = 'EFOU';
    list1.push(icao);
    checkDistance()
};
function myFunction_Kemi() {
        city = getData(653281)
        city.then((value) => weatherData(value));
        icao = 'EFKE';
        list1.push(icao);
        checkDistance()
};

function myFunction_Kuusamvaro() {
    var city = getData(649924)
    city.then((value) => weatherData(value));
    icao = 'EFKS';
    list1.push(icao);
    checkDistance()
};
function myFunction_Rovaniemi() {
    var city = getData(638936)
    city.then((value) => weatherData(value));
    icao = 'EFRO';
    list1.push(icao);
    checkDistance()
};

function myFunction_Enontekiö() {
    var city = getData(660229)
    city.then((value) => weatherData(value));
    icao = 'EFET';
    list1.push(icao);
    checkDistance()
};

function myFunction_Kit() {
  var city = getData(652590);
  city.then((value) => weatherData(value));
  icao = 'EFKT';
  list1.push(icao);
  checkDistance()
};
function myFunction_Iva() {
  var city = getData(656220);
  city.then((value) => weatherData(value));
  icao = 'EFHA';
  list1.push(icao);
  checkDistance();
  runMinigame()
};
