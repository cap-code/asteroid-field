var img = [];
var stars = [];
var y = 0;
var m = 0;
var speed;
class Star {
  constructor() {
    this.x = random( -width / 2, width / 2 );
    this.y = random( -height / 2, height / 2 );
    this.z = random( width );
    this.m = floor( random( 0, 5 ) );
  }
  update() {
    this.z -= speed;
    if ( this.z < 1 ) {
      this.x = random( -width / 2, width / 2 );
      this.y = random( -height / 2, height / 2 );
      this.z = random( width );
    }
  }
  show() {
    var px = map( this.x / this.z, 0, 1, 0, width / 2 );
    var py = map( this.y / this.z, 0, 1, 0, height / 2 );
    var pz = map( this.z, 0, width, 35, 2 );
    image( img[ this.m ], px, py, pz, pz );
  }
}

function preload() {
  for ( var i = 0; i < 5; i++ ) {
    var j = i + 1;
    img[ i ] = loadImage( 'asteroid' + j + '.png' );
  }
}

function setup() {
  var canvas = createCanvas( windowWidth, windowHeight );
  canvas.position( 0, 0 );
  canvas.style( 'z-index', '-1' );
  for ( var i = 0; i < 500; i++ ) {
    stars[ i ] = new Star();
  }
  imageMode( CENTER );
}

function draw() {
  speed = map( mouseX, 0, width, 1, 20 );
  translate( width / 2, height / 2 );
  background( 0, 80 );
  for ( var i = 0; i < 500; i++ ) {
    stars[ i ].update();
    stars[ i ].show();
  }
}

function windowResized() {
  resizeCanvas( windowWidth, windowHeight );
}