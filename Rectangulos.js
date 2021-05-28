class Rectangulos{
    constructor(x,y){

        this.golpeado = true;
        

    }

    mostrar(){

       for (let fila = 0; fila < 4; fila++) {
           for (let col = 0; col < 3; col++) {
                fill(255,128,0);
                rect(257*fila,110*col,247,100);
                
            }
            
        }
           
           
    }
}




