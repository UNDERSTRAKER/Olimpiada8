class Rectangulos{
    constructor(x,y){

        this.golpeado = true;
        this.mapa = 0;
    

    }

    mostrar(){

       for (let fila = 0; fila < 4; fila++) {
           for (let col = 0; col < 6; col++) {
               if(this.mapa[fila][col] == 0){
                     this.golpeado = true;
                     fill(255);
               }else if( this.mapa[fila][col] == 1){
                     this.golpeado = false;
                
               }
               rect(242*fila,100*col,100,100);
           }
           
           
       }

    }




} 