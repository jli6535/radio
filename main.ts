input.onButtonPressed(Button.A, function () {
    radio.sendString("Y")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("M")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("N")
})
radio.setGroup(123)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
