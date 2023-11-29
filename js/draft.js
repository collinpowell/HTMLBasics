// Output
const size = 8;
const p1 = "A";
const p2 = "B";
// const sp1 = "AA";
// const sp2 = "BB";
const empty = " ";

let number = 16;
var number2 = 25;

var board = new Array();

for (i = 0; i < size; i++) {
  board[i] = new Array();
  for (j = 0; j < size; j++) {
    board[i][j] = 0;
  }
}

function initBoard() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i % 2 > 0) {
        if (j % 2 > 0) {
          board[i][j] = empty;
        } else {
          if (i <= 2) {
            board[i][j] = p1;
          } else {
            board[i][j] = p2;
          }
        }
      } else {
        if (j % 2 > 0) {
          if (i <= 2) {
            board[i][j] = p1;
          } else {
            board[i][j] = p2;
          }
        } else {
          board[i][j] = empty;
        }
      }
      if (i == 3 || i == 4) {
        board[i][j] = empty;
      }
    }
  }
}

initBoard();
//alert("I created a JS file")
console.log(document.getElementsByTagName("h1")[0]);

console.log("This is a console message");

document.getElementsByTagName("h1")[0].innerText = "This was done by JS";

let words = "Size of board = " + size;
let wordz = "sldkjflsd sdkfsldkfslkdfs" + size;
let wordp = `Name is collins = ${size}`;

function boardClicked() {
  // alert("Why Click the board");
}

console.log(words);
console.log(wordz);
console.log(wordp);

i++;

i = i + 1;

function render() {
  let boxes = "";

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      switch (board[i][j]) {
        case empty:
          boxes =
            boxes +
            `<div id=${"box-" + i + "," + j} class='box ${checkBoxColor(
              i,
              j
            )}'></div>`;
          break;
        case p1:
          boxes =
            boxes +
            `<div id=${"box-" + i + "," + j} class='box ${checkBoxColor(i, j)}'>
              <div class='p1' id=${i + "," + j} draggable="true"></div>
          </div>`;
          break;
        case p2:
          boxes =
            boxes +
            `<div id=${"box-" + i + "," + j} class='box ${checkBoxColor(i, j)}'>
          <div class='p2' id=${i + "," + j} draggable="true"></div></div>`;
          break;

        default:
          break;
      }

      let draftBoard = document.getElementsByClassName("board")[0];

      draftBoard.innerHTML = boxes;

      // const dragElement = document.getElementById(`${i + "," + j}`);
      // const dropZone = document.getElementById(`${"box-"+i + "," + j}`);

      // dragElement?.addEventListener("dragstart", (event) => {
      //   event.dataTransfer.setData("text/plain", dragElement.id);
      //   console.log(event)

      // });

      // dropZone?.addEventListener("dragover", (event) => {
      //   event.preventDefault();
      // });

      // dropZone?.addEventListener("drop", (event) => {
      //   event.preventDefault();
      //   const data = event.dataTransfer.getData("text/plain");
      //   const draggedElement = document.getElementById(data);
      //   dropZone.innerHTML = draggedElement;

      //   console.log(data,dragElement,dropZone)
      // });
    }
    console.log(boxes);
  }
}

function checkBoxColor(i, j) {
  if (i % 2 > 0) {
    if (j % 2 > 0) {
      return "c2";
    } else {
      return "c1";
    }
  } else {
    if (j % 2 > 0) {
      return "c1";
    } else {
      return "c2";
    }
  }
}

render();

function move(counter) {
  // int pr;
  // int pc;
  // int dr;
  // int dc;
  // printf("Input Piece Row: ");
  // scanf("%d", &pr);
  // printf("Input Piece Column: ");
  // scanf("%d", &pc);
  // printf("Input Destination Row: ");
  // scanf("%d", &dr);
  // printf("Input Destination Column: ");
  // scanf("%d", &dc);
  // if (counter % 2 > 0)
  // {
  //     if (board[pr][pc] == p1)
  //     {
  //         board[pr][pc] = empty;
  //         board[dr][dc] = p1;
  //     }
  //     else
  //     {
  //         printf("Invalid Move");
  //         return 0;
  //     }
  // }
  // else
  // {
  //     if (board[pr][pc] == p2)
  //     {
  //         board[pr][pc] = empty;
  //         board[dr][dc] = p2;
  //     }
  //     else
  //     {
  //         printf("Invalid Move");
  //         return 0;
  //     }
  // }
  // return 1;
}

console.log(document);

document.write("this is a done by js");

document.getElementsByTagName("h1")[0].innerText =
  "This was done by javascript";

console.log(document.getElementsByTagName("h1"));

/**
 *
 * innerHTML && document.write
 */

/**
 *
 * This is
 * a
 * multi-line comment
 */

// This is a single line comment

function myDisplayer(sum) {
  document.getElementById("demo").innerHTML = sum;
}

function myCalculator(num1, num2, callBack) {
  let sum = num1 + num2;
  callBack(sum);
}

myCalculator(15, 5, myDisplayer);

var numbers = [3, 6, 7, 2, 1, 24, 5, 56];

function max(numbers, callback) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (callback(max, numbers[i])) {
      max = numbers[i];
    }
  }
  return max;
}

let maxNum = max(numbers, (x, y) => x < y);

function compare(x, y) {
  return x < y;
}

myDisplayer(maxNum);

function sendAlert() {
  //alert("THis is an asynchronous callback");
}

setTimeout(() => {
  //alert("THis is an asynchronous callback");
}, 5000);

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)
  myResolve(); // when successful
  myReject(); // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  }
);

async function callApi() {
  return "Hello";
}

console.log(callApi());

callApi().then((res) => {
  console.log(res);
});

async function getUsers() {
  let response = await fetch("https://dummyjson.com/users");
  let res = await response.json();
  let users = res.users;
  let cards = "";

  for (let i = 0; i < users.length; i++) {
    user = users[i];
    console.log(user);

    cards =
      cards +
      `<div style="box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.06);">
    <img src="${user.image}" alt="img">
</div>`;
  }

  document.getElementById("users").innerHTML = cards;
}

getUsers();

console.log("After Get Users");
