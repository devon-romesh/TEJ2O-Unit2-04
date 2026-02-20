/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Devon
 * Created on: Feb 2026
 * This program 
*/

// Variable for the Temperature
let temperature: number

//The Setup for the smilely face
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

//when A is pressed it will show the temperature 
input.onButtonPressed(Button.A, function () {
  temperature = input.temperature() 
  basic.showString('The temperature is' + temperature)
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
  basic.pause(1000)
})
