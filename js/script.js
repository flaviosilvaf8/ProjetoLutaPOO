let log= new Log(document.querySelector('.log'))

let char = new Sorcerer("Flavio");

let monster = new LittleMonster();

let stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start();