let lastTime = 0
let motionLevel = 1
let strip = neopixel.create(DigitalPin.P2, 83, NeoPixelMode.RGB)
strip.show()
basic.forever(function () {
    if (motionLevel >= randint(1, 20)) {
        strip.setPixelColor(0, neopixel.rgb(randint(50, 255), randint(50, 255), randint(50, 255)))
    }
    strip.shift(1)
    strip.show()
    if (motionLevel > 1 && input.runningTime() - lastTime > 1000) {
        motionLevel += -1
        lastTime = input.runningTime()
    }
    basic.pause(100)
})
basic.forever(function () {
    if (motionLevel < 20 && input.acceleration(Dimension.Strength) > 1100) {
        motionLevel += 1
    }
})
