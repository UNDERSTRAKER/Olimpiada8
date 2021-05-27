class ReactanguloAbajo{
    constructor(x,y){

        this.tamanoAncho = 300;
        this.tamanoLargo = 26
        this.xR = 350;
        this.yR = 900;

    }

    mostrar(){

        noStroke();
        fill(255);
        rect(this.xR,this.yR,this.tamanoAncho,this.tamanoLargo);

    }

    mover(){
        if(keyIsPressed){
            switch(key){
                case 'a':
                    this.xR -=6;
                    break;
                case 'd':
                    this.xR +=6;
                    break;
                
            }
        }
    }
                    


}