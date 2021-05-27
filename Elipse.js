class Elipse{
    constructor(x,y){

        rectAbajo = new ReactanguloAbajo();
        this.x = 500;
        this.y = 876;
        this.direccionY = Math.random(6);
        this.velX = Math.random(-1,6);
        if(this.direccionY == 0){
            this.velY = 1;
        }else {
            this.velY = -8;
        }


    }

    mostrar(){
        noStroke();
        fill(255);

        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
        ellipse(this.x,this.y,50,50);

        if (this.x > 1000 || this.x < 0) {
			this.velX = this.velX * -1;
		}
		if (this.y < 0) {
			this.velY = this.velY * -1;
		}
		if (dist(this.x, this.y, rectAbajo.xR, rectAbajo.yR) < 50) {
			this.velX = this.velX * -1;
			this.velY = this.velY * 1;
		}
		
		}

    





}