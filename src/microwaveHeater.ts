/**
 * The program is the classic
 * microwave.
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-01-01
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const subTime = 60
const pizzaTime = 45
const soupTime = 105
const two = 1.5
const three = 2
let time = 0
let minutes = 0
let seconds = 0

// let userInput = soup, pizza, or sub
const userInput = prompt('Enter your choice, sub, pizza or soup: ')
if (userInput === 'sub' || userInput === 'pizza' || userInput === 'soup') {
  const timeString = prompt('Enter your amount: ')
  const amountNumber = parseFloat(timeString)

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
    } else if (amountNumber == 3) {
      time = time * three
    }
    seconds = time / 60
    minutes = Math.floor(seconds)
    seconds = (seconds - minutes) * 60
    console.log(
      `The ${userInput} will be done in ${minutes} minutes ${seconds} seconds!`
    )
  } else {
    console.log('Invalid Number!')
  }
} else {
  // catch if an input is invalid
  console.log('Invalid Input')
}
console.log('\nDone.')
