namespace SpriteKind {
    export const p2 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (derection == 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 6 6 6 6 
            . . . . . . . . . . . . 6 6 6 6 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 0)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 6 6 6 6 
            . . . . . . . . . . . . 6 6 6 6 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -50, 0)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump_count < 2) {
        mySprite.vy = -100
        jump_count = 2
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    derection = 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    derection = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.p2, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
})
let projectile_2: Sprite = null
let jump_count = 0
let projectile: Sprite = null
let derection = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ........................................
    .....................ffffff.............
    ....................f222222f............
    ...................f22552222f...........
    ..................f225555555f...........
    ..................f225511551f...........
    ..................f222555555f...........
    ..................f222555555f...........
    ..................f222255ff5f...........
    ...................f22222552f...........
    .................ffff222222f............
    ................f2255b222222f...........
    ...............f22222b2222222f..........
    ...............f22225b22212222f.........
    ...............f22525222111222f.........
    ...............f55522522212222f.........
    ...............f55522522222225f.........
    ...............f552f2522222225f.........
    ...............f222f2222222225f.........
    ...............f252f2552222222f.........
    ...............f252f22bb222bb2f.........
    ...............f222f2552222252f.........
    ...............f222f222b222b22f.........
    ...............f222f2222222222f.........
    ................f222252222252f..........
    ................f225552222252f..........
    .................ff222222222f...........
    ..................f555225552f...........
    ..................f525225252f...........
    .................f25b5f25b5f............
    .................f22b2f22b2f............
    .................f2222f2222f............
    .................f2222f2222f............
    .................f2222222222f...........
    .................f2222222222f...........
    ..................ffffffffff............
    ........................................
    ........................................
    ........................................
    ........................................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
derection = 0
tiles.setTilemap(tilemap`level1`)
mySprite.setPosition(5, 420)
scene.cameraFollowSprite(mySprite)
mySprite.ay += 200
scene.setBackgroundColor(9)
let mySprite2 = sprites.create(img`
    ........................................
    .............ffffff.....................
    ............f888888f....................
    ...........f8888dd88f...................
    ...........fddddddd88f..................
    ...........f1dd11dd88f..................
    ...........fdddddd888f..................
    ...........fdddddd888f..................
    ...........fdffdd8888f..................
    ...........f2dd88888f...................
    ............f888888ffff.................
    ...........f888888bdd88f................
    ..........f8888888b88888f...............
    .........f88881888bd8888f...............
    .........f888111888d8288f...............
    .........f88881888288222f...............
    .........f28888888288222f...............
    .........f2888888828f822f...............
    .........f2888888888f888f...............
    .........f8888888dd8f828f...............
    .........f8bb888bb88f828f...............
    .........f8d88888dd8f888f...............
    .........f88b888b888f888f...............
    .........f8888888888f888f...............
    ..........f8d88888d8888f................
    ..........f8d88888ddd88f................
    ...........f888888888ff.................
    ...........f8ddd88dddf..................
    ...........f8d2d88d2df..................
    ............fdbd8fdbd8f.................
    ............f8b88f8b88f.................
    ............f8888f8888f.................
    ............f8888f8888f.................
    ...........f8888888888f.................
    ...........f8888888888f.................
    ............ffffffffff..................
    ........................................
    ........................................
    ........................................
    ........................................
    `, SpriteKind.Enemy)
let mysprite_3 = sprites.create(img`
    ........................................
    .............cccccc.....................
    ............cffffffc....................
    ...........cffff22ffc...................
    ...........c2222222ffc..................
    ...........c1221122ffc..................
    ...........c222222fffc..................
    ...........c222222fffc..................
    ...........c2ff22ffffc..................
    ...........c222fffffc...................
    ............cffffffcccc.................
    ...........cffffffbddffc................
    ..........cffdddffbfffffc...............
    .........cffdd1ddfbdffffc...............
    .........cffd111dffdf2ffc...............
    .........cffdd1ddf2ff222c...............
    .........c2ffdddff2ff222c...............
    .........c2fffffff2fcf22c...............
    .........c2fffffffffcfffc...............
    .........cfffffffddfcf2fc...............
    .........cfbbfffbbffcf2fc...............
    .........cfdfffffddfcfffc...............
    .........cffbfffbfffcfffc...............
    .........cffffffffffcfffc...............
    ..........cfdfffffdffffc................
    ..........cfdfffffdddffc................
    ...........cfffffffffcc.................
    ...........cfdddffdddc..................
    ...........cfd2dffd2dc..................
    ............cdbdfcdbdfc.................
    ............cfbffcfbffc.................
    ............cffffcffffc.................
    ............cffffcffffc.................
    ...........cffffffffffc.................
    ...........cffffffffffc.................
    ............cccccccccc..................
    ........................................
    ........................................
    ........................................
    ........................................
    `, SpriteKind.Enemy)
mySprite2.setPosition(109, 420)
mysprite_3.setPosition(144, 430)
mySprite2.ay += 200
mysprite_3.ay += 200
mySprite.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    projectile_2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 6 6 6 6 
        . . . . . . . . . . . . 6 6 6 6 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, -50, 0)
    projectile_2.setKind(SpriteKind.p2)
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jump_count = 0
    }
})
