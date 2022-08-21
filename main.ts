input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.temperature()))
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
    if (input.temperature() >= 20) {
        music.playMelody("C E D F E G F A ", 120)
    } else if (input.temperature() < 20) {
        music.playMelody("C5 A B G A F G E ", 120)
    }
})
