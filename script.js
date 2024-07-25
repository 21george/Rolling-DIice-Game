"use strict";
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
// const storHi = document.querySelector("#stor--history");
// const lostHi = document.querySelector("#lost--History");

const btnDice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// debugger;
let scores, currentScore, activePlayer, playing, storHistory, lostHistory;
const int = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  // setting player to Boolean (true or false) declaer if currenting palying 
  playing = true;

  //  setting scores to default (0) and current player scores  default (0)
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  btnDice.classList.add("hidden");
  player0El.classList.remove("player--Winner");
  player1El.classList.remove("player--Winner");
  player0El.classList.add("player--active");
  player0El.classList.remove("player--active");
};
int(); //callback function

//switching player and setting the default scores
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// debugger;
// hiding the dice Element
btnDice.classList.add("hidden");
// btnRoll.classList.add('hidden');
//making the function RollDice
btnRoll.addEventListener("click", function () {
  if (playing) {
    // Generate random dice (random Math)
    var rndDice = Math.trunc(Math.random() * 6) + 1;
    //  now display Element (dice)
    btnDice.classList.remove("hidden");
    btnDice.src = "dice-" + rndDice + ".png";

    // chick for dice number
    if (rndDice !== 1) {
      currentScore += rndDice;
      storHistory += currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //   here import player (switch player)
      switchPlayer();
    }
  }
});

// holding player
btnHold.addEventListener("click", function () {
  if (playing) {
    // adding  player current score active
    scores[activePlayer] += currentScore;
    // storHistory scores
    // score[1] = score[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // stor player score

    // check for Player score
    if (scores[activePlayer] >= 50) {
      // stopping player for  playing after reaching the given number score
      playing = "";
      // diceEl.classList.add("hidden");
      document
        .querySelector(".player--${activePlayer}")
        .classList.add("player--winner");
      document
        .querySelector(".player--${activePlayer}")
        .classList.remove("player--winner");
    } else {
      // switch
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", int); //callBack function call the (int and btnNew.addEventListener);

// localStorage

// function storHistory(event) {
//   event.preventDefault();
//   const value = currentScore.value;
//   const id = new Date().getTime().toString();
//   if (value !=  "" ) {
//     const element = document.getElementsByClassName(".currentScore");
//     let attr = document.createAttribute("data-id");
//     attr.value = id;
//     element.setAttribute(attr);
//     element.classList.add("stor--history");
//     element.innerHTML = ` <div class="History">
//     <p class="stor--history">History</p>
//     <p class="stor--history" id="stor--history">0</p>
//   </div>`;
//   }
// }

// combine two arrays
// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence = ['learning', ...fragment,'is', 'fun'];
//   return sentence;
// }
// console.log(spreadOut());

//adding element to an array
// function copyMachine(arr, num, Arr) {
//   let newArr = [];
//   while (num >= 1) {
//     newArr.push([...arr]);
//     num--;
//   }
//   return newArr;
// }
// console.log(copyMachine([true, false, true], 2));

// function quickCheck(arr, elem) {
//   // Only change code below this line
//   //  return quickCheck.indexOf(arr,elem);
//   return arr.indexOf(elem) != +1;
//   // Only change code above this line
// }
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this linefor (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++ ){
//     if (arr[j].indexOf(elem) == -1) {
//       //Checks every parameter for the element and if is NOT there continues the code
//       newArr.push(arr[j]); //Inserts the element of the array in the new filtered array
//     }
//   }
//     return newArr;
// }
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// Array seting equal to an Array. Modify , using any combination of SVGStringList,number,and Boolean for data
// let myNestedArray = [
//   // Only change code below this line
//   'level 1',                   /* myNestedArray[0]             */
//   ['level 2'],	               /* myNestedArray[1][0]          */
//   [['level 3','deep']],	       /* myNestedArray[2][0][0]       */
//   [[['level 4','deeper']]],    /* myNestedArray[3][0][0][0]    */
//   [[[['level 5','deepest']]]]  /* myNestedArray[4][0][0][0][0] */
//   // Only change code above this line
// ];
// console.log(myNestedArray);

// const openOrSenior = data => {
//   var getOpenOrSenior = [];
//  for(let i = 0; i < data.length; i++) {
//    if(data[i][0]>=55&&data[i][1]>7){
//     getOpenOrSenior.push("Senior");
//    }else{
//     getOpenOrSenior.push("Open");
//    }
//  }
//  return getOpenOrSenior;
// }

// const openOrSenior = (data) => data.map(([age, handicap]) => (age >= 55) && (handicap > 7) ? 'senior' : 'open');

// const openOrSenior = (members) => members.map(([age, handicap]) => (age >= 55) && (handicap > 7) ? 'Senior' : 'Open');

// function openOrSenior(data){
//   let result = [];
//   data.forEach(function(member){
//     if(member[0] >= 55 && member[1] > 7 ){
//        result.push("Senior");
//     }else{
//        result.push("Open");
//     }

//   })
//   return result;
// }

// function openOrSenior(data){
//   return data.map((member) => {
//     if(member[0] >= 55 && member[1] > 7){
//       return "Senior";
//     }
//     return "Open"
//   });
// }
// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior']);

// function getSum(a, b) {
//   let newA = Math.abs(a + b) * (a - b);
//   for (var i = 0; i < a.length; i++) {
//     if (a[0] >= 0 && a(b) == -1) {
//       newA.push(a[i]);
//     }
//     return newA;
//   }
//   return newA;
// }
// console.log((getSum(0, 1), 1));

// function getSum(a,b){
//   let min = Math.min(a,b);
//    let max = Math.max(a,b);
//    return (max - min + 1) * (min + max) / 2;
//   // return (a + b) * (Math.abs(a - b) + 1) / 2;
// }
// console.log((getSum(0, -1), -1));


// const getCount = (str) => {
//   // debugger; 
//   let getCount = 0;
//  for(let i = 0; i < str.length; i++){ 
//    if(getCount[i] == 1 && getCount[1] > 5){
//       getCount++;
//    }
//    return getCount;
//  }
//  return getCount;
// }
// console.log(getCount("abracadabra"), 5);

//  searching for match math 
// function getCount(str) {
//   var vowelsCount = 0;
//   for(let indexedDB in str){
//     switch (str[indexedDB]) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     vowelsCount++;
//     break;
//     }   
//   }
//   return vowelsCount;
// }

function comp(a, b) {
  function sortNumber(n1, n2) {
      return n1 - n2;
  }
  if (a === [] || b === [] || a === {} || b === {} || a === null || b === null) {
      return false
  } else {
      a = a.sort(sortNumber)
      b = b.sort(sortNumber)
  }
  for (let i = 0; i < a.length; i++) {
      for (let i = 0; i < b.length; i++) {
          if (Math.pow(a[i], 2) === b[i]) {
              return true
          } else {
              return false
          }

      }
  }
}
console.log(comp(a, a), true);