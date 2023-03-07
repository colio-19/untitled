input.onButtonPressed(Button.A, function () {
    lazer = game.createSprite(shooter.get(LedSpriteProperty.X), shooter)
})
let lazer: game.LedSprite = null
let shooter: game.LedSprite = null
shooter = game.createSprite(2, 5)
basic.forever(function () {
    shooter.move(1)
    basic.pause(150)
    shooter.ifOnEdgeBounce()
})
