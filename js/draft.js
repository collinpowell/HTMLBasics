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

let words = 'Size of board = ' + size
let wordz = "sldkjflsd sdkfsldkfslkdfs" + size
let wordp = `Name is collins = ${size}`

function boardClicked(){
  alert("Why Click the board")
}

console.log(words)
console.log(wordz)
console.log(wordp)

i++;

i = i+1

function render() {
  let boxes = "";

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      switch (board[i][j]) {
        case empty:
          boxes =
            boxes +
            `<div id=${"box-"+i + "," + j} class='box ${checkBoxColor(i, j)}'></div>`;
          break;
        case p1:
          boxes =
            boxes +
            `<div id=${"box-"+i + "," + j} class='box ${checkBoxColor(i, j)}'>
              <div class='p1' id=${i + "," + j} draggable="true"></div>
          </div>`;
          break;
        case p2:
          boxes =
            boxes +
            `<div id=${"box-"+i + "," + j} class='box ${checkBoxColor(i, j)}'>
          <div class='p2' id=${i + "," + j} draggable="true"></div></div>`;
          break;

        default:
          break;
      }

      let draftBoard = document.getElementsByClassName("board")[0]

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
    console.log(boxes)
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

console.log(document)

document.write("this is a done by js")

document.getElementsByTagName('h1')[0].innerText = "This was done by javascript"

console.log(document.getElementsByTagName('h1'))

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
