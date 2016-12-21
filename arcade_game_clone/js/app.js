// Enemies our player must avoid
allEnemies = [];
allGems = []
var Enemy = function(pos_y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = getRandomInteger(-100, -500);
    this.y = pos_y * 75;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x > 400) {
        this.x = getRandomInteger(-100, -500);
        this.speed = getRandomInteger(50, 400);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Bugs = function() {
    this.Bugs = [];
}

Bugs.prototype.update_array = function(n) {

    var position = [1, 2, 3, 4];
    for (var i = 0; i < 4; i++) {
        var speed = getRandomInteger(50, 200);
        console.log(position[i]);
        //before pushing values to allEnemies array push them to Bugs array
        this.Bugs[allEnemies.length] = new Enemy(position[i], speed);
        //updating allEnemies array
        allEnemies.push(this.Bugs[allEnemies.length]);
    }
};
    // Now write your own player class
    // This class requires an update(), render() and
    // a handleInput() method.

var bug = new Bugs();
bug.update_array(4);

var Gems = function(x, y, image) {
    this.sprite = image;
    this.x = x * 70;
    this.y = y * 70;
};

Gems.prototype.update = function() {
    var pos_x = [1, 2, 3, 4, 5];
    var pos_y = [1, 2, 3, 4];
    var arr = ["images/Gem_Blue.png", "images/Gem_Orange.png", "images/Gem_Green.png"]
    var img_x = getRandomInteger(0, 4)
    var img_y = getRandomInteger(0, 3);
    var img = getRandomInteger(0, 2);
    // getting a random Gem image out of three images
    var image = arr[img];
    gem = new Gems(pos_x[img_x], pos_y[img_y], image);
};

//Draw gem on screen
Gems.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

function getRandomInteger(min, max) {
    var x = Math.floor(Math.random() * (max - min + 1)) + min;
    return x;
}

//instantiation
var gem = new Gems(1, 2, "images/Gem_Blue.png");

var Player = function() {
    this.x = 300;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
};

//Draw player on screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// udate the player position

Player.prototype.update = function() {
    this.x = this.x;
    this.y = this.y;

    //move player depending on which key is pressed
};
Player.prototype.handleInput = function(e) {
    if (e == 'left' && this.x > 0) {
        //move left by 50px
        this.x = this.x - 50;
    } else if (e == 'right' && this.x < 400) {
        this.x = this.x + 50;
        //move right by 50px
    } else if (e == 'up' && this.y > 0) {
        //move up by 50px
        this.y = this.y - 50;
    } else if (e == 'down' && this.y < 400) {
        //move down by 50px
        this.y = this.y + 50;
    }
};
    //instantiation
var player = new Player();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});