
let rectAbajo = new ReactanguloAbajo();
let rectS = new Rectangulos(200,200);
let eli = new Elipse();

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  eli.mostrar();
  rectAbajo.mostrar();
  rectAbajo.mover();
  rectS.mostrar();
  
  
}

function validarGolpeRectAbajo(rectA, eli) {
    if(rectA.getX()){

    }


}

