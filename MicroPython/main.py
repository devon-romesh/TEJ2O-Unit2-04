"""
Created by: Devon
Created on: Apr 2026
This module is a Micro:bit MicroPython program that reads the current temp.
"""

from microbit import *


# Setup before a is pressed
display.clear()
display.show(Image.HAPPY)
sleep(1000)


while True:
    if button_a.was_pressed():
        temperature = temperature()  # reads micro:bit temperature
        display.scroll("The temperature is " + (temperature))
        display.clear()
        display.show(Image.HAPPY)
        sleep(1000)
