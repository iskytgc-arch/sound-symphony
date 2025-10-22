input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        . . # . #
        . # . . .
        # . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C5 C5 C5 B B B C5 C5 ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    led.setBrightness(input.soundLevel())
    if (input.soundLevel() > 150) {
        music.play(music.stringPlayable("C5 A B G A F G E ", 415), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
})
