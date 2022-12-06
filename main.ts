basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
basic.forever(function () {
    if (input.soundLevel() >= 30) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
})
