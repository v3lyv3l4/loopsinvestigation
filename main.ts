basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            `)
        basic.pause(1000)
    }
})
