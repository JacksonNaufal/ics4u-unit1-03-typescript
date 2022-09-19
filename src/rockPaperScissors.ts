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

const userInput = prompt('Enter your choice, Rock, Paper or Scissors: ')

// checks if input is valid
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  // bot gets random number from 1 - 3.
  const MAX = 3
  const MIN = 1

  // generates random number
  const randomNumber = Math.floor(Math.random() * MAX) + MIN
  let botPlayer = String(randomNumber)

  // program converts number to rock, paper, scissors.
  if (randomNumber === 1) {
    botPlayer = 'rock'
  } else if (randomNumber === 2) {
    botPlayer = 'paper'
  } else {
    botPlayer = 'scissors'
  }

  // program goes through combinations, and checks if the userInput
  // wins, loses, or ties the botPlayer.
  if (botPlayer === userInput) {
    console.log('It was a tie! ${botPlayer} equals ${userInput}!')
  } else if (
    (botPlayer === 'paper' && userInput === 'rock') ||
    (botPlayer === 'scissors' && userInput === 'paper') ||
    (botPlayer === 'rock' && userInput === 'scissors')
  ) {
    console.log('botPlayer wins! ${botPlayer} beats ${userInput}!')
  } else {
    console.log('User wins! ${userInput} beats ${botPlayer}!')
  }
} else {
  // catch if an input is invalid
  console.log('Invalid Input')
}
console.log('\nDone.')
