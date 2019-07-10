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
var boarddivs = document.querySelectorAll(".board div")
var sqaures = document.querySelectorAll('div')

var playerTurn = true
var boardArray = ['','','',
                '','','',
                '','',''] 

var XorO = function () {
    if (playerTurn) {
        i = 'x'
    } else {
        i = 'o'
    }
}

var handleClick = function(event) {
    XorO()
    boardArray[Number(event.target.dataset.cell)] = i
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

    if (event.target.textContent === '') {
        event.target.textContent = i
        solutions.forEach(compare)
        playerTurn = !playerTurn
    }
}

// var baordArray = 
// ['o','o','x',
// 'x','x',' ',
// ' ',' ','o']

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



// solution1.forEach(function(cell) {
//     if (cell !== 'I') { 
//     var solstr = solution1.join()
//     var baostr = baordArray.join()
//         if (solstr === baostr) {
//             console.log('test')
//         }
//     }
// })

// solution 2
// ['ingor','ignor','ingor',
// 'i','i','i',
// 'ignor', 'ignor','ingor']




board.addEventListener('click', handleClick)