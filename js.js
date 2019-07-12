var square1 = document.querySelector(".square1")
var square2 = document.querySelector(".square2")
var square3 = document.querySelector(".square3")
var square4 = document.querySelector(".square4")
var square5 = document.querySelector(".square5")
var square6 = document.querySelector(".square6")
var square7 = document.querySelector(".square7")
var square8 = document.querySelector(".square8")
var square9 = document.querySelector(".square9")
var board = document.querySelector(".board")
var boarddivs = document.querySelectorAll(".board, div")
var squares = document.querySelectorAll('main div')
var red = document.querySelector(".red")
var moneyX = document.querySelector(".moneyX")
var moneyO = document.querySelector(".moneyO")


// VARIABLES
var previousSquareClicked = ''
var playerTurn = true
var i = 'x'
var CoinsX = 0
var Coins0 = 0
var solutions = [
    [i,i,i, // solution 1
    'I','I','I',
    'I','I','I'], 
    ['I','I','I', // solution 2
    i,i,i,
    'I','I','I'],
    ['I','I','I', // solution 3
    'I','I','I',
    i,i,i],
    [i,'I','I', // solution 4
    'I',i,'I',
    'I','I',i],
    ['I','I',i, // solution 5
    'I',i,'I',
    i,'I','I'],
    [i,'I','I', // solution 6
    i,'I','I',
    i,'I','I'],
    ['I',i,'I', // solution 7
    'I',i,'I',
    'I',i,'I'],
    ['I','I',i, // solution 8
    'I','I',i,
    'I','I',i]
]
var boardArray = ['','','',
                '','','',
                '','','']
                

// FUNCTIONS

var XorO = function () {
    if (playerTurn) {
        i = 'x'
    } else {
        i = 'o'
    }
}

var generateCoin = function() { 
    var coinChance = Math.floor((Math.random() * 3) + 1)
 if (coinChance === 3) {
    var coinLocation = Math.floor((Math.random() * 9) + 1)
    var randomSquare = document.querySelector('.square' + coinLocation)
        if (randomSquare.textContent === 'x'){
            return
        } else if (randomSquare.textContent === 'o') {
            return
        } else {
        randomSquare.classList.add("coin")
        }
    }
}

var removeMoveandTake = function() {
    square1.classList.remove('chessMove', 'chessTake');
    square2.classList.remove('chessMove', 'chessTake');
    square3.classList.remove('chessMove', 'chessTake');
    square4.classList.remove('chessMove', 'chessTake');
    square5.classList.remove('chessMove', 'chessTake');
    square6.classList.remove('chessMove', 'chessTake');
    square7.classList.remove('chessMove', 'chessTake');
    square8.classList.remove('chessMove', 'chessTake');
    square9.classList.remove('chessMove', 'chessTake');
}

var takePeice = function()  {
    if (event.target.classList.contains('chessTake')){
    previousSquareClicked.textContent = ''
    boardArray[Number(previousSquareClicked.dataset.cell)] = ''
    event.target.textContent = i
    solutions.forEach(compare)
    generateCoin()
    playerTurn = !playerTurn
    removeMoveandTake()
    }
}

var movePeice = function()  {
    if (event.target.classList.contains('chessMove')){
        //pick up coin
        if (event.target.classList.contains('coin')){
            event.target.classList.remove('coin')
            if (i === 'x') {
                moneyX.textContent = Number(moneyX.textContent) + 1
            }
            if (i === 'o') {
                moneyO.textContent = Number(moneyO.textContent) + 1
            }
        }
    event.target.textContent = i
    previousSquareClicked.textContent = ''
    boardArray[Number(previousSquareClicked.dataset.cell)] = ''
    event.target.textContent = i
    solutions.forEach(compare)
    generateCoin()
    playerTurn = !playerTurn
    removeMoveandTake()
    
    }
}

// check winner
var compare = function(arr){
    var counter = 0
    arr.forEach(function(cell, index) {
        if (cell !== 'I' && boardArray[index] === i){
            counter++
            if (counter === 3){
                console.log('winner')
            }
        }
    })
}


var newPiece = function() {
    if (event.target.textContent === '') {
        if (event.target.classList.contains('coin')) {
            return
        } else if  (event.target.classList.contains('chessMove')) {
            return
        } else if (event.target.classList.contains('chessTake')) {
            return
        } else if (i === 'x' && Number(moneyX.textContent) === 0) {
            return
        } else if (i === 'o' && Number(moneyO.textContent) === 0) {
            return
        } else {
            if (i === 'o') {
                moneyO.textContent = moneyO.textContent - 1
            }
            if (i === 'x') {
                moneyX.textContent = moneyX.textContent - 1
            }
            event.target.textContent = i
            solutions.forEach(compare)
            generateCoin()
            playerTurn = !playerTurn
            removeMoveandTake()
        }
    } else if (event.target.classList.contains('chessTake')) {
        return
    } else {
        previousSquareClicked = event.target
    }
}







var handleClick = function(event) {
    XorO()
    clickOccupied()
    // may be the problem with board array
    boardArray[Number(event.target.dataset.cell)] = i
    newPiece()
    takePeice()
    movePeice()
}









var clickOccupied = function() {
    // x on square1
    if (event.target === square1 && square1.textContent === 'x' && i === 'x' && square2.textContent === "") {
        square2.classList.toggle('chessMove');
    }
    if (event.target === square1 && square1.textContent === 'x' && i === 'x' && square4.textContent === "") {
        square4.classList.toggle('chessMove');
    }
    // x on square1 takes
    if (event.target === square1 && square1.textContent === 'x' && i === 'x' && square5.textContent === 'o') {
        square5.classList.toggle('chessTake');
    }
    // x on square2
    if (event.target === square2 && square2.textContent === 'x' && i === 'x' && square1.textContent === "") {
        square1.classList.toggle('chessMove');
    }
    if (event.target === square2 && square2.textContent === 'x' && i === 'x' && square3.textContent === "") {
        square3.classList.toggle('chessMove');
    }
    if (event.target === square2 && square2.textContent === 'x' && i === 'x' && square5.textContent === "") {
        square5.classList.toggle('chessMove');
    }
    // x on square2 takes
    if (event.target === square2 && square2.textContent === 'x' && i === 'x' && square4.textContent === 'o') {
        square4.classList.toggle('chessTake');
    }
    if (event.target === square2 && square2.textContent === 'x' && i === 'x' && square6.textContent === 'o') {
        square6.classList.toggle('chessTake');
    }
    // x on square3
    if (event.target === square3 && square3.textContent === 'x' && i === 'x' && square2.textContent === "") {
        square2.classList.toggle('chessMove');
    }
    if (event.target === square3 && square3.textContent === 'x' && i === 'x' && square6.textContent === "") {
        square6.classList.toggle('chessMove');
    }
    // x on square3 takes
    if (event.target === square3 && square3.textContent === 'x' && i === 'x' && square5.textContent === 'o') {
        square5.classList.toggle('chessTake');
    }
    // x on square4
    if (event.target === square4 && square4.textContent === 'x' && i === 'x' && square5.textContent === "") {
        square5.classList.toggle('chessMove');
    }
    if (event.target === square4 && square4.textContent === 'x' && i === 'x' && square1.textContent === "") {
        square1.classList.toggle('chessMove');
    }
    if (event.target === square4 && square4.textContent === 'x' && i === 'x' && square7.textContent === "") {
        square7.classList.toggle('chessMove');
    }
    // x on square4 takes
    if (event.target === square4 && square4.textContent === 'x' && i === 'x' && square2.textContent === 'o') {
        square2.classList.toggle('chessTake');
    }
    if (event.target === square4 && square4.textContent === 'x' && i === 'x' && square8.textContent === 'o') {
        square8.classList.toggle('chessTake');
    }
    // x on square5
    if (event.target === square5 && square5.textContent === 'x' && i === 'x' && square2.textContent === "") {
        square2.classList.toggle('chessMove');
    }
    if (event.target === square5 && square5.textContent === 'x' && i === 'x' && square4.textContent === "") {
        square4.classList.toggle('chessMove');
    }
    if (event.target === square5 && square5.textContent === 'x' && i === 'x' && square6.textContent === "") {
        square6.classList.toggle('chessMove');
    }
    if (event.target === square5 && square5.textContent === 'x' && i === 'x' && square8.textContent === "") {
        square8.classList.toggle('chessMove');
    }
    // x on square5 takes
    if (event.target === square5 && square5.textContent === 'x' && i === 'x' && square1.textContent === 'o') {
        square1.classList.toggle('chessTake');
    }
    if (event.target === square5 && square5.textContent === 'x' && i === 'x' && square3.textContent === 'o') {
        square3.classList.toggle('chessTake');
    }
    if (event.target === square5 && square5.textContent === 'x' && i === 'x' && square7.textContent === 'o') {
        square7.classList.toggle('chessTake');
    }
    if (event.target === square5 && square5.textContent === 'x' && i === 'x' && square9.textContent === 'o') {
        square9.classList.toggle('chessTake');
    }
    // x on square6
    if (event.target === square6 && square6.textContent === 'x' && i === 'x' && square5.textContent === "") {
        square5.classList.toggle('chessMove');
    }
    if (event.target === square6 && square6.textContent === 'x' && i === 'x' && square3.textContent === "") {
        square3.classList.toggle('chessMove');
    }
    if (event.target === square6 && square6.textContent === 'x' && i === 'x' && square9.textContent === "") {
        square9.classList.toggle('chessMove');
    }
    // x on square5 take6
    if (event.target === square6 && square6.textContent === 'x' && i === 'x' && square2.textContent === 'o') {
        square2.classList.toggle('chessTake');
    }
    if (event.target === square6 && square6.textContent === 'x' && i === 'x' && square8.textContent === 'o') {
        square8.classList.toggle('chessTake');
    }
    // x on sqaure7
    if (event.target === square7 && square7.textContent === 'x' && i === 'x' && square4.textContent === "") {
        square4.classList.toggle('chessMove');
    }
    if (event.target === square7 && square7.textContent === 'x' && i === 'x' && square8.textContent === "") {
        square8.classList.toggle('chessMove');
    }
    // x on square7 takes
    if (event.target === square7 && square7.textContent === 'x' && i === 'x' && square5.textContent === 'o') {
        square5.classList.toggle('chessTake');
    }
    // x on square8
    if (event.target === square8 && square8.textContent === 'x' && i === 'x' && square5.textContent === "") {
        square5.classList.toggle('chessMove');
    }
    if (event.target === square8 && square8.textContent === 'x' && i === 'x' && square7.textContent === "") {
        square7.classList.toggle('chessMove');
    }
    if (event.target === square8 && square8.textContent === 'x' && i === 'x' && square9.textContent === "") {
        square9.classList.toggle('chessMove');
    }
    // x on square8 takes
    if (event.target === square8 && square8.textContent === 'x' && i === 'x' && square4.textContent === 'o') {
        square4.classList.toggle('chessTake');
    }
    if (event.target === square8 && square8.textContent === 'x' && i === 'x' && square6.textContent === 'o') {
        square6.classList.toggle('chessTake');
    }
    // x on square9
    if (event.target === square9 && square9.textContent === 'x' && i === 'x' && square6.textContent === "") {
        square6.classList.toggle('chessMove');
    }
    if (event.target === square9 && square9.textContent === 'x' && i === 'x' && square8.textContent === "") {
        square8.classList.toggle('chessMove');
    }
    // x on square9 takes
    if (event.target === square9 && square9.textContent === 'x' && i === 'x' && square5.textContent === 'o') {
        square5.classList.toggle('chessTake');
    }
    // o on square1
    if (event.target === square1 && square1.textContent === 'o' && i === 'o' && square2.textContent === "") {
        square2.classList.toggle('chessMove');
    }
    if (event.target === square1 && square1.textContent === 'o' && i === 'o' && square4.textContent === "") {
        square4.classList.toggle('chessMove');
    }
    // o on square1 takes
    if (event.target === square1 && square1.textContent === 'o' && i === 'o' && square5.textContent === 'x') {
        square5.classList.toggle('chessTake');
    }
    // o on square2
    if (event.target === square2 && square2.textContent === 'o' && i === 'o' && square1.textContent === "") {
        square1.classList.toggle('chessMove');
    }
    if (event.target === square2 && square2.textContent === 'o' && i === 'o' && square3.textContent === "") {
        square3.classList.toggle('chessMove');
    }
    if (event.target === square2 && square2.textContent === 'o' && i === 'o' && square5.textContent === "") {
        square5.classList.toggle('chessMove');
    }
    // o on square2 takes
    if (event.target === square2 && square2.textContent === 'o' && i === 'o' && square4.textContent === 'x') {
        square4.classList.toggle('chessTake');
    }
    if (event.target === square2 && square2.textContent === 'o' && i === 'o' && square6.textContent === 'x') {
        square6.classList.toggle('chessTake');
    }
    // o on square3
    if (event.target === square3 && square3.textContent === 'o' && i === 'o' && square2.textContent === "") {
        square2.classList.toggle('chessMove');
    }
    if (event.target === square3 && square3.textContent === 'o' && i === 'o' && square6.textContent === "") {
        square6.classList.toggle('chessMove');
    }
    // o on square3 takes
    if (event.target === square3 && square3.textContent === 'o' && i === 'o' && square5.textContent === 'x') {
        square5.classList.toggle('chessTake');
    }
    // o on square4
    if (event.target === square4 && square4.textContent === 'o' && i === 'o' && square5.textContent === "") {
        square5.classList.toggle('chessMove');
    }
    if (event.target === square4 && square4.textContent === 'o' && i === 'o' && square1.textContent === "") {
        square1.classList.toggle('chessMove');
    }
    if (event.target === square4 && square4.textContent === 'o' && i === 'o' && square7.textContent === "") {
        square7.classList.toggle('chessMove');
    }
    // o on square4 takes
    if (event.target === square4 && square4.textContent === 'o' && i === 'o' && square2.textContent === 'x') {
        square2.classList.toggle('chessTake');
    }
    if (event.target === square4 && square4.textContent === 'o' && i === 'o' && square8.textContent === 'x') {
        square8.classList.toggle('chessTake');
    }
    // o on square5
    if (event.target === square5 && square5.textContent === 'o' && i === 'o' && square2.textContent === "") {
        square2.classList.toggle('chessMove');
    }
    if (event.target === square5 && square5.textContent === 'o' && i === 'o' && square4.textContent === "") {
        square4.classList.toggle('chessMove');
    }
    if (event.target === square5 && square5.textContent === 'o' && i === 'o' && square6.textContent === "") {
        square6.classList.toggle('chessMove');
    }
    if (event.target === square5 && square5.textContent === 'o' && i === 'o' && square8.textContent === "") {
        square8.classList.toggle('chessMove');
    }
    // x on square5 takes
    if (event.target === square5 && square5.textContent === 'o' && i === 'o' && square1.textContent === 'x') {
        square1.classList.toggle('chessTake');
    }
    if (event.target === square5 && square5.textContent === 'o' && i === 'o' && square3.textContent === 'x') {
        square3.classList.toggle('chessTake');
    }
    if (event.target === square5 && square5.textContent === 'o' && i === 'o' && square7.textContent === 'x') {
        square7.classList.toggle('chessTake');
    }
    if (event.target === square5 && square5.textContent === 'o' && i === 'o' && square9.textContent === 'x') {
        square9.classList.toggle('chessTake');
    }
    // o on square6
    if (event.target === square6 && square6.textContent === 'o' && i === 'o' && square5.textContent === "") {
        square5.classList.toggle('chessMove');
    }
    if (event.target === square6 && square6.textContent === 'o' && i === 'o' && square3.textContent === "") {
        square3.classList.toggle('chessMove');
    }
    if (event.target === square6 && square6.textContent === 'o' && i === 'o' && square9.textContent === "") {
        square9.classList.toggle('chessMove');
    }
    // x on square6 takes
    if (event.target === square6 && square6.textContent === 'o' && i === 'o' && square2.textContent === 'x') {
        square2.classList.toggle('chessTake');
    }
    if (event.target === square6 && square6.textContent === 'o' && i === 'o' && square8.textContent === 'x') {
        square8.classList.toggle('chessTake');
    }
    // o on sqaure7
    if (event.target === square7 && square7.textContent === 'o' && i === 'o' && square4.textContent === "") {
        square4.classList.toggle('chessMove');
    }
    if (event.target === square7 && square7.textContent === 'o' && i === 'o' && square8.textContent === "") {
        square8.classList.toggle('chessMove');
    }
    // x on square7 takes
    if (event.target === square7 && square7.textContent === 'o' && i === 'o' && square5.textContent === 'x') {
        square5.classList.toggle('chessTake');
    }
    // o on square8
    if (event.target === square8 && square8.textContent === 'o' && i === 'o' && square5.textContent === "") {
        square5.classList.toggle('chessMove');
    }
    if (event.target === square8 && square8.textContent === 'o' && i === 'o' && square7.textContent === "") {
        square7.classList.toggle('chessMove');
    }
    if (event.target === square8 && square8.textContent === 'o' && i === 'o' && square9.textContent === "") {
        square9.classList.toggle('chessMove');
    }
    // x on square8 takes
    if (event.target === square8 && square8.textContent === 'o' && i === 'o' && square4.textContent === 'x') {
        square4.classList.toggle('chessTake');
    }
    if (event.target === square8 && square8.textContent === 'o' && i === 'o' && square6.textContent === 'x') {
        square6.classList.toggle('chessTake');
    }
    // o on square9
    if (event.target === square9 && square9.textContent === 'o' && i === 'o' && square6.textContent === "") {
        square6.classList.toggle('chessMove');
    }
    if (event.target === square9 && square9.textContent === 'o' && i === 'o' && square8.textContent === "") {
        square8.classList.toggle('chessMove');
    }
    // o on square9 takes
    if (event.target === square9 && square9.textContent === 'o' && i === 'o' && square5.textContent === 'x') {
        square5.classList.toggle('chessTake');
    }
} 



board.addEventListener('click', handleClick)