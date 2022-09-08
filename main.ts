basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Giraffe)
            basic.pause(100)
            basic.showLeds(`
                # # . . .
                . # . . .
                . # . . .
                . # # # .
                # . # . .
                `)
            basic.pause(100)
        }
    }
})
