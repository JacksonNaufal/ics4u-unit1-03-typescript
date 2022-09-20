/**
 * The program is the classic game of
 * rock, paper, scissors!
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-01-01
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
// let userInput = rock, paper, or scissors.

const max = 3
const min = 1
const subTime = 60
const pizzaTime = 45
const soupTime = 105
const two = 1.5
const three = 2
let time 

const userInput = prompt('Enter your choice, Rock, Paper or Scissors: ')
if (userInput === 'sub' || userInput === 'pizza' || userInput === 'soup') {
  const timeString = prompt('Enter your amount: ')
  const amountNumber = parseFloat(timeString)
  if (amountNumber < min && amountNumber > max ) {
}


    if (userInput === 'sub') {
     time = subTime
    } else if (userInput === 'pizza') {
     time = pizzaTime
    } else if (userInput === 'soup') {
     time = soupTime
    }
	
    if (amountNumber == 1 || amountNumber == 2 || amountNumber == 3) {
        if (amountNumber == 2) {
	  time = time * two
        } else {
	  time = time * three
        }
	console.log(time)
    } else {
	console.log('Invalid Number!')
    }

    if (amountNumber == 1) {
      console.log(subTime)
    } else if (amountNumber == 2) {
      let time = subTime * two
      console.log(time)
    } else if (amountNumber == 3) {
      let time = subTime * three
      console.log(time)
    }
  }
  if (userInput === 'pizza') {
    if (amountNumber == 1) 
      console.log(pizzaTime)
  } else if (amountNumber == 2) {
    let time = pizzaTime * two
    console.log(time)
  } else if (amountNumber == 3) {
    let time = pizzaTime * three
    console.log(time)
  }
  if (userInput === 'soup') {
    if (amountNumber == 1) {
      console.log(soupTime)
    }
  } else if (amountNumber == 2) {
      let time = soupTime * two
      console.log(time)
  } else if (amountNumber == 3) {
      let time = soupTime * three
      console.log(time)
    }
} else {
  // catch if an input is invalid
  console.log('Invalid Input')
}
console.log('\nDone.')
