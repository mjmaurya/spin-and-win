
let config = {
    width : 1400,
    height : 700,
    scene : {
        preload : preload,
        create : create,
        update : update,
    }
};
var game = new Phaser.Game(config);
    
function preload(){
    //load an image
    console.log(this);
    this.load.image('background',"Assets/back.jpg");
    this.load.image('wheel',"Assets/wheel.png");
    
    this.load.image('stand',"Assets/stand.png"); 
    this.load.image('pin',"Assets/pin.png");
    this.load.image('button', 'Assets/button.png', 193, 71);
    
    
}
var button;
function create(){
    //create that image
    let W = game.config.width;
    let H = game.config.height;
    
    this.add.sprite(0,0,'background');
    
    let pin = this.add.sprite(W/2,H/2-250,'pin').setScale(0.25);
    
    pin.depth = 5;
    
    this.add.sprite(W/2,H/2 + 250,'stand').setScale(0.25);
    
    
    //let create wheel
    this.wheel = this.add.sprite(W/2,H/2,"wheel");
    this.wheel.setScale(0.25); 
    let button=this.add.sprite(W/2,H/2 + 320, 'button',this, 2, 1, 0).setScale(.25);
    button.depth=1;
   this.input.on("pointerdown",spinwheel,this);
    
}
function update(){
    console.log("In Update");
    //this.wheel.angle -= 1;
    
}
function spinwheel(){
    console.log("Time to spin the wheel");
    
    let rounds = Phaser.Math.Between(2,4);
    console.log(rounds);
    
    let extra_degrees = Phaser.Math.Between(0,11)*30;
    let total_angle = rounds*360 + extra_degrees;
    
    let tween = this.tweens.add({
        targets: this.wheel,
        angle: total_angle,
        ease:"Cubic.easeOut",
        duration: 3000
    });
}
                        
