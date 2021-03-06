sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    for (let index = 0; index < 4; index++) {
        mySprite2.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
    }
    otherSprite.destroy(effects.disintegrate, 500)
    info.startCountdown(100)
})
let mySprite2: Sprite = null
scene.setTileMap(img`
7 7 7 2 2 2 2 7 7 7 7 7 7 7 8 8 7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 
7 7 2 2 7 7 7 2 2 2 2 2 7 7 8 8 7 7 7 7 4 4 4 4 4 7 7 7 7 7 7 7 
7 7 2 7 7 7 7 7 7 7 7 2 7 7 8 8 7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 7 
7 7 2 7 2 2 2 7 7 7 2 b b b b b b b b b 7 7 e 2 2 2 2 2 2 2 7 7 
7 7 2 2 2 7 2 7 7 7 2 b b b b b b b b b 7 7 7 7 7 7 7 7 7 2 2 7 
7 7 7 7 7 7 7 2 7 7 2 7 7 7 8 8 7 7 7 2 7 7 7 7 4 4 4 7 7 7 2 7 
7 7 7 2 2 2 2 7 7 7 7 2 7 7 8 8 8 7 7 2 2 2 2 4 4 4 4 4 7 7 2 7 
7 2 2 2 7 7 7 7 7 7 7 7 7 7 7 8 8 7 7 7 7 7 2 4 4 4 4 4 7 2 2 7 
7 2 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 7 7 7 7 7 2 7 4 4 4 7 7 2 7 7 
7 2 7 7 7 7 7 2 2 2 2 2 2 7 7 8 8 7 7 7 7 7 2 7 7 e 7 7 7 2 7 7 
7 2 7 7 7 7 2 7 7 7 7 7 2 7 7 7 8 8 7 7 7 7 2 7 7 e 7 7 7 2 7 7 
7 2 2 2 2 2 2 7 7 7 7 7 2 7 7 7 8 8 7 2 2 2 2 2 7 e 7 7 2 2 7 7 
7 a 7 7 7 7 7 7 7 7 7 7 2 7 7 b b b b b 7 2 7 7 2 7 7 2 2 7 7 7 
7 a 7 7 7 7 7 7 7 7 7 7 2 2 7 b b b b b 7 2 7 7 2 7 7 2 7 7 7 7 
7 a 7 7 7 7 7 7 7 7 7 a a 2 2 7 8 8 8 2 2 2 7 7 2 7 7 2 2 2 2 2 
7 a 7 7 7 7 7 7 7 7 7 a 7 7 7 7 7 8 8 7 7 2 7 7 2 2 7 7 7 7 7 7 
7 a 7 7 7 7 a a a a a 7 7 7 7 7 7 8 8 7 7 2 7 7 7 2 2 2 2 2 2 2 
7 a 7 7 7 7 a 7 7 7 7 7 7 b b b b b b b b b b 7 7 7 2 7 7 7 7 7 
7 a a a 7 7 a 7 7 7 7 7 7 b b b b b b b b b b 7 2 2 2 7 7 7 7 7 
7 7 7 a 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 7 7 2 7 7 2 7 7 7 7 7 7 7 
7 7 7 a a 7 7 7 7 7 2 2 7 7 2 2 7 8 8 7 7 2 7 7 2 7 7 4 4 4 7 7 
7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 7 8 7 7 2 2 7 7 2 7 4 4 4 4 4 7 
7 7 7 7 7 7 7 2 2 2 7 7 7 2 7 7 7 8 7 7 2 7 7 7 2 7 7 4 4 4 7 7 
7 7 7 7 7 7 2 2 7 7 7 7 7 7 7 7 7 8 7 7 2 7 7 7 2 2 7 7 e 7 7 7 
7 7 2 2 2 2 2 7 7 7 7 7 7 7 7 7 7 8 7 7 2 7 7 7 7 2 2 7 e 7 7 7 
7 7 2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 7 7 2 7 7 7 7 2 7 7 7 7 7 
7 7 2 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 7 7 2 7 7 2 2 2 7 7 7 7 7 
7 7 2 2 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 7 7 2 2 2 2 7 7 7 7 7 7 7 
7 7 2 2 7 7 7 7 7 7 7 7 7 7 7 7 2 2 8 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 2 7 7 7 7 2 2 2 7 7 2 2 2 7 2 7 8 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 2 2 2 2 2 7 7 2 2 2 7 7 2 2 2 7 8 8 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 7 7 7 7 7 7 7 7 7 7 7 7 
`)
// when turned on player cannot move passed this color
// and there is a texture to add to the brown
scene.setTile(4, img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 e 4 4 4 4 4 4 4 4 4 e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 e 4 4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 e e 4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 
4 4 4 4 4 4 e 4 4 4 4 4 4 e e 4 4 4 4 4 4 4 4 4 4 4 e e 4 4 4 4 
4 4 4 4 4 4 e 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 e e e e 4 4 4 4 4 4 
4 4 4 4 4 4 e e 4 4 4 4 4 e 4 4 4 4 4 4 4 e e 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 e e 4 4 4 4 e 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 e e 4 4 e e 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 
4 4 e 4 4 4 4 4 4 e e 4 e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 
4 4 e 4 4 4 4 4 4 4 e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 e e 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 e e e 4 4 4 4 4 
4 4 4 e e e 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 e e e 4 4 4 4 4 4 4 
4 4 4 4 4 e e 4 4 4 4 e e e e 4 4 4 e e e e 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 e e e e e e 4 4 e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 e e 4 e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, true)
scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 6 6 8 8 8 6 8 8 8 8 8 8 8 8 8 
8 6 6 6 6 6 6 6 8 8 6 6 6 6 8 8 
8 8 8 8 8 8 8 6 6 8 6 6 8 6 6 6 
8 8 8 8 8 8 8 8 8 6 6 8 8 8 8 8 
8 8 8 6 8 8 8 6 6 6 8 8 8 8 8 8 
8 6 6 6 6 8 6 6 6 8 8 8 8 8 8 8 
8 6 8 8 6 6 6 8 6 6 8 6 6 6 8 8 
8 8 8 8 8 8 8 8 6 6 6 6 8 6 6 8 
8 8 8 6 6 6 6 6 8 8 8 8 8 8 6 8 
8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 6 6 8 8 8 6 6 6 8 8 8 6 6 
8 6 6 8 6 6 8 6 6 8 6 6 8 6 8 6 
8 6 8 8 8 6 6 6 8 8 8 6 6 6 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 
`, true)
scene.setTile(2, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(10, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . 
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f c f f f f f f . . 
c f f f c c f f f f f f f 
c f f f f f f f c f f f f 
c c f f e e f f f c c c . 
f c c f f e e f f f f f . 
f f f b f e e f b f f f . 
f f 4 1 f 4 4 f 1 4 f f . 
e f e e 4 4 4 4 4 e f . . 
e 4 4 4 e 7 7 7 b f e f . 
. e 4 4 e 7 7 7 7 f 4 e . 
. . e e 6 6 6 6 6 f . . . 
. . . f f f f f f f . . . 
. . . . . . . f f f . . . 
`, SpriteKind.Player)
// moves sprite
controller.moveSprite(mySprite, 100, 100)
// Camera follows sprite
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 40; index++) {
    mySprite2 = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 7 1 1 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 7 7 1 1 7 1 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 7 7 1 1 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 7 7 1 1 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 7 7 1 1 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 7 1 1 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 7 1 1 7 1 1 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 7 1 1 7 1 1 7 1 1 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 7 1 1 7 1 1 7 1 1 1 7 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 7 1 1 7 1 1 7 1 1 1 7 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 7 7 1 7 1 1 7 1 1 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 7 1 1 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.Food)
    mySprite2.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
    info.startCountdown(100)
}
