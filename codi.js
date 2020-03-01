 
 

 
 var cifra = ""; 

 var acumulado=0;

 var sumar=false;

 var restar=false;

 var p_operacion=true;

 var multiplicar=false;

 var dividir=false;


 
  function display_numeros(numero) {

    document.getElementById("display").value = cifra + numero;

    cifra=document.getElementById("display").value; 
   }
 
    window.onload = function() {                     /*Funcion para resetear el display a cero*/
    
    document.getElementById("display").value=0;
   }

  function restart() {                          /*Vuelve la calculadora a cero*/
    
    cifra=0;

    acumulado=0;

    document.getElementById("display").value=0;
   }
 

  function suma() {

    if (restar) {
    
      acumulado=acumulado-parseInt(cifra);

      document.getElementById("display").value=acumulado;
   }

   else if(multiplicar) {

      acumulado=acumulado*parseFloat(cifra);
    
      document.getElementById("display").value=acumulado;
   }

   else if(dividir) {

      acumulado=acumulado/parseFloat(cifra);
    
      document.getElementById("display").value=acumulado;
   }

   else {

      acumulado=acumulado+parseInt(cifra);

      document.getElementById("display").value=acumulado;
   }
   
   cifra="";

   sumar= true;

   restar=false;

   p_operacion=false;

   multiplicar=false;

   dividir=false;
    
 }

 function resta() {

  if (p_operacion==false) {

    if (sumar) {

        acumulado=acumulado+parseInt(cifra);

        document.getElementById("display").value=acumulado;
    }
      
     else if(multiplicar) {
        
        acumulado=acumulado*parseFloat(cifra);
        
        document.getElementById("display").value=acumulado;
     }
  
     else if(dividir) {
      
        acumulado=acumulado/parseFloat(cifra);
      
        document.getElementById("display").value=acumulado;

     }

     else {
        
        acumulado=acumulado-parseInt(cifra);

        document.getElementById("display").value=acumulado;

    }
    }

  else {

    acumulado=parseInt(cifra);

    p_operacion=false;

  }

    cifra="";
    
    sumar=false;
    
    restar=true;
    
    p_operacion=false;
   
    multiplicar=false;
   
    dividir=false;   
    }

  function multiplicacion() {

      if (p_operacion == false) {

          if (dividir) {

              acumulado=acumulado/parseFloat(cifra);

              document.getElementById("display").value=acumulado;
          }

          else if (sumar) {

              acumulado=acumulado+parseFloat(cifra);

              document.getElementById("display").value=acumulado;
          }

          else if (restar) {

              acumulado=acumulado-parseFloat(cifra);

              document.getElementById("display").value=acumulado;
          }

          else {

              acumulado=acumulado*parseFloat(cifra);

              document.getElementById("display").value=acumulado;
          }
      }

      else{

          acumulado = parseFloat(cifra);

          p_operacion=false;
      }
      
      cifra="";

      sumar=false;

      restar=false;

      multiplicar=true;

      dividir=false;

      p_operacion=false;
  }
  
  function division() {

      if (p_operacion == false) {

          if (multiplicar) {

              acumulado=acumulado*parseFloat(cifra);

              document.getElementById("display").value=acumulado;
          }

          else if (sumar) {

              acumulado=acumulado+parseFloat(cifra);

              document.getElementById("display").value=acumulado;
          }

          else if (restar) {

              acumulado=acumulado-parseFloat(cifra);

              document.getElementById("display").value=acumulado;
          }

          else {

              acumulado=acumulado/parseFloat(cifra);

              document.getElementById("display").value=acumulado;
          }
      }

      else {

          acumulado=parseFloat(cifra);

          p_operacion=false;
      }

      cifra="";

      sumar=false;

      restar=false;

      multiplicar=false;

      dividir=true;

      p_operacion=false;
  }
  
 function resultado() {

    if (sumar) {

      document.getElementById("display").value=acumulado+parseInt(cifra);
    }

    else if (restar) {

      document.getElementById("display").value=acumulado-parseInt(cifra);
    }

    else if (multiplicar) {
      
      document.getElementById("display").value=acumulado*parseFloat(cifra);
      
      cifra=1;          /*Si la cifra es cero, al multiplicar el resultado siempre es cero*/
  }

    else if (dividir) {

      document.getElementById("display").value=acumulado/parseFloat(cifra);

      cifra=1;
  }

    acumulado=parseInt(document.getElementById("display").value);


    }

function decimal() { 

    if(cifra == ""){ 

        cifra = "0.";             /*Si no tenemos ningun numero y marcamos el decimal le pedimos que coloque un cero delante*/
    }

    else if(cifra.indexOf('.') == -1){          /*Que coloque el decimal detras del numero marcado en el display */
       
            cifra += ".";      /*Que impida que haya más de un decimal*/
    }

    document.getElementById("display").value=cifra;
}


  